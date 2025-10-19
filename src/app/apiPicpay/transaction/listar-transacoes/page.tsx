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
import GradientsProjects from "../../../layout/home/gradientsProjects";
import Sidebar from "../../../layout/menus/sidebar";
import Navbar from "../../../layout/navbar/navbar";

export default function Home() {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });

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

    try {
      const response = await axios.get(
        "https://api-picpay.2fs.com.br/transactions",
        // "http://localhost:8080/transactions",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStatusCode(response.status);
      setStatusText(response.statusText);
      setResponseData(JSON.stringify(response.data, null, 2));
    } catch (error: any) {
      setStatusCode(error.response?.status || null);
      setStatusText(error.response?.statusText || error.message);
      setResponseData(JSON.stringify(error.response?.data, null, 2) || null);
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
    <div className="flex flex-col">
      <Navbar />
      <div className="absolute w-full h-full z-[-1]">
        <GradientsProjects />
      </div>
      <div className="flex flex-1">
      <Sidebar menuItems={menuItems} />
        <div
          className="flex-grow p-2 my-3 mr-14 rounded-lg lg:mr-20 sm:p-6 border border-zinc-600
          bg-zinc-50  text-zinc-500 shadow-2xl shadow-black font-carlito gap-8 min-h-screen h-full"
        >
          <motion.div
            className="flex flex-col items-left justify-start min-h-screen h-full bg-zinc-300 text-black p-4 gap-6"
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, x: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 50, duration: 7 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
          >
            <div className="lg:grid-cols-2 lg:justify-left gap-12">
              <div
                className="flex flex-col items-left rounded-lg h-full bg-zinc-50 px-7 py-4
              gap-4 border-2 border-black text-zinc-800
              "
              >
                <div className="flex flex-row w-full m-1 justify-between items-center text-bold border-b-2 border-black pb-2">
                  <h1 className="text-3xl">Response HTTP</h1>
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
                <div>
                  <div>
                    <div className="grid lg:grid-cols-2 lg:justify-left gap-12">
                      <div className="w-full h-full border-4 shadow-inner shadow-black p-4">
                        HTTP Status Code: {statusCode} {statusText}
                      </div>
                      <div className="h-[500px]">
                        <div className="flex-col self-left bg-black rounded-r-lg px-4 py-6 h-full">
                          <div
                            className="flex-1 h-full w-full
                              bg-slate-50 bg-opacity-5 border-l-4 rounded-r-lg border-slate-500 px-5 py-6 text-slate-500
                                outline-none font-consolas resize caret-red-500 overflow-y-auto"
                            spellCheck="false"
                          >
                            <pre>{responseData}</pre>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 mb-6 flex justify-center">
                      <button
                        className="px-4 py-2 bg-highlight text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75"
                        onClick={handleSendRequest}
                      >
                        Enviar GET
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
