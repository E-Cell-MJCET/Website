/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from "next/image";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export interface ExecomCardProps {
  username: string;
  dp: any;
  position: string;
  instalink: string;
  linkedlinlink: string;
  twitterlink: string;
}

const Execom: React.FC<ExecomCardProps> = ({
  username,
  dp,
  position,
  instalink,
  linkedlinlink,
  twitterlink,
}) => {
  console.log(dp);
  return (
    <div className="flex flex-col w-[160px] items-center  mt-[20px] bg-[#212121] rounded-md mx-[10px] md:w-[180px] mb-[20px]">
      <div className="flex items-center justify-center w-[85px] h-[85px] mt-[25px] rounded-full bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] ">
        <Image
          className="w-[80px] h-[80px]  object-cover rounded-full"
          src={dp}
          width={80}
          height={80}
          alt={""}
        ></Image>
      </div>

      <h1 className="mt-[20px] text-[20px] text-center px-[10px] font-medium Header">
        {username}
      </h1>

      <div className="rounded-md bg-[#6b28d5] text-[12px] mb-[25px] mt-[12px] px-[7px] py-[2px]">
        {position}
      </div>

      <div className="flex justify-center space-x-4 mb-3 mt-auto">
        <a
          href={instalink}
          className="text-gray-500 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
        <a
          href={linkedlinlink}
          className="text-gray-500 hover:text-pink-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="h-5 w-5" />
        </a>
        <a
          href={twitterlink}
          className="text-gray-500 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Execom;
