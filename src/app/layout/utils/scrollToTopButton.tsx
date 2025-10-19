"use client";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar a página suavemente até o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth", });
  };

  // Monitora o scroll para exibir ou ocultar o botão
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-5 z-50 p-3 hover:scale-[120%] bg-highlight text-white rounded-full shadow-lg transition-opacity duration-3000 focus:outline-none focus:ring-2 focus:ring-highlightButton focus:ring-opacity-75"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
