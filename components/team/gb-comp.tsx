import Image, { StaticImageData } from "next/image";
import React from "react";

const GBCOMP = ({
  image,
  name,
  position,
  qoute,
}: {
  image: StaticImageData;
  name: string;
  position: string;
  qoute: string;
}) => {
  return (
    <div className="mt-10 flex h-[400px] w-[250px] flex-col bg-slate-700 text-center dark:rounded-md  dark:bg-slate-900  lg:m-10">
      <div className="rounded-t-[20px] text-center">
        <Image
          src={image}
          alt=""
          className="top-52 h-[230px] w-full object-cover"
          style={{
            clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
          }}
        ></Image>
      </div>
      <div className="mt-10 flex h-full flex-col items-center">
        <div className="  text-center  font-sans text-[20px]   tracking-[0.07em] text-white ">
          {name}
        </div>
        <p className=" text-center font-sans text-[12px]  text-white">
          {position}
        </p>
        <p className=" mx-10 mb-2  mt-1   text-center font-sans text-[10px] text-gray-300 dark:text-gray-400">
          {qoute}
        </p>
      </div>
    </div>
  );
};

export default GBCOMP;
