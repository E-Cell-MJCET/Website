/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from "next/image";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export interface CardProps {
  username: string;
  dp: any;
  position: string;
  instalink: string;
  insta: boolean;
  head: boolean;
  linkedlinlink: string;
  linkedln: boolean;
  twitterlink: string;
  twitter: boolean;
}

const Execom: React.FC<CardProps> = ({
  username,
  dp,
  position,
  instalink,
  linkedlinlink,
  twitterlink,
  head,
  insta,
  linkedln,
  twitter,
}) => {
  return (
    <div
      className={`flex flex-col w-60 h-80 items-center  mt-[20px]  rounded-lg mx-[5px] md:mx-[20px] md:w-60 mb-[20px] border-[1px] border-card-light dark:border-card-dark hover:scale-110 ${
        head ? "hover:border-[#ff403c]" : "hover:border-[#0b5db0]"
      } transform duration-300`}
    >
      <div className="flex items-center justify-center w-[93px] h-[93px] mt-[25px] rounded-full bg-gradient-to-r from-[#ff403c]  to-[#0b5db0] ">
        <Image
          className="w-[90px] h-[90px]  object-cover rounded-full"
          src={dp}
          width={80}
          height={80}
          alt={""}
        ></Image>
      </div>

      <h1 className="mt-[20px] text-[20px] text-black dark:text-white text-center px-[25px] md:px-[15px] font-medium header">
        {username}
      </h1>

      {head ? (
        <div className="rounded-md bg-[#ff403c] text-white dark:text-white text-[14px] mb-[25px] mt-[12px] px-[12px] py-[3px]">
          Head
        </div>
      ) : (
        <div className="rounded-md bg-[#0b5db0] text-white dark:text-white text-[14px] mb-[25px] mt-[12px] px-[12px] py-[3px]">
          Core
        </div>
      )}

      <div className="flex justify-center  mb-4 mt-auto">
        {insta ? (
          <a
            href={instalink}
            className="text-gray-500 hover:text-blue-500 mx-[6px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="h-7 w-7" />
          </a>
        ) : (
          <span></span>
        )}

        {linkedln ? (
          <a
            href={linkedlinlink}
            className="text-gray-500 hover:text-pink-600 mx-[6px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-7 w-7" />
          </a>
        ) : (
          <span></span>
        )}

        {twitter ? (
          <a
            href={twitterlink}
            className="text-gray-500 hover:text-blue-500 mx-[6px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="h-7 w-7" />
          </a>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default Execom;
