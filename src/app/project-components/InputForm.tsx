"use client";

import axios from "axios";
import React from "react";
import InputMask from "react-input-mask";
import { NumericFormat } from "react-number-format";

interface Field {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  mask?: string;
  options?: { value: string; label: string }[];
  component?: string; // "input", "select", "textarea", etc.
  fetchOnBlur?: boolean; // Indica se deve buscar dados ao sair do campo
}

interface InputFormProps {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  formData: any;
  onSubmit: (formattedData: any) => void;
  fields: Field[];
  title: string;
  onDataFetch?: (data: any) => void; // Função para atualizar os dados do formulário com os dados obtidos do servidor
}

export default function InputForm({
  setFormData,
  formData,
  onSubmit,
  fields,
  title,
  onDataFetch,
}: InputFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formata os dados conforme necessário antes de enviar
    const formattedData = { ...formData };

    // Exemplo de formatação para campos específicos
    for (const field of fields) {
      if (field.type === "cpf") {
        formattedData[field.name] = formattedData[field.name].replace(/\D/g, "");
      } else if (field.type === "currency") {
        formattedData[field.name] = parseFloat(
          formattedData[field.name].replace(/[^\d,]/g, "").replace(",", ".")
        ).toFixed(2);
      }
    }

    onSubmit(formattedData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para buscar dados quando sair do campo (onBlur)
  const handleBlur = async (field: Field) => {
    if (field.fetchOnBlur && formData[field.name]) {
      try {
        const response = await axios.get(`https://api-picpay.2fs.com.br/wallets/${formData[field.name]}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${formData.token}`,
          },
        });

        const data = response.data;

        // Atualiza os campos do formulário com os dados recebidos
        if (onDataFetch) {
          onDataFetch(data);
        }
      } catch (error: any) {
        console.error("Erro ao buscar os dados:", error);
        alert("Erro ao buscar os dados. Verifique o ID e o token.");
      }
    }
  };

  return (
    <div>
      <div className="flex-1 flex-col min-h-full border border-emerald-800 rounded-xl bg-gray-100 p-4 justify-center">
        <div className="flex-shrink w-full m-1 justify-center text-gray-700 text-center">
          <h1 className="text-2xl">{title}</h1>
        </div>
        <form className="w-full justify-left" onSubmit={handleSubmit}>
          {fields.map((field) => {
            switch (field.type) {
              case "text":
              case "email":
              case "number":
                return (
                  <div className="w-full mt-4" key={field.name}>
                    <label className="block text-sm font-medium text-gray-700" htmlFor={field.name}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                        shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
                      placeholder={field.placeholder}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      onBlur={() => handleBlur(field)} // Adicionamos o onBlur
                    />
                  </div>
                );
              case "cpf":
                return (
                  <div className="w-full mt-4" key={field.name}>
                    <label className="block text-sm font-medium text-gray-700" htmlFor={field.name}>
                      {field.label}
                    </label>
                    <InputMask
                      mask={"999.999.999-99"}
                      maskChar={" "}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                        shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
                      placeholder={field.placeholder}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    />
                  </div>
                );
              case "currency":
                return (
                  <div className="w-full mt-4" key={field.name}>
                    <label className="block text-sm font-medium text-gray-700" htmlFor={field.name}>
                      {field.label}
                    </label>
                    <NumericFormat
                      id={field.name}
                      thousandSeparator=""
                      decimalSeparator=","
                      decimalScale={2}
                      fixedDecimalScale={true}
                      prefix="R$ "
                      placeholder={field.placeholder}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                        shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
                      valueIsNumericString={true}
                      allowLeadingZeros={false}
                      allowNegative={false}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    />
                  </div>
                );
              case "radio":
                return (
                  <div className="w-full mt-4 sm:text-sm" key={field.name}>
                    <fieldset>
                      <legend>{field.label}</legend>
                      <div className="mt-2 content-between gap-3 flex">
                        {field.options?.map((option) => (
                          <div key={option.value}>
                            <input
                              id={`${field.name}-${option.value}`}
                              type="radio"
                              name={field.name}
                              value={option.value}
                              checked={formData[field.name] === option.value}
                              onChange={handleChange}
                            />
                            <label htmlFor={`${field.name}-${option.value}`}> {option.label}</label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                );
              default:
                return null;
            }
          })}

          <button
            className="mt-6 flex w-48 flex-col px-4 py-2 bg-yellow-600 bg-opacity-80 text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 
                    focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75 justify-end"
            type="submit"
          >
            Gerar Texto Request
          </button>
        </form>
      </div>
    </div>
  );
}
