"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  link: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const pathname = usePathname();

  return (
    <motion.aside
      className="
        flex flex-shrink-0 flex-col items-start space-y-3 my-3 ml-2 mr-1 py-4 h-5/6
        md:px-4 md:m-3 md:w-60 md:py-6 md:gap-1 lg:w-60
        rounded-lg border border-zinc-200 text-sm font-consolas bg-zinc-50 text-zinc-500 shadow-2xl shadow-black
      "
      viewport={{ once: true, amount: 0.5 }}
      initial={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {menuItems.map((item, index) => {
        const isActive = pathname === item.link;

        return (
          <a
            key={index}
            href={item.link}
            className={`flex items-center px-2 py-1 ${
              isActive ? "text-black font-bold" : "hover:text-slate-500"
            }`}
          >
            {item.icon}
            <span className="hidden md:block flex-grow">{item.name}</span>
          </a>
        );
      })}
    </motion.aside>
  );
};

export default Sidebar;
