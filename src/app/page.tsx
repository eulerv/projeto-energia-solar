"use client";

import Footer from "./layout/footer";
import Gradients from "./layout/home/gradients";
import HomeDiv1 from "./layout/home/homeDiv1";
import HomeDiv2 from "./layout/home/homeDiv2";
import Navbar from "./layout/navbar/navbar";
import ScrollToTopButton from "./layout/utils/scrollToTopButton";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden scroll-smooth">
      <div className="absolute items-top w-full">
        <Navbar />
      </div>
      <div className="absolute z-[-1] min-w-full">
        <Gradients />
      </div>
      <div className="flex flex-col">
        <ScrollToTopButton />
        <div className="flex flex-col">
          {/* Seção 1 */}
          <div className="mt-20 items-center w-full">
            <HomeDiv1 />
          </div>

          {/* Seção 2 */}
          <div className="min-h-5/6 w-full">
            <HomeDiv2 />
          </div>

          {/* Seção 3 */}
          {/* <div className="min-h-screen w-full">
            <HomeDiv3 />
          </div> */}

          {/* Seção 4 */}
          {/* <div className="min-h-screen w-full">
            <HomeDiv4 />
          </div> */}
          
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
