import Image from "next/image";
import React from "react";

interface PrevEvProps {
  title: string;
  desc: string;
  image: any;
}

<<<<<<< HEAD
const PrevEv: React.FC<PrevEvProps> = ({ title, desc, image }) => {
  return (
    <div className="w-[80%] mb-6">
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
            <div className="text-[24px] header mb-5 ">{title}</div>
            <div className="flex items-center justify-center h-[150px] w-[220px] lg:hidden">
              <Image
                src={image}
                width={100}
                height={100}
                alt=""
                className="rounded-lg text-center"
              />
=======
const PrevEv: React.FC<PrevEvProps> = ({title, desc, image}) => {
    return (
        <div className='w-[80%] mb-6'>
            <div className='flex justify-center shadow-lg shadow-gray-900 lg:shadow-none lg:bg-black h-full py-5 px-4 rounded-xl cursor-text hover:border-pink-600 group border-0 lg:border-[1px] lg:border-purple-700 transition-all duration-300 '>
                <div className='w-full flex lg:justify-center lg:items-center flex-col lg:flex-row group-hover:scale-95 duration-300'>
                    <div className='relative h-[150px] w-[220px] lg:block hidden  overflow-hidden '>
                      <div className='flex justify-center items-center'>
                        <Image
                            src={image}
                            width={150}
                            height={120}
                            alt=""
                            className="  object-contain"
                            
                        />
                        </div>
                    </div>
                    <div className='flex flex-col text-left mt-4 lg:mt-0 lg:w-[80%] lg:px-5 justify-between'>
                        <div className='text-[24px] header mb-5 '>{title}</div>
                        <div className='relative h-[150px] w-[220px] lg:hidden block'>
                            <Image
                                src={image}
                                width={100}
                                height={100}
                                alt=""
                                className="rounded-lg"
                            />
                        </div>
                        <div className='text-sm tracking-tight break-all mt-5 lg:mt-0'>{desc}</div>
                    </div>
                </div>
>>>>>>> 15e3152 (IDK)
            </div>
            <div className="text-sm tracking-tight mt-5 lg:mt-0">{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevEv;
