// authenticate.tsx
"use client";

import axios from "axios";
import { useState } from "react";

export default function Authenticate() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [responseData, setResponseData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAuthenticate = async () => {
    try {
      const response = await axios.post(
        "https://api-picpay.2fs.com.br/authenticate",
        // "http://localhost:8080/authenticate",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "text",
        }
      );
      setResponseStatus(response.status);
      setResponseData(response.data); // Agora capturamos o token diretamente
      setErrorMessage("");
      localStorage.setItem("jwtToken", response.data);
    } catch (error: any) {
      console.error(error);
      setResponseStatus(error.response?.status || null);
      setResponseData("");
      setErrorMessage(error.response?.data || "Erro ao autenticar");
      // Armazena o token no localStorage
    }
  };

  const handleCopyToken = () => {
    navigator.clipboard.writeText(responseData);
    alert("Token copiado para a área de transferência!");
  };

  return (
    <div className="p-4 rounded-lg border border-zinc-600 bg-white shadow-md w-full">
      <div className="bg-blue-500 bg-opacity-60 border-2 border-black font-aleo rounded-lg w-full text-black p-2 mb-4">
        Faça login aqui:
        <br /> Endpoint: /authenticate
      </div>
      <div className="flex flex-col bg-gray-100 p-4 rounded-lg border border-black"> 
        <div className="w-full">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="username"
          >
            Nome de usuário
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
            onClick={handleAuthenticate}
            className="px-4 py-2 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75"
          >
            Gerar Token JWT
          </button>
        </div>
        {responseStatus && (
          <div className="mt-6">
            <p className="text-sm font-medium">
              <strong>Status HTTP:</strong> {responseStatus}
            </p>
            {responseData && (
              <div className="mt-2">
                <p className="text-sm font-medium">Token JWT:</p>
                <div className="bg-white p-2 border rounded-md break-all">
                  {responseData}
                </div>
                <button
                  onClick={handleCopyToken}
                  className="mt-2 px-3 py-1 bg-secondary text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75"
                >
                  Copiar Token
                </button>
              </div>
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
