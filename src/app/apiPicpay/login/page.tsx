"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftRight as Arrow,
  LogInIcon,
  UserPlus as UserAdd,
  UserMinus as UserDelete,
  UserIcon,
  UserPen as UserUpdate
} from "lucide-react";
import GradientsProjects from "../../layout/home/gradientsProjects";
import Sidebar from "../../layout/menus/sidebar";
import Navbar from "../../layout/navbar/navbar";
import Authenticate from "./components/authenticate";
import Signup from "./components/signup";
import Tips from "./components/tips";
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
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="absolute w-full z-[-1]">
        <GradientsProjects />
      </div>
      <div className="flex flex-1">
      <Sidebar menuItems={menuItems} />
        <motion.div
          className="flex flex-col p-4 my-3 mr-14 rounded-lg lg:mr-20 sm:p-6 border border-zinc-600 bg-zinc-50 text-zinc-500 shadow-2xl shadow-black font-carlito gap-8 h-full w-full"
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: 50, y: 100 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.7 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 h-min-screen">
            <Signup />
            <Authenticate />
            <Tips />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
