"use client";

import { NumericFormat } from "react-number-format";

interface InputFormTransactionProps {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  formData: any;
  onSubmit: (formattedData: any) => void;
}

export default function InputFormTransaction({
  setFormData,
  formData,
  onSubmit,
}: InputFormTransactionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Remove a máscara de moeda, ajusta o formato do valor
    const formattedAmount = parseFloat(
      formData.amount.replace(/[^\d,]/g, "").replace(",", ".")
    ).toFixed(2);

    // Atualiza o estado com os valores formatados
    const formattedData = {
      ...formData,
      amount: formattedAmount,
    };

    // Chama a função onSubmit passada pelo componente pai
    onSubmit(formattedData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="flex-1 flex-col min-h-full border border-emerald-800 rounded-xl bg-gray-100 p-4 justify-center">
        <div className="flex-shrink w-full m-1 justify-center text-gray-700 text-center">
          <h1 className="text-2xl">
            POST no endpoint
            <strong>&nbsp;/transactions</strong>
          </h1>
        </div>
        <form className="w-full justify-left" onSubmit={handleSubmit}>
          {/* Campo Token JWT */}
          <div className="w-full mt-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="token">
              Token JWT
            </label>
            <input
              type="text"
              id="token"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                  shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
              placeholder="Token JWT"
              name="token"
              value={formData.token}
              onChange={handleChange}
            />
          </div>

          {/* Campo ID Payer */}
          <div className="w-full mt-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="payerId">
              ID do Pagador (Payer)
            </label>
            <input
              type="number"
              id="payerId"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                  shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
              placeholder="Digite o ID do pagador"
              name="payerId"
              value={formData.payerId}
              onChange={handleChange}
            />
          </div>

          {/* Campo ID Payee */}
          <div className="w-full mt-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="payeeId">
              ID do Recebedor (Payee)
            </label>
            <input
              type="number"
              id="payeeId"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                  shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
              placeholder="Digite o ID do recebedor"
              name="payeeId"
              value={formData.payeeId}
              onChange={handleChange}
            />
          </div>

          {/* Campo Valor */}
          <div className="w-full mt-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="amount">
              Valor da Transação
            </label>
            <NumericFormat
              id="amount"
              thousandSeparator=""
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale={true}
              prefix="R$ "
              placeholder="R$ 0,00"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
                  shadow-sm focus:outline-none focus:ring-emerald-800 focus:border-emerald-800 sm:text-sm"
              valueIsNumericString={true}
              allowLeadingZeros={false}
              allowNegative={false}
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

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
