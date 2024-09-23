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
    <div className="flex flex-col mt-10 w-[250px] h-[400px] lg:m-10 text-center bg-slate-700  dark:bg-slate-900  dark:rounded-md">
      <div className="text-center rounded-t-[20px]">
        <Image
          src={image}
          alt=""
          className="h-[230px] w-[100%] object-cover top-52"
          style={{
            clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
          }}
        ></Image>
      </div>
      <div className="flex flex-col mt-10 items-center h-full">
        <div className="font-sans  header  text-white text-center   text-[20px] tracking-[0.07em] ">
          {name}
        </div>

        <p className="font-sans header text-white text-center  text-[12px]">
          {position}
        </p>
        <p className="font-sans header text-gray-300  dark:text-gray-400   mr-10 ml-10 mt-1 mb-2 text-center text-[10px]">
          {qoute}
        </p>
      </div>
    </div>
  );
};

export default GBCOMP;
