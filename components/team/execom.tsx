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
    <div className="flex flex-col w-[160px] items-center  mt-[20px] bg-[#1b1b1b] rounded-lg mx-[5px] md:mx-[25px] md:w-[180px] mb-[20px] border border-gray-900 hover:scale-110 hover:border-[#c23c83] transform duration-300">
      <div className="flex items-center justify-center w-[93px] h-[93px] mt-[25px] rounded-full bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] ">
        <Image
          className="w-[90px] h-[90px]  object-cover rounded-full"
          src={dp}
          width={80}
          height={80}
          alt={""}
        ></Image>
      </div>

      <h1 className="mt-[20px] text-[20px] text-white text-center px-[25px] md:px-[35px] font-medium header">
        {username}
      </h1>

      {head ? (
        <div className="rounded-md bg-[#6b28d5] text-white text-[12px] mb-[25px] mt-[12px] px-[7px] py-[2px]">
          Head
        </div>
      ) : (
        <div className="rounded-md bg-[#c23c83] text-white text-[12px] mb-[25px] mt-[12px] px-[7px] py-[2px]">
          Core
        </div>
      )}

      <div className="flex justify-center  mb-3 mt-auto">
        {insta ? (
          <a
            href={instalink}
            className="text-gray-500 hover:text-blue-500 mx-[6px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="h-5 w-5" />
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
            <LinkedInIcon className="h-5 w-5" />
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
            <TwitterIcon className="h-5 w-5" />
          </a>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default Execom;
