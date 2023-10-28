/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
// import elwt from '../../public/assets/money heaist.png'
import abme from "../../public/assets/abme.webp";

export interface ExecomCardProps {
  dp: string;
  username: string;
  position: string;
}

const Execom = () => {
  return (
    <div className="flex flex-col w-[155px] items-center justify-center mt-24 bg-[#212121] rounded-md">
      <div className="flex items-center justify-center w-[75px] h-[75px] mt-[25px] rounded-full bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] ">
        <Image
          className="w-[65px] h-[65px]  object-cover rounded-full"
          src={abme}
          alt={""}
        ></Image>
      </div>

      <h1 className="mt-[20px] text-[20px] leading-3 font-medium Header">
        Abid Nafi
      </h1>

      <div className="rounded-md bg-[#6b28d5] text-[12px] mb-[25px] mt-[12px] px-[7px] py-[2px]">
        Web
      </div>
    </div>
  );
};

export default Execom;
