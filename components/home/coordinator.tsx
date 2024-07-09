import Image from "next/image";
import React from "react";
import dean from "../../public/assets/dean3.jpeg";

const Coordinator = () => {
  return (
    <div className="flex justify-center items-center mt-16 bg-black">
      <div className="w-[97%] lg:w-[85%]">
        <div className="flex justify-center items-center relative">
          <div className="flex flex-col items-center ">
            {/* <div className='h-[3px] w-[300px] bg-pink-600 rounded-lg mb-[2px]'></div> */}
            <div className="h-[3px] w-[320px] bg-[#ff403c] rounded-lg my-[2px]"></div>
            <div className="h-[3px] w-[370px] bg-[#ff403c] rounded-lg mt-[2px]"></div>
          </div>

          <div className="text-center text-white poiret text-[30px] font-bold opacity-100 z-30 bg-black px-3 absolute">
            Faculty Coordinator
          </div>
        </div>
        <div className="flex justify-center flex-col items-center mt-10 mb-4">
          <Image
            className="w-[260px] h-[240px] rounded-md mb-5"
            src={dean}
            alt={""}
          ></Image>
          <div className="header text-lg text-gray-300">
            Prof. Syed Ferhathullah Hussainy
          </div>
          <div className="header text-md text-gray-400">
            Dean (Administration)
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="header text-center text-gray-400 text-sm lg:w-[80%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Coordinator;
