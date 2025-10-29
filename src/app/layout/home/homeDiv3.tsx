"use client";

import { motion } from "framer-motion";
import { Calculator, Clock, Leaf, Trees, TrendingUp, Zap } from "lucide-react";
import { useState } from "react";

export default function HomeDiv3() {
  const [consumo, setConsumo] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (consumo) {
      setMostrarResultado(true);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden px-2 lg:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 text-white">
      {/* Primeiro Card - Formulário */}
      <motion.div
        className="lg:w-1/2 lg:mt-0 mt-6 lg:mx-auto mx-8 p-4 lg:p-10
        border-2 border-black bg-white text-center lg:text-left font-aleo shadow-lg rounded-md shadow-black"
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, x: 0, y: 0, filter: "blur(25px)" }}
        transition={{ type: "tween", stiffness: 50, duration: 3 }}
        whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      >
        <h1 className="pb-6 text-4xl font-bold md:text-6xl 2xl:text-6xl text-black">
          Calcule seu potencial <span className="text-orange-500">#solar</span>
        </h1>
        <p className="mb-6 text-gray-700">
          Descubra quanto você pode economizar e contribuir para um planeta mais sustentável com energia solar.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="consumo" className="block text-sm font-medium text-gray-700 mb-2">
              Informe seu consumo médio mensal (kWh):
            </label>
            <div className="relative">
              <input
                type="number"
                id="consumo"
                value={consumo}
                onChange={(e) => setConsumo(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black"
                placeholder="Ex: 350"
                required
              />
              <Zap className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="relative flex-1 w-full mt-6">
            <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-lg blur"></div>
            <button
              type="submit"
              className="relative bg-black w-full opacity-95 rounded-lg leading-none
               border border-slate-900 px-7 py-4
               flex items-center justify-center divide-x divide-gray-600"
            >
              <span className="text-gray-100 font-aleo flex items-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>Calcular Economia</span>
              </span>
            </button>
          </div>
        </form>
      </motion.div>

      {/* Segundo Card - Resultados */}
      <motion.div
        className="flex flex-col lg:w-1/2 lg:mt-0 mt-6 lg:mx-auto mx-8 p-4 lg:p-10 
        border-2 border-black bg-white text-center lg:text-left font-aleo 
        shadow-lg rounded-md shadow-black text-black"
        viewport={{ once: true, amount: 0.1 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        {!mostrarResultado ? (
          <div className="flex flex-col items-center justify-center h-full py-10">
            <div className="text-gray-400 mb-4">
              <TrendingUp className="h-16 w-16 mx-auto" />
            </div>
            <p className="text-gray-500 text-lg">
              Preencha o formulário ao lado para descobrir os benefícios da energia solar para você.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Seus resultados:</h2>
            
            <div className="space-y-8">
              {/* Retorno do Investimento */}
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Retorno do investimento</p>
                  <p className="text-3xl font-bold text-gray-800">4 anos e 2 meses</p>
                  <p className="text-gray-500 text-sm mt-1">Economia contínua por mais de 20 anos após o payback</p>
                </div>
              </div>
              
              {/* Impacto Ambiental */}
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Trees className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Impacto ambiental positivo</p>
                  <p className="text-3xl font-bold text-gray-800">400 árvores salvas</p>
                  <p className="text-gray-500 text-sm mt-1">Equivalente a plantar uma pequena floresta em 25 anos</p>
                </div>
              </div>
              
              {/* Economia Mensal */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Redução de emissões</p>
                  <p className="text-3xl font-bold text-gray-800">2.5 toneladas de CO₂/ano</p>
                  <p className="text-gray-500 text-sm mt-1">Contribuição direta para a redução do efeito estufa</p>
                </div>
              </div>
            </div>
            
            <div className="relative flex-1 w-full mt-8">
              <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r from-green-600 to-blue-500 rounded-lg blur"></div>
              <button
                className="relative bg-black w-full opacity-95 rounded-lg leading-none
                 border border-slate-900 px-7 py-4
                 flex items-center justify-center divide-x divide-gray-600"
              >
                <span className="text-gray-100 font-aleo flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Solicitar Orçamento Personalizado</span>
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}