import React, { useState } from "react";
import Image from "next/image";
import elnwt from "../../public/assets/ewnlt.png";
import ectext from "../../public/assets/ectext.png";
import Link from "next/link";

import { Sheet } from "../ui/sheet";
import { SheetTrigger, SheetContent } from "../ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? "overscroll-none" : ""
      } fixed flex justify-between items-center w-full z-50 bg-black backdrop-blur-xl  bg-opacity-30`}
    >
      <div className="flex w-full  flex-row justify-between items-center lg:justify-around py-2 header mx-4 ">
        <div className="hidden lg:block">
          <Image
            src={ectext}
            alt=""
            className="h-[48px] lg:h-[50px] w-[48px] lg:w-fit lg:mt-1 logo"
            height={200}
            width={500}
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src={elnwt}
            alt=""
            className="h-[48px] lg:h-[70px] w-[48px] lg:w-fit lg:mt-1 logo"
            height={200}
            width={500}
          />
        </div>
        <div className="hidden lg:inline ">
          <ul className="flex items-center justify-center px-3  ">
            <li className="mx-3 text-xl text-white font-medium menu1 hover:font-semibold hover:underline underline-offset-8">
              <Link href={"/events"}>Events</Link>
            </li>
            <li className="mx-3 text-xl text-white font-medium menu2 hover:font-semibold hover:underline underline-offset-8">
              <Link href={"/team"}>Team</Link>
            </li>
            <li className="mx-3 text-xl text-white font-medium menu3 hover:font-semibold hover:underline underline-offset-8">
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            {/* <li className='mx-3 text-xl font-semibold  hover:font-bold hover:underline underline-offset-8'><Link href={''}>Blogs</Link></li> */}
            <li className="mx-3 text-xl text-white font-medium menu4 hover:font-semibold hover:underline underline-offset-8">
              <Link href={"/contactus"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="in-line lg:hidden text-right mr-5 transition duration-300 ease-in-out">
          <Sheet>
            <SheetTrigger>
              {" "}
              <div className="flex flex-col items-center transition-all ease-in duration-100">
                <div className="flex flex-col items-center transition-all ">
                  <div className="w-[22px] h-[4px] my-[2.5px] bg-white rounded-lg transition-all ease-out duration-150"></div>
                  <div className="w-[34px] h-[4px] my-[2.5px] bg-white rounded-lg transition-all ease-out duration-150"></div>
                  <div className="w-[22px] h-[4px] my-[2.5px] bg-white rounded-lg transition-all ease-out duration-150"></div>
                </div>
              </div>
            </SheetTrigger>
            <SheetContent content="false">
              <div className="mt-10 ">
                <ul>
                  <li className="mx-3 text-xl my-5 text-black dark:text-white font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="mx-3 text-xl my-5 text-black dark:text-white font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/events"}>Events</Link>
                  </li>
                  <li className="mx-3 text-xl my-5 text-black dark:text-white font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/team"}>Team</Link>
                  </li>
                  <li className="mx-3 text-xl my-5 text-black dark:text-white font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/gallery"}>Gallery</Link>
                  </li>
                  <li className="mx-3 text-xl my-5 text-black dark:text-white font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/contactus"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
