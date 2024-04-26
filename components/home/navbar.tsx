"use client";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex text-center justify-center items-start lg:items-center leading-tight flex-grow ">
      <div className="w-[70%] -mt:20   ">
        <div className="text-[max(3rem,min(5vw,5rem))] hidden lg:inline font-extrabold  uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#c23c83] to-[#6b28d5] opacity-100 ">
          Entrepreneurship Cell
        </div>
        <div className="relative">
          <div className="text-[max(2.7rem,min(5.6vw,5.6rem))] inline desktop:hidden lg:hidden absolute  -inset-1 blur-sm opacity-60 font-medium blackOps bg-clip-text text-transparent bg-gradient-to-r from-ecell-red-100  to-ecell-blue-100 ">
            Entrepreneurship Cell
          </div>
          <div className="text-[max(2.7rem,min(5.6vw,5.6rem))] inline desktop:hidden lg:hidden font-medium blackOps bg-clip-text text-transparent bg-gradient-to-r from-ecell-red-100  to-ecell-blue-100 opacity-100 ">
            Entrepreneurship Cell
          </div>
        </div>
        <div className="text-[max(2rem,min(4vw,4rem))] tracking-wider font-bold  text-gray-300 opacity-100 ">
          MJCET
        </div>

        <div className="grid gap-8 items-start justify-center mt-10 mb-14 lg:my-20">
          <div className="relative z-40 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff403c]  to-[#0b5db0] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-5000 group-hover:duration-2000 animate-tilt"></div>
            <button className=" relative px-10 py-4 bg-black rounded-lg leading-none flex items-center space-x-5 ">
              <span className="text-gray-300 header font-semibold tracking-wide text-[16px] lg:text-[20px] flex items-center justify-center">
                Ideate{" "}
                <div className="h-[10px] w-[10px] rounded-full bg-[#0b5db0] mx-2 mt-1 group-hover:bg-[#ff403c] transition duration-1000">
                  {" "}
                </div>{" "}
                Innovate{" "}
                <div className="h-[10px] w-[10px] rounded-full bg-[#0b5db0] mx-2 mt-1 group-hover:bg-[#ff403c] transition duration-1000">
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

export default Navbar;
