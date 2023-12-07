import Image from "next/image";
import React from "react";

const Brouchere = () => {
  const eplogo = "/assets/ep/logo/3.png";
  return (
    <section className="relative z-20 overflow-hidden bg-[#031c35] pb-4 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[70px] px-[20px] lg:mx-0">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Explore our brochure
              </h2>
              <a
                className="poppins inline-flex text-white bg-[#cd3e35] border-0 mt-10 py-2 px-6 focus:outline-none hover:bg-[#4a1c40] rounded text-lg"
                href="https://drive.google.com/file/d/1_jTVPpWg0pH6U3OFe3oOT5bCKcazBcFD/view?usp=sharing"
                target="_blank"
              >
                Tap to view
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brouchere;
