"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const getRandomInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Logo: React.FC = () => {
  const [key, setKey] = useState(0);
  const timeout = getRandomInterval(5000, 120000); // Intervalo de 1 a 120 segundos
  useEffect(() => {
    const repeatAnimation = () => {
      // Atualiza o estado para forçar a re-renderização e reiniciar a animação
      setKey((prevKey) => prevKey + 1);
      // Define um timeout para a próxima animação com intervalo aleatório
      setTimeout(repeatAnimation, timeout);
    };

    // Inicia o ciclo de animação
    repeatAnimation();

    // Limpeza ao desmontar o componente
    return () => clearTimeout(timeout);
  }, []);
  return (
    <a
      href="/"
      className="w-full font-aleo tracking-tighter text-zinc-50 flex flex-col items-center font-bold"
    >
      <motion.div
        className="items-center font-extrabold text-4xl sm:w-full"
        animate={{
          opacity: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0,
            0.5, 0.5, 0.5, 0.5,0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          ], // Abrupt transitions between fully visible and fully hidden
        }}
        transition={{
          duration: 10, // Duration of each on-off cycle
          repeat: Infinity, // Infinite loop of on-off cycles
          repeatDelay: 20, // No delay between on-off cycles
          repeatType: 'loop',
          ease: "linear", // No easing to make transitions abrupt
        }}
      >
        Use + Energia Solar
      </motion.div>
      {/* <p className="font-light text-xs -mt-1.5">texto secundário</p> */}
    </a>
  );
};

export default Logo;
