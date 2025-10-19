"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Home,
  Leaf,
  Sun,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function HomeDiv2() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Imagem de fundo que cobre toda a área sem distorção */}
      <div className="absolute inset-0">
        {/* <motion.img 
          className="w-full h-full object-cover" 
          src="/photo-1668097613572.avif" 
          alt="Vantagens da Energia Solar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        /> */}
        {/* Overlay escuro para garantir legibilidade do conteúdo */}
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        ></motion.div>
      </div>
      
      {/* Conteúdo sobre a imagem */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <motion.div
          className="font-aleo text-center w-full"
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: 0, y: 0, filter: "blur(25px)" }}
          transition={{ type: "tween", stiffness: 50, duration: 3 }}
          whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
        >
          <div className="relative font-aleo text-4xl sm:text-6xl font-bold md:mb-20 mb-10 text-orange-100">
            <div className="absolute font-aleo whitespace-nowrap left-1/2 transform -translate-x-1/2 -translate-y-[2px] text-4xl sm:text-6xl text-black z-[-1]">
              Vantagens
            </div>
            Vantagens
          </div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 font-consolas max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Card 1 - Economia */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <DollarSign className="w-8 h-8 text-orange-600" />
                <h3 className="mb-4 mt-2 text-base font-semibold">Economia Significativa</h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  Reduza sua conta de energia em até 95%. Com o sistema solar, 
                  você gera sua própria eletricidade, diminuindo drasticamente 
                  os custos mensais e obtendo retorno do investimento em poucos anos.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Sustentabilidade */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <Leaf className="w-8 h-8 text-orange-600" />
                <h3 className="mb-4 mt-2 text-base font-semibold">Sustentabilidade</h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  Energia limpa e renovável que não emite gases de efeito estufa. 
                  Ao adotar a energia solar, você contribui diretamente para a 
                  preservação do meio ambiente e redução da pegada de carbono.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Valorização do Imóvel */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <Home className="w-8 h-8 text-orange-600" />
                <h3 className="mb-4 mt-2 text-base font-semibold">Valorização do Imóvel</h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  Imóveis com sistemas solares são valorizados em até 30% no mercado. 
                  Além da economia mensal, o sistema solar se torna um atrativo 
                  para futuros compradores ou locatários.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Independência Energética */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <Zap className="w-8 h-8 text-orange-600" />
                <h3 className="mb-4 mt-2 text-base font-semibold">Independência Energética</h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  Menos dependência da rede elétrica convencional e protegido contra 
                  aumentos tarifários. Com sistemas de armazenamento, é possível 
                  ter energia mesmo durante quedas na rede.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 5 - Baixa Manutenção */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <Sun className="w-8 h-8 text-orange-600" />
                <h3 className="mb-4 mt-2 text-base font-semibold">Baixa Manutenção</h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  Painéis solares são extremamente duráveis e exigem pouca manutenção. 
                  Com vida útil superior a 25 anos, apenas limpezas periódicas 
                  são necessárias para manter a eficiência do sistema.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 6 - Retorno do Investimento */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-[30px] bg-black"></div>
              <div className="relative rounded-[30px] bg-orange-50 bg-opacity-90 p-8 shadow-lg hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <TrendingUp className="w-8 h-8 text-orange-600" />
                <h3 className="mb-4 mt-2 text-base font-semibold">Retorno do Investimento</h3>
                <p className="mb-4 text-sm font-light leading-[175%]">
                  O payback (tempo de retorno do investimento) geralmente varia 
                  entre 3 a 5 anos. Após esse período, toda a energia gerada 
                  representa lucro direto para o proprietário por mais de 20 anos.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}