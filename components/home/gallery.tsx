import Image from "next/image";
import React from "react";
import b1 from "../../public/assets/blog1.jpeg";
import b2 from "../../public/assets/blog2.jpeg";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center mt-20 mx-auto">
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
      <div className="flex flex-col lg:flex-row items-center justify-center shadow-lg shadow-gray-800 opacity-50">
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 ">
          <Image
                    src={b1}
                    alt=""
                    className="h-[200px] w-[300px] object-cover border-4 border-black"
                    
                  ></Image>
                   <Image
                    src={b2}
                    alt=""
                    className="h-[200px] w-[300px] object-cover border-4 border-black"
                    
                  ></Image>
          </div>
          <Image
                    src={b2}
                    alt=""
                    className="h-[200px] w-[600px] object-cover border-4 border-black"
                    
                  ></Image>
        </div>
        <div>
          {/* two */}
          <div className="flex flex-col justify-center items-center">
          <Image
                    src={b2}
                    alt=""
                    className="h-[200px] w-[600px] object-cover border-4 border-black"
                    
                  ></Image>
          <div className="grid grid-cols-2 ">
          <Image
                    src={b1}
                    alt=""
                    className="h-[200px] w-[300px] object-cover border-4 border-black"
                    
                  ></Image>
                   <Image
                    src={b2}
                    alt=""
                    className="h-[200px] w-[300px] object-cover border-4 border-black"
                    
                  ></Image>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
