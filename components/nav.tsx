/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import elnwt from "../public/assets/Logo/logo-small-white.png";
import elwt from "../public/assets/Logo/logo-big-colour.png";
import ectext from "../public/assets/Logo/logo-big-white.png";

import { SheetTrigger, SheetContent, Sheet } from "./ui/sheet";

const Nav = () => {
  const [isOpen] = useState(false);

  return (
    <div
      className={`${
        isOpen ? "overscroll-none" : ""
      }fixed z-50 flex w-full items-center justify-between bg-black/30  backdrop-blur-xl`}
    >
      <div className="mx-4  flex w-full flex-row items-center justify-between py-5 lg:justify-around ">
        <Link href={"/"}>
          <div className="hidden lg:block">
            <Image
              src={ectext}
              alt=""
              className=" hidden h-[48px] w-[48px] dark:block lg:mt-1 lg:h-[50px] lg:w-fit"
              height={200}
              width={500}
            />
            <Image
              src={elwt}
              alt=""
              className=" block h-[48px] w-[48px] dark:hidden lg:mt-1 lg:h-[70px] lg:w-fit"
              height={200}
              width={500}
            />
          </div>
          <div className="block lg:hidden">
            <Image
              src={elnwt}
              alt=""
              className=" h-[48px] w-[48px] lg:mt-1 lg:h-[70px] lg:w-full"
              height={200}
              width={500}
            />
          </div>
        </Link>
        <div className="hidden lg:inline ">
          <ul className="flex items-center justify-center px-3 ">
            <li className=" mx-3 text-xl font-semibold text-black underline-offset-8 hover:font-bold hover:underline dark:text-white">
              <Link href={"/"}>Home</Link>
            </li>
            <li className=" mx-3 text-xl font-semibold text-black underline-offset-8 hover:font-bold hover:underline dark:text-white">
              <Link href={"/events"}>Events</Link>
            </li>
            <li className=" mx-3 text-xl font-semibold text-black underline-offset-8 hover:font-bold hover:underline active:text-red-700 dark:text-white">
              <Link href={"/team"}>Team</Link>
            </li>
            <li className=" mx-3 text-xl font-semibold text-black underline-offset-8 hover:font-bold hover:underline dark:text-white">
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            {/* <li className='mx-3 text-xl font-semibold  hover:font-bold hover:underline underline-offset-8'><Link href={''}>Blogs</Link></li> */}
            <li className=" mx-3 text-xl font-semibold text-black underline-offset-8 hover:font-bold hover:underline dark:text-white">
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
                  <div className="my-[2.5px] h-[4px] w-[22px] rounded-lg bg-black transition-all duration-150 ease-out dark:bg-white"></div>
                  <div className="my-[2.5px] h-[4px] w-[34px] rounded-lg bg-black transition-all duration-150 ease-out dark:bg-white"></div>
                  <div className="my-[2.5px] h-[4px] w-[22px] rounded-lg bg-black transition-all duration-150 ease-out dark:bg-white"></div>
                </div>
              </div>
            </SheetTrigger>
            <SheetContent>
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
                  {/* <li className="mx-3 text-xl my-5 text-black dark:text-white font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/ipl"}>IPL Auction</Link>
                  </li> */}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Nav;
