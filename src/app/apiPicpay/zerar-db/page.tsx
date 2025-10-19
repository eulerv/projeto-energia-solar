"use client";

import axios from "axios";
import { motion } from "framer-motion";
import {
  ArrowLeftRight as Arrow,
  LogInIcon,
  UserPlus as UserAdd,
  UserMinus as UserDelete,
  User as UserIcon,
  UserPen as UserUpdate
} from "lucide-react";
import { useEffect, useState } from "react";
import GradientsProjects from "../../layout/home/gradientsProjects";
import Sidebar from "../../layout/menus/sidebar";
import Navbar from "../../layout/navbar/navbar";

export default function Home() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [statusText, setStatusText] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<string | null>(null);

  const handleSendRequest = async () => {
    if (!token) {
      alert("Token não encontrado. Faça login para obter um token.");
      return;
    }

    const userConfirmed = confirm(
      "Cuidado, esta operação zera o banco de dados do seu usuário, deletando transações e carteiras. É irreversível."
    );

    if (!userConfirmed) return;

    try {
      
      const response = await axios.delete(`https://api-picpay.2fs.com/cleanDB`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      
      setStatusCode(response.status);
      setStatusText(response.statusText);
      setResponseData(response.data);
    } catch (error: any) {
      
      if (error.response) {
        setStatusCode(error.response.status);
        setStatusText(error.response.statusText);
        setResponseData(
          typeof error.response.data === "string"
            ? error.response.data
            : JSON.stringify(error.response.data, null, 2)
        );
      } else {
        setStatusCode(0);
        setStatusText(error.message);
        setResponseData("Erro na requisição");
      }
    }
  };

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const menuItems = [
    {
      name: "Visão Geral da API",
      icon: <UserAdd size={24} className="mr-2 flex-shrink-0" />,
      link: "/apiPicpay",
    },
    {
      name: "Login (Obrigatório para interagir com a API)",
      icon: <LogInIcon size={24} className="mr-2 flex-shrink-0" />,
      link: "/apiPicpay/login",
    },
    {
      name: "Cadastrar nova carteira virtual",
      icon: <UserAdd size={24} className="mr-2 flex-shrink-0" />,
      link: "/apiPicpay/wallet/cadastrar",
    },
    {
      name: "Listar Carteiras",
      icon: <UserIcon size={24} className="mr-2 flex-shrink-0" />,
      link: "/apiPicpay/wallet/listar-todos",
    },
    {
      name: "Atualizar dados de uma Carteira",
      icon: <UserUpdate size={24} className="mr-2 flex-shrink-0" />,
      link: "/apiPicpay/wallet/atualizar",
    },
    {
      name: "Deletar Carteira",
      icon: <UserDelete size={24} className="mr-2 flex-shrink-0" />,
      link: "/apiPicpay/wallet/deletar",
    },
    {
      name: "Deletar Todas as Carteiras",
      icon: <UserDelete size={24} className="mr-2 flex-shrink-0" />,
      link: "/apiPicpay/wallet/deletar-tudo",
    },
    {
      name: "Realizar transação",
      icon: <Arrow size={24} className="mr-2 flex-shrink-0" />,
      link: "/apiPicpay/transaction/gerar-transacao",
    },
    {
      name: "Consultar transações",
      icon: <Arrow size={24} className="mr-2 flex-shrink-0" />,
      link: "/apiPicpay/transaction/listar-transacoes",
    },
    {
      name: "Limpar Banco de Dados",
      icon: <UserDelete size={24} className="mr-2 flex-shrink-0" />,
      link: "/apiPicpay/zerar-db",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="absolute w-full h-full z-[-1]">
        <GradientsProjects />
      </div>
      <div className="flex flex-1">
      <Sidebar menuItems={menuItems} />
        <div
          className="flex-grow p-2 my-3 mr-14 rounded-lg lg:mr-20 sm:p-6 border border-zinc-600
              bg-zinc-50 text-zinc-500 shadow-2xl shadow-black font-carlito gap-8"
        >
          <motion.div
            className="flex flex-col items-start justify-center bg-zinc-300 text-black p-4 gap-6 w-full min-w-full"
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, x: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 50, duration: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
          >
            <div
              className="rounded-lg bg-zinc-50 px-7 py-4 gap-4 border-2 border-black text-zinc-800 w-full min-h-[80vh]"
              title="card"
            >
              <div className="flex flex-col w-full justify-between items-center text-bold border-b-2 border-black pb-2">
                <h1 className="text-3xl mb-4 text-center">
                  Resetar Banco de Dados
                </h1>
                <div className="flex justify-center">
                  <div className="flex items-center">
                    <label htmlFor="token" className="mr-2 font-semibold">
                      Token JWT:
                    </label>
                    <input
                      id="token"
                      type="text"
                      value={token}
                      onChange={handleTokenChange}
                      className="w-64 px-2 py-1 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center">
                {statusCode !== null && (
                  <div className="w-full bg-white rounded-lg shadow-md p-6 mt-6 overflow-auto">
                    <p className="font-semibold mb-2">
                      Requisição - DELETE /cleanDB
                    </p>
                    <p className="mb-2">
                      <strong>HTTP Status Code:</strong> {statusCode} {statusText}
                    </p>
                    <pre className="bg-gray-100 p-2 rounded mb-4 overflow-auto">
                      {responseData}
                    </pre>
                  </div>
                )}
                <button
                  className="mt-6 px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
                  onClick={handleSendRequest}
                >
                  Resetar Banco de Dados
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
