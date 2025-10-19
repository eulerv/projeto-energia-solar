import { motion } from "framer-motion";

export default function HomeDiv3() {
  return (
    <div className="min-h-screen overflow-hidden px-2 lg:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 text-white">
      <motion.div
        className="lg:w-1/2 lg:mt-0 mt-6 lg:mx-auto mx-8 p-4 lg:p-10
        border-2 border-black bg-zinc-50 bg-opacity-[4%] text-center lg:text-left font-aleo shadow-lg rounded-md shadow-black"
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, x: 0, y: 0, filter: "blur(25px)" }}
        transition={{ type: "tween", stiffness: 50, duration: 3 }}
        whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      >
        <h1 className="pb-6 text-4xl font-bold md:text-6xl 2xl:text-6xl">
          Calcule seu potencial #solar ----
        </h1>
        <p className="mb-6">
          Nesse bloco colocamos os requisitos para calcular o consumo médio mensal da residência
          <br />
          Aqui vão os forms ##########################################
          <br />
          #############form#############
          <br />
          #############form#############
          <br />
          #############form#############
          <br />
          #############form#############
          
        </p>

        <h2 className="pb-2 text-xl font-semibold">Cheers!</h2>
      </motion.div>
      <motion.div
        className="flex flex-col lg:w-1/2 lg:mt-0 mt-6 lg:mx-auto mx-8 p-4 lg:p-10 
        border-2 border-black bg-white bg-opacity-80 text-center lg:text-left font-aleo 
        shadow-lg rounded-md shadow-white lg:justify-start text-black"
        viewport={{ once: true, amount: 0.1 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div>

          <div className="grid lg:grid-cols-1 grid-cols-1 items-center gap-6 font-aleo">
            <div className="flex flex-col w-full text-left">
              <a
                
                className="flex-grow-0 text-4xl font-bold md:text-4xl 2xl:text-4xl"
              >
                <h1 className="absolute blur-[30px] text-slate-50 translate-x-1 translate-y-1">
                Demonstrativo de consumo médio mensal + Seletor de empresa que origina o orçamento
                </h1>
                Demonstrativo de consumo médio mensal + Seletor de empresa que origina o orçamento
              </a>
            </div>
          </div>
          <p className="my-6 font-aleo">
            Em construção /|\|/|\|/|\|/|\|/|\|/
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br /> <br />
            <br />
          </p>
        </div>
        <div className="relative flex-1 w-full">
          <div
          //   className="absolute -inset-0.5 opacity-75
          // bg-gradient-to-r from-red-700 to-quinary
          // rounded-lg blur"
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
              Botão exemplo LG
            </a>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
