import Image from "next/image";
import React from "react";

import dean from "../../public/assets/dean3.jpeg";

const Coordinator = () => {
  return (
    <div className="flex items-center justify-center bg-black pt-16">
      <div className="w-[97%] lg:w-[85%]">
        <div className="relative flex items-center justify-center">
          <div className="flex flex-col items-center ">
            <div className="my-[2px] h-[3px] w-[320px] rounded-lg bg-[#ff403c]"></div>
            <div className="mt-[2px] h-[3px] w-[370px] rounded-lg bg-[#ff403c]"></div>
          </div>
          <div className="absolute z-30 bg-black px-3 text-center text-[30px] font-bold text-white opacity-100">
            Faculty Coordinator
          </div>
        </div>
        <div className="mb-4 mt-10 flex flex-col items-center justify-center">
          <Image
            className="mb-5 h-[240px] w-[260px] rounded-md"
            src={dean}
            alt={""}
          ></Image>
          <div className="text-lg text-gray-300">
            Prof. Syed Ferhathullah Hussainy
          </div>
          <div className="text-base text-gray-400">Dean (Administration)</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-center text-sm text-gray-400 lg:w-4/5"></div>
        </div>
      </div>
    </div>
  );
};

export default Coordinator;
