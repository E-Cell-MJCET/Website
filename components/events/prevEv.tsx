import Image from "next/image";
import React from "react";

interface PrevEvProps {
  title: string;
  desc: string;
  image: any;
}

const PrevEv: React.FC<PrevEvProps> = ({ title, desc, image }) => {
  return (
    <div className="w-[80%] mb-6 bg-black">
      <div className="flex justify-center shadow-lg shadow-gray-900 lg:shadow-none lg:bg-black h-full py-5 px-4 rounded-xl cursor-text hover:border-pink-600 group border-0 lg:border-[1px] lg:border-purple-700 transition-all duration-300 ">
        <div className="w-full flex lg:justify-center lg:items-center flex-col lg:flex-row group-hover:scale-95 duration-300">
          <div className="relative h-[150px] w-[220px] lg:block hidden">
            <Image
              src={image}
              width={100}
              height={100}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col text-center mt-4 lg:mt-0 lg:w-[70%] lg:px-5 items-center justify-center">
            <div className="text-[24px] text-white header mb-5 ">{title}</div>
            <div className="flex items-center justify-center h-[150px] w-[220px] lg:hidden">
              <Image
                src={image}
                width={100}
                height={100}
                alt=""
                className="rounded-lg text-center"
              />
            </div>
            <div className="text-sm tracking-tight text-white mt-5 lg:mt-0">{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevEv;
