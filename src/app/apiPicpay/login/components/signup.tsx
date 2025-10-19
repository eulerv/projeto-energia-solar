// signup.tsx
"use client";

import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [responseData, setResponseData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "https://api-picpay.2fs.com.br/signup",
        // "http://localhost:8080/signup",
        {
          username,
          password,
        }
      );
      setResponseStatus(response.status);
      setResponseData("Usuário cadastrado com sucesso!");
      setErrorMessage("");
    } catch (error: any) {
      setResponseStatus(error.response?.status || null);
      setResponseData("");
      setErrorMessage(error.response?.data?.message || "Erro ao cadastrar");
    }
  };

  return (
    <div className="p-4 rounded-lg border border-zinc-600 bg-white shadow-md w-full">
      <div className="bg-emerald-500 bg-opacity-60 border-2 border-black font-aleo rounded-lg w-full text-black p-2 mb-4">
        Cadastrar usuário:
        <br /> Endpoint: /signup
      </div>
      <div className="flex flex-col bg-gray-100 p-4 rounded-lg border border-black"> 
        <div className="w-full">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="username"
          >
            Nome de usuário (sem espaços)
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlightButton focus:border-highlightButton sm:text-sm"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="w-full mt-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlightButton focus:border-highlightButton sm:text-sm"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-6 flex justify-start">
          <button
            onClick={handleSignup}
            className="px-4 py-2 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75"
          >
            Cadastrar
          </button>
        </div>
        {responseStatus && (
          <div className="mt-6">
            <p className="text-sm font-medium">
              <strong>Status HTTP:</strong> {responseStatus}
            </p>
            {responseData && (
              <p className="text-sm text-green-600 mt-2">{responseData}</p>
            )}
            {errorMessage && (
              <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
