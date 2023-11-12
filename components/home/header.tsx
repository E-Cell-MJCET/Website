import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import elnwt from "../../public/assets/ewnlt.png";
import ectext from "../../public/assets/ectext.png";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen ? "overscroll-none" : ""}`}>
      <div className="w-full lg:h-screen absolute -z-10 opacity-50">
        <img src="../../assets/banner3.png" alt="" className="" />
      </div>
      <div className="flex  flex-row justify-between lg:justify-around pt-10 mb-2 lg:mb-24 header mx-4 ">
        <div className="hidden lg:block">
          <Image
            src={ectext}
            alt=""
            className="h-[48px] lg:h-[70px] w-[48px] lg:w-full lg:mt-1 logo"
            height={200}
            width={500}
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src={elnwt}
            alt=""
            className="h-[48px] lg:h-[70px] w-[48px] lg:w-full lg:mt-1 logo"
            height={200}
            width={500}
          />
        </div>
        <div className="hidden lg:inline ">
          <ul className="flex items-center justify-center px-3 mt-6 ">
            <li className="mx-3 text-xl font-semibold menu1 hover:font-bold hover:underline underline-offset-8">
              <Link href={"/events"}>Events</Link>
            </li>
            <li className="mx-3 text-xl font-semibold menu2 hover:font-bold hover:underline underline-offset-8">
              <Link href={"/team"}>Team</Link>
            </li>
            <li className="mx-3 text-xl font-semibold menu3 hover:font-bold hover:underline underline-offset-8">
              <Link href={"/"}>Gallery</Link>
            </li>
            {/* <li className='mx-3 text-xl font-semibold  hover:font-bold hover:underline underline-offset-8'><Link href={''}>Blogs</Link></li> */}
            <li className="mx-3 text-xl font-semibold menu4 hover:font-bold hover:underline underline-offset-8">
              <Link href={"/contactus"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="in-line lg:hidden text-right mr-5 transition duration-300 ease-in-out">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none "
          >
            {isOpen ? (
              <div className="rotate-90 flex flex-col items-center transition-all ease-in duration-100">
                <div className="w-[22px] h-[4px] bg-white my-[2.5px] rounded-lg transition-all ease-in duration-150"></div>
                <div className="w-[34px] h-[4px] bg-white my-[2.5px] rounded-lg transition-all ease-in duration-150"></div>
                <div className="w-[22px] h-[4px] bg-white my-[2.5px]  rounded-lg transition-all ease-in duration-150 "></div>
              </div>
            ) : (
              <div className="flex flex-col items-center transition-all ">
                <div className="w-[22px] h-[4px] my-[2.5px] bg-white rounded-lg transition-all ease-out duration-150"></div>
                <div className="w-[34px] h-[4px] my-[2.5px] bg-white rounded-lg transition-all ease-out duration-150"></div>
                <div className="w-[22px] h-[4px] my-[2.5px] bg-white rounded-lg transition-all ease-out duration-150"></div>
              </div>
            )}
          </button>
          {isOpen ? (
            <div className="md:w-1/3 text-right mt-6 overscroll-none absolute right-5 bg-black bg-opacity-70 z-10 transition-all ease-in duration-100 rounded-lg py-5 px-7  h-screen w-full">
              <div>
                <ul>
                  <li className="mx-3 pt-2 pb-2 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/events"}>Events</Link>
                  </li>
                  <li className="mx-3 pt-2 pb-2 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/team"}>Team</Link>
                  </li>
                  <li className="mx-3 pt-2 pb-2 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/"}>Gallery</Link>
                  </li>
                  <li className="mx-3 pt-2 pb-2 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/contactus"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="md:w-1/2 text-right mt-5 absolute right-0 bg-black z-10 scale-0 transition-all ease-in duration-100">
              <div>
                <ul>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/events"}>Events</Link>
                  </li>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/team"}>Team</Link>
                  </li>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={""}>Gallery</Link>
                  </li>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/contactus"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
