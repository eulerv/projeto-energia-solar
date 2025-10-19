"use client";
import { motion } from "framer-motion";

const HomeDiv1: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Imagem de fundo que cobre toda a área sem distorção */}
      <div className="absolute inset-0">
        <motion.img 
          className="w-full h-full object-cover" 
          src="/photo-1668097613572.avif" 
          alt="Hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Overlay escuro para garantir legibilidade do texto */}
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        ></motion.div>
      </div>
      
      {/* Conteúdo de texto sobre a imagem */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.5, 
          ease: "easeOut", 
          delay: 1.5 // Atraso para o texto aparecer depois da imagem
        }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            // duration: 1.0, ease: "easeOut", delay: 1.4 // Aparece um pouco depois do container
            type: "spring", stiffness: 100, duration: 2
          }}
        >
          Energia Solar agora é realidade
        </motion.h1>
        <motion.h2 
          className="text-xl md:text-2xl text-white max-w-2xl drop-shadow-md font-operator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut", 
            delay: 2.2 // Aparece depois do h1
          }}
        >
          Já consolidada, essa energia sustentável é mais economia pra você, e mais futuro pro nosso planeta.
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default HomeDiv1;
