"use client";

import GradientsProjects from "@/app/layout/home/gradientsProjects";
import Sidebar from "@/app/layout/menus/sidebar";
import Navbar from "@/app/layout/navbar/navbar";
import { motion } from "framer-motion";
import {
  ArrowLeftRight as Arrow,
  LogInIcon,
  UserPlus as UserAdd,
  UserMinus as UserDelete,
  User as UserIcon,
  UserPen as UserUpdate
} from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const InputForm = dynamic(() => import("../../../project-components/InputForm"), { ssr: false });
const RequestCard = dynamic(() => import("../../../project-components/RequestCard"), { ssr: false });
const ResponseCard = dynamic(() => import("../../../project-components/ResponseCard"), { ssr: false });

export default function Home() {
  const [formData, setFormData] = useState({
    token: "",
    payer: "",
    payee: "",
    value: "",
  });

  const [requestData, setRequestData] = useState<any>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setFormData((prevData) => ({
        ...prevData,
        token: storedToken,
      }));
    }
  }, []);

  const [responseInfo, setResponseInfo] = useState<{
    statusCode: number;
    statusText: string;
    response: string | null;
  }>({
    statusCode: 0,
    statusText: "",
    response: null,
  });

  const handleFormSubmit = (formattedData: any) => {
    setRequestData(formattedData);
  };
  
  const transactionFields = [
    {
      name: "token",
      label: "Token JWT",
      type: "text",
      placeholder: "Token JWT",
    },
    {
      name: "payer",
      label: "ID do Pagador (Payer)",
      type: "number",
      placeholder: "Digite o ID do pagador",
    },
    {
      name: "payee",
      label: "ID do Recebedor (Payee)",
      type: "number",
      placeholder: "Digite o ID do recebedor",
    },
    {
      name: "value",
      label: "Valor da Transação",
      type: "currency",
      placeholder: "R$ 0,00",
    },
  ];

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
            <div className="grid lg:grid-cols-2 lg:justify-left gap-12">
              <InputForm
                setFormData={setFormData}
                formData={formData}
                onSubmit={handleFormSubmit}
                fields={transactionFields}
                title="POST no endpoint /transactions"
              />
              <RequestCard
                formData={requestData}
                onResponse={setResponseInfo}
                method="POST"
                endpoint="/transactions"
              />
            </div>
            <div className="lg:grid-cols-2 lg:justify-left gap-12">
              <ResponseCard responseInfo={responseInfo} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
