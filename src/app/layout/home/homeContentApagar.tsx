"use client";

import Footer from "../footer";
import Navbar from "../navbar/navbar";
import ScrollToTopButton from "../utils/scrollToTopButton";
import HomeDiv1 from "./homeDiv1";
import HomeDiv2 from "./homeDiv2";
import HomeDiv3 from "./homeDiv3";

const HomeContent: React.FC = () => {
  return (
    <>
      <div className="absolute items-top w-full overflow-hidden">
        <Navbar />
      </div>
      <ScrollToTopButton />
      <div className="flex flex-col w-full overflow-hidden">
        {/* Seção 1 */}
        <div className="mt-20 items-center w-full max-w-full">
          <HomeDiv1 />
        </div>

        {/* Seção 2 */}
        <div className="min-h-screen w-full">
          <HomeDiv2 />
        </div>

        {/* Seção 3 */}
        <div className="min-h-screen w-full">
          <HomeDiv3 />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomeContent;
