"use client";

import axios from "axios";
import https from "https";
import { useState } from "react";

interface RequestCardProps {
  formData: any;
  onResponse: (responseInfo: {
    statusCode: number;
    statusText: string;
    response: string | null;
  }) => void;
  method: "POST" | "PUT";
  endpoint: string;
}

export default function RequestCard({
  formData,
  onResponse,
  method,
  endpoint,
}: RequestCardProps) {
  const [response, setResponse] = useState<string | null>(null);

  const { token, ...requestData } = formData || {};

  const requestDataString = requestData
    ? JSON.stringify(requestData, null, 2)
    : "{\n\n}";

  const httpsAgent = new https.Agent({
    rejectUnauthorized: false, //Ignorar a verificação ssl
  });

  const handleSendRequest = async () => {
    if (!token) {
      alert("Token não encontrado. Por favor, forneça um token válido.");
      return;
    }

    try {
      const response = await axios({
        method: method.toLowerCase(),
        url: `https://api-picpay.2fs.com.br${endpoint}`,
        data: requestData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Inclui o token JWT
        },
        httpsAgent,
      });

      setResponse(JSON.stringify(response.data, null, 2));

      onResponse({
        statusCode: response.status,
        statusText: response.statusText,
        response: JSON.stringify(response.data, null, 2),
      });
    } catch (error: any) {
      console.error("Erro ao enviar a requisição:", error);

      setResponse("Erro ao enviar a requisição.");

      onResponse({
        statusCode: error.response?.status || 500,
        statusText: error.response?.statusText || "Internal Server Error",
        response: error.response?.data || "Erro ao enviar a requisição.",
      });
    }
  };

  return (
    <div className="flex flex-col items-left rounded-xl h-full bg-quaternary border-2 border-black">
      <div className="flex-shrink w-full m-1 justify-center text-gray-700 text-center">
        <h1 className="text-2xl">Request Preview</h1>
      </div>
      <div className="flex-row flex-grow self-left bg-black rounded-b-lg px-5 py-6">
        <textarea
          className="flex-auto bold min-h-[500px] lg:h-full w-full
                  bg-slate-50 bg-opacity-5 border-l-4 rounded-r-lg border-slate-500 px-5 py-6 text-slate-500
                  outline-none font-consolas caret-red-500"
          spellCheck="false"
          value={requestDataString}
          readOnly
        ></textarea>
      </div>
      <div className="mt-4 mb-6 flex justify-center">
        <button
          className="px-4 py-2 bg-yellow-600 bg-opacity-80 text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75"
          onClick={handleSendRequest}
          disabled={!formData}
        >
          Enviar {method}
        </button>
      </div>
    </div>
  );
}
