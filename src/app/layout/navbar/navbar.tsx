"use client";
import { SunMediumIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="
      flex  items-center w-full
      h-20 p-2 bg-yellow-600 relative"
    >
      <div className="flex items-center">
        <a href="/">
          <SunMediumIcon
            className="
            h-14
            w-14
            text-zinc-50"
          />
        </a>
      </div>
      <div className="flex items-center ml-6">
        <Logo />
      </div>
    </nav>
  );
};
export default Navbar;
