/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import elnwt from "../public/assets/ewnlt.png";
import elwt from "../public/assets/elwt.png";
import ectext from "../public/assets/ectext.png";
import Link from "next/link";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "./ui/sheet";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`${
        isOpen ? "overscroll-none" : ""
      }fixed flex justify-between items-center w-full z-50 bg-black backdrop-blur-xl  bg-opacity-30`}
    >
      <div className="flex w-full  flex-row justify-between items-center lg:justify-around py-5 header mx-4 ">
        <Link href={"/"}>
          <div className="hidden lg:block">
            <Image
              src={ectext}
              alt=""
              className="h-[48px] lg:h-[50px] w-[48px] lg:w-fit lg:mt-1 logo dark:block hidden"
              height={200}
              width={500}
            />
            <Image
              src={elwt}
              alt=""
              className="h-[48px] lg:h-[70px] w-[48px] lg:w-fit lg:mt-1 dark:hidden block logo"
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
        </Link>
        <div className="hidden lg:inline ">
          <ul className="flex items-center justify-center px-3 ">
            <li className="mx-3 text-xl text-black dark:text-white font-semibold menu1 hover:font-bold hover:underline underline-offset-8">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="mx-3 text-xl text-black dark:text-white font-semibold menu1 hover:font-bold hover:underline underline-offset-8">
              <Link href={"/events"}>Events</Link>
            </li>
            <li className="mx-3 text-xl text-black dark:text-white font-semibold menu2 hover:font-bold hover:underline underline-offset-8 active:text-red-700">
              <Link href={"/team"}>Team</Link>
            </li>
            <li className="mx-3 text-xl text-black dark:text-white font-semibold menu3 hover:font-bold hover:underline underline-offset-8">
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            {/* <li className='mx-3 text-xl font-semibold  hover:font-bold hover:underline underline-offset-8'><Link href={''}>Blogs</Link></li> */}
            <li className="mx-3 text-xl text-black dark:text-white font-semibold menu4 hover:font-bold hover:underline underline-offset-8">
              <Link href={"/contactus"}>Contact</Link>
            </li>
            {/* <li className="mx-3 text-xl text-black dark:text-white font-semibold menu4 hover:font-bold hover:underline underline-offset-8">
              <Link href={"/ipl"}>IPL Auction</Link>
            </li> */}
          </ul>
        </div>
        <div className="in-line lg:hidden text-right mr-5 transition duration-300 ease-in-out">
          {/* <button
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
                  <li className="mx-3 text-xl text-white font-semibold menu1 hover:font-bold hover:underline underline-offset-8">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="mx-3 pt-2 pb-2 text-white text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/events"}>Events</Link>
                  </li>
                  <li className="mx-3 pt-2 pb-2 text-white text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/team"}>Team</Link>
                  </li>
                  <li className="mx-3 pt-2 pb-2 text-white text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/gallery"}>Gallery</Link>
                  </li>
                  <li className="mx-3 pt-2 pb-2 text-white text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/contactus"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="md:w-1/2 text-right mt-5 absolute right-0 bg-black z-10 scale-0 transition-all ease-in duration-100">
              <div>
                <ul>
                  <li className="mx-3 text-xl text-white font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/events"}>Events</Link>
                  </li>
                  <li className="mx-3 text-xl text-white font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/team"}>Team</Link>
                  </li>
                  <li className="mx-3 text-xl text-white font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/gallery"}>Gallery</Link>
                  </li>
                  <li className="mx-3 text-xl text-white font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          )} */}
          <Sheet>
            <SheetTrigger>
              {" "}
              <div className="flex flex-col items-center transition-all ease-in duration-100">
                <div className="flex flex-col items-center transition-all ">
                  <div className="w-[22px] h-[4px] my-[2.5px] bg-black dark:bg-white rounded-lg transition-all ease-out duration-150"></div>
                  <div className="w-[34px] h-[4px] my-[2.5px] bg-black dark:bg-white rounded-lg transition-all ease-out duration-150"></div>
                  <div className="w-[22px] h-[4px] my-[2.5px] bg-black dark:bg-white rounded-lg transition-all ease-out duration-150"></div>
                </div>
              </div>
            </SheetTrigger>
            <SheetContent>
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
