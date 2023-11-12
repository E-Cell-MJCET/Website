import Image from "next/image";
import React from "react";
import a1 from "../../public/assets/gallery/1.jpeg";
import a2 from "../../public/assets/gallery/2.jpeg";
import a3 from "../../public/assets/gallery/3.jpeg";
import a4 from "../../public/assets/gallery/4.jpeg";
import a5 from "../../public/assets/gallery/5.jpeg";
import a6 from "../../public/assets/gallery/6.jpeg";
import a7 from "../../public/assets/gallery/7.jpeg";
import a8 from "../../public/assets/gallery/8.jpeg";
import a9 from "../../public/assets/gallery/9.jpeg";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center mt-10 mx-auto ">
      <div className="w-[98%]">
        <div className="flex justify-center items-center mb-10">
          <div className="flex flex-col items-center justify-center">
            <div className="h-[3px] w-[180px] bg-[#c23c83] rounded-lg my-[2px]"></div>
            <div className="h-[3px] w-[240px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
          </div>

          <div className="text-center poiret text-[30px] font-bold opacity-100 z-30 bg-black px-3 absolute">
            Gallery
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center shadow-lg shadow-gray-800  cursor-alias">
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 ">
              <Image
                src={a1}
                alt=""
                className="h-[200px] w-[300px] object-cover border-4 border-black opacity-50"
              ></Image>
              <Image
                src={a2}
                alt=""
                className="h-[200px] w-[300px] object-cover border-4 border-black opacity-50"
              ></Image>
            </div>
            <Image
              src={a3}
              alt=""
              className="h-[200px] w-[600px] object-cover border-4 border-black opacity-50"
            ></Image>
            <div className="grid grid-cols-2 ">
              <Image
                src={a8}
                alt=""
                className="h-[200px] w-[300px] object-cover border-4 border-black opacity-50"
              ></Image>
              <Image
                src={a7}
                alt=""
                className="h-[200px] w-[300px] object-cover border-4 border-black opacity-50"
              ></Image>
            </div>
          </div>
          <div>
            {/* two */}
            <div className="flex flex-col justify-center items-center">
              <Image
                src={a4}
                alt=""
                className="h-[200px] w-[600px] object-cover border-4 border-black opacity-50 hover:opacity-70 delay-300 duration-300"
              ></Image>
              <div className="grid grid-cols-2 ">
                <Image
                  src={a9}
                  alt=""
                  className="h-[200px] w-[300px] object-cover border-4 border-black opacity-50"
                ></Image>
                <Image
                  src={a6}
                  alt=""
                  className="h-[200px] w-[300px] object-cover border-4 border-black opacity-50"
                ></Image>
              </div>
              <Image
                src={a5}
                alt=""
                className="h-[200px] w-[600px] object-cover border-4 border-black opacity-50 hover:opacity-70 delay-300 duration-300"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
