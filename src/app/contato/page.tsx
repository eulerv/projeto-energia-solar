"use client";

import { motion } from "framer-motion";
import { CopyIcon, ExternalLink } from "lucide-react";
import { useState } from "react";
import Footer from "../layout/footer";
import GradientsOnePage from "../layout/home/gradientsOnePage";
import Navbar from "../layout/navbar/navbar";

export default function Home() {
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText('euler.vicente@hotmail.com')
      .then(() => {
        setShowCopyNotification(true);
        setTimeout(() => {
          setShowCopyNotification(false);
        }, 3000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };
    return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <div className="absolute z-[-1] min-w-full">
        <GradientsOnePage />
      </div>
      <div className="min-h-screen overflow-hidden px-2 lg:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 text-white">
        <motion.div
          className="lg:w-4/6 lg:mt-0 mt-6 lg:mx-auto mx-8 p-4 lg:p-10
            border-2 border-black bg-zinc-50 bg-opacity-[4%] justify-center text-center lg:text-left font-aleo shadow-lg rounded-md shadow-black"
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: 0, y: 0, filter: 'blur(25px)' }}
          transition={{ type: 'tween', stiffness: 50, duration: 3 }}
          whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
        >
          <h2 className="pb-2 text-xl font-semibold">Meu e-mail é</h2>
          <button className="flex break-all pb-6 text-4xl font-bold md:text-6xl 2xl:text-6xl hover:text-emerald-500 bg-opacity-60"
          onClick={handleCopyEmail}
          title="Copiar email"
          >
            euler.vicente@hotmail.com
              <CopyIcon size={48} className="flex-shrink-0 text-white hover:text-emerald-500 bg-opacity-60"/>
          </button>
          <h2 className="pb-2 text-xl font-semibold">Meu Linkedin é:</h2>
          <a
            className="flex flex-row items-center pb-6 text-4xl font-bold md:text-6xl 2xl:text-6xl hover:text-emerald-500 bg-opacity-60"
            href="https://www.linkedin.com/in/vicenteeuler/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/vicenteeuler
            <ExternalLink size={48} className="flex-shrink-0 ml-4" />
          </a>
          <h2 className="pb-2 text-xl font-semibold">E meu github é:</h2>
          <a
            className="flex flex-row pb-6 text-4xl font-bold md:text-6xl 2xl:text-6xl hover:text-emerald-500 bg-opacity-60"
            href="https://github.com/eulerv"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/eulerv
            <ExternalLink size={48} className="flex-shrink-0 ml-4" />
          </a>
          <h2 className="pb-2 text-xl font-semibold">Cheers!</h2>
        </motion.div>
      </div>
      <Footer />
      {showCopyNotification && (
        <div className="fixed bottom-4 right-4 bg-green-800 text-white px-4 py-2 rounded shadow-lg">
          Email copiado para a área de transferência!
        </div>
      )}
    </div>
  );
}
