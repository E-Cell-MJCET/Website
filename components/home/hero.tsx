import React from "react";

const Hero = () => {
  return (
    <div className="flex grow items-start justify-center text-center leading-tight lg:items-center ">
      <div className="w-[70%]">
        <div className="hidden animate-gradient bg-gradient-to-r from-orange-700 to-blue-500 bg-300% bg-clip-text font-montserrat text-[max(3rem,min(5vw,5rem))] text-transparent lg:inline ">
          Entrepreneurship Cell
        </div>
        <div className="relative">
          <div className="desktop:hidden absolute -inset-1 inline animate-gradient  bg-gradient-to-r from-orange-700 to-blue-500 bg-300% bg-clip-text text-[max(3.2rem,min(5.6vw,5.6rem))] font-medium text-transparent opacity-60 blur-sm lg:hidden ">
            E-Cell
          </div>
          <div className="desktop:hidden  inline animate-gradient bg-gradient-to-r from-orange-700 to-blue-500 bg-300% bg-clip-text text-[max(3.2rem,min(5.6vw,5.6rem))] font-medium  text-transparent lg:hidden">
            E-Cell
          </div>
        </div>
        <div className="text-[max(2rem,min(4vw,4rem))] font-bold tracking-wider  text-gray-300 opacity-100 ">
          MJCET
        </div>
        <div className="mb-14 mt-10 grid items-start justify-center gap-8 lg:my-20">
          <div className="group relative">
            <div className="duration-[5000] group-hover:duration-[2000] absolute -inset-0.5  animate-tilt rounded-lg bg-gradient-to-r from-[#ff403c] to-[#0b5db0] opacity-75 blur transition group-hover:opacity-100"></div>
            <button className=" relative flex items-center space-x-5 rounded-lg bg-black px-10 py-4 leading-none ">
              <span className="flex items-center justify-center text-[16px] font-semibold tracking-wide text-gray-300 lg:text-[20px]">
                Ideate{" "}
                <div className="mx-2 mt-1 h-[10px] w-[10px] rounded-full bg-[#0b5db0] transition duration-1000 group-hover:bg-[#ff403c]">
                  {" "}
                </div>{" "}
                Innovate{" "}
                <div className="mx-2 mt-1 h-[10px] w-[10px] rounded-full bg-[#0b5db0] transition duration-1000 group-hover:bg-[#ff403c]">
                  {" "}
                </div>
                Incubate
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
