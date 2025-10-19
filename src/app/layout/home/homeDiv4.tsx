import { motion } from "framer-motion";

export default function HomeDiv3() {
  return (
    <div className="min-h-screen overflow-hidden px-2 lg:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 text-white">
  
      <motion.div
        className="flex flex-col lg:w-1/2 lg:mt-0 mt-6 lg:mx-auto mx-8 p-4 lg:p-10 
        border-2 border-black bg-black bg-opacity-80 text-center lg:text-left font-aleo 
        shadow-lg rounded-md shadow-white lg:justify-start text-white"
        viewport={{ once: true, amount: 0.1 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div>
          <h2 className="pb-2 text-xl font-semibold">
            Agora você pode clicar aqui para ir até a aba de
          </h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6 font-aleo">
            <div className="flex flex-col w-full text-left">
              <a
                href="/contato"
                className="flex-grow-0 text-4xl font-bold md:text-8xl 2xl:text-8xl"
              >
                <h1 className="absolute blur-[30px] text-slate-50 translate-x-1 translate-y-1">
                  Contato
                </h1>
                Contato
              </a>
            </div>
          </div>
          <p className="my-6 font-aleo">
            Assim podemos conversar via e-mail/Whatsapp/Linkedin. Também tem os
            ícones no topo da página, do Linkedin e Github.
            <br />
            E segue aqui abaixo o meu currículo disponível para download no
            Drive:
            <br /> <br />
            <br />
          </p>
        </div>
        <div className="relative flex-1 w-full">
          <div
            className="absolute -inset-0.5 opacity-75
          bg-gradient-to-r from-red-700 to-quinary
          rounded-lg blur"
          ></div>
          <button
            className="bg-black w-full opacity-95 rounded-lg leading-none
           border border-slate-900 px-7 py-4
           flex items-center justify-center divide-x divide-gray-600
           "
          >
            <a
              className="text-gray-100 font-aleo flex items-center space-x-5 pr-6"
              href="https://drive.google.com/file/d/1osYB18sHrNCABuNV-YZhr9GeVETp8Bge/view?usp=sharing"
              target="_blank"
            >
              Clique para fazer o download do meu currículo atualizado
            </a>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
