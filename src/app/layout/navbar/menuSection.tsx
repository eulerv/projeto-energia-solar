"use client";

import { usePathname } from "next/navigation";

const MenuSection: React.FC = () => {
  const pathname = usePathname();

  return (
    <div
      className="flex flex-row sm:h-12
        sm:ml-10 sm:pt-3 sm:px-2
        h-10 font-operator text-sm
        text-zinc-400 items-center self-center
        gap-3 leading-tight"
    >
      <a
        href="/"
        className={`hidden md:flex md:flex-col justify-center items-center ${
          pathname === "/" ? "text-orange-200 border-b border-orange-200" : "text-zinc-50"
        }`}
      >
        Home
      </a>
      <div className="flex flex-row p-2 rounded-full gap-4 text-white lg:border pr-4">
        <div className="hidden md:flex md:flex-col justify-center items-center">
        </div>
        <a
          href="/apiPicpay"
          className={`md:block hidden ${
            pathname.startsWith("/apiPicpay") ? "text-orange-200 border-b border-orange-200" : ""
          }`}
        >
          1.Menu 1
        </a>
        <a
          href="/aBeautyManager"
          className={`md:block hidden ${
            pathname.startsWith("/aBeautyManager") ? "text-orange-200 border-b border-orange-200" : ""
          }`}
        >
          2. Menu 2
        </a>
        <a
          href="/terceiroProjeto"
          className={`md:block hidden ${
            pathname.startsWith("/terceiroProjeto") ? "text-orange-200 border-b border-orange-200" : ""
          }`}
        >
          3.Menu 3
        </a>
      </div>
      <a
        href="/contato"
        className={`hidden md:flex md:flex-col justify-center items-center text-bold ${
          pathname == "/contato" ? "text-orange-200 border-b border-orange-200" : "text-zinc-50"
        }`}
      >
        {/* <User2Icon className="flex text-center" /> */}
        Contato
      </a>
    </div>
  );
};
export default MenuSection;
