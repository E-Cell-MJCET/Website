/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
// import elwt from '../../public/assets/money heaist.png'
import abme from "../../public/assets/abme.webp";

const Execom = () => {
  return (
    <div className="flex flex-col w-[155px] items-center justify-center mt-24 bg-[#212121] rounded-md">
      <div className="flex items-center justify-center w-[80px] h-[80px] mt-[25px] rounded-full bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] ">
        <Image
          className="w-[70px] h-[70px]  object-cover rounded-full"
          src={abme}
          alt={""}
        ></Image>
      </div>

      <h1 className="mt-[20px] text-[20px] leading-3 font-medium Header">
        Abid Nafi
      </h1>
      <p className="mt-[8px] text-[12px] mb-[25px] text-[#8e8e8e]">Web</p>
    </div>
  );
};

export default Execom;
