import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Subscriber } from "framer-motion";

import elnwt from "../../public/assets/Logo/logo-small-white.png";
import ectext from "../../public/assets/Logo/logo-big-white.png";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";

const Navbar = () => {
  const [isOpen] = useState(false);

  return (
    <div className={`${isOpen ? "overscroll-none" : ""}`}>
      <div className="absolute -z-10 w-full bg-fixed opacity-50 lg:h-screen">
        <img src="../../assets/banner3.png" alt="" className="" />
      </div>
      <div className="  mx-4 mb-2 flex flex-row justify-between pt-10 lg:mb-24 lg:justify-around ">
        <div className="hidden lg:block">
          <Image
            src={ectext}
            alt=""
            className=" h-[48px] w-[48px] lg:mt-1 lg:h-[70px] lg:w-fit"
            height={200}
            width={500}
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src={elnwt}
            alt=""
            className=" h-[48px] w-[48px] lg:mt-1 lg:h-[70px] lg:w-fit"
            height={200}
            width={500}
          />
        </div>
        <div className="hidden lg:inline ">
          <ul className="mt-6 flex items-center justify-center px-3 ">
            <li className=" mx-3 text-xl font-semibold text-white underline-offset-8 hover:font-bold hover:underline">
              <Link href={"/events"}>Events</Link>
            </li>
            <li className=" mx-3 text-xl font-semibold text-white underline-offset-8 hover:font-bold hover:underline">
              <Link href={"/team"}>Team</Link>
            </li>
            <li className=" mx-3 text-xl font-semibold text-white underline-offset-8 hover:font-bold hover:underline">
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            <li className=" mx-3 text-xl font-semibold text-white underline-offset-8 hover:font-bold hover:underline">
              <Link href={"/contactus"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className=" mr-5 text-right transition duration-300 ease-in-out lg:hidden">
          <Sheet>
            <SheetTrigger>
              {" "}
              <div className="flex flex-col items-center transition-all duration-100 ease-in">
                <div className="flex flex-col items-center transition-all ">
                  <div className="my-[2.5px] h-[4px] w-[22px] rounded-lg bg-white transition-all duration-150 ease-out"></div>
                  <div className="my-[2.5px] h-[4px] w-[34px] rounded-lg bg-white transition-all duration-150 ease-out"></div>
                  <div className="my-[2.5px] h-[4px] w-[22px] rounded-lg bg-white transition-all duration-150 ease-out"></div>
                </div>
              </div>
            </SheetTrigger>
            <SheetContent content="false">
              <div className="mt-10 ">
                <ul>
                  <li className="mx-3 my-5 from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] text-xl font-semibold text-black hover:bg-gradient-to-r hover:bg-clip-text hover:font-bold hover:text-transparent hover:underline dark:text-white">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="mx-3 my-5 from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] text-xl font-semibold text-black hover:bg-gradient-to-r hover:bg-clip-text hover:font-bold hover:text-transparent hover:underline dark:text-white">
                    <Link href={"/events"}>Events</Link>
                  </li>
                  <li className="mx-3 my-5 from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] text-xl font-semibold text-black hover:bg-gradient-to-r hover:bg-clip-text hover:font-bold hover:text-transparent hover:underline dark:text-white">
                    <Link href={"/team"}>Team</Link>
                  </li>
                  <li className="mx-3 my-5 from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] text-xl font-semibold text-black hover:bg-gradient-to-r hover:bg-clip-text hover:font-bold hover:text-transparent hover:underline dark:text-white">
                    <Link href={"/gallery"}>Gallery</Link>
                  </li>
                  <li className="mx-3 my-5 from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] text-xl font-semibold text-black hover:bg-gradient-to-r hover:bg-clip-text hover:font-bold hover:text-transparent hover:underline dark:text-white">
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

export default Navbar;
