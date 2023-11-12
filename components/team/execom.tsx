/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export interface ExecomCardProps {
  dp: any;
  username: string;
  position: string;
  instalink: string;
  linkedlinlink: string;
  twitterlink: string;
}

const Execom: React.FC<ExecomCardProps> = ({
  dp,
  username,
  position,
  instalink,
  linkedlinlink,
  twitterlink,
}) => {
  return (
    <div className="flex flex-col w-[180px] items-center justify-center mt-24 bg-[#212121] rounded-md m-[20px]">
      <div className="flex items-center justify-center w-[75px] h-[75px] mt-[25px] rounded-full bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] ">
        <Image
          className="w-[65px] h-[65px]  object-cover rounded-full"
          src={dp}
          width={65}
          height={65}
          alt={""}
        ></Image>
      </div>

      <h1 className="mt-[20px] text-[20px] text-center px-[10px] font-medium Header">
        {username}
      </h1>

      <div className="rounded-md bg-[#6b28d5] text-[12px] mb-[25px] mt-[12px] px-[7px] py-[2px]">
        {position}
      </div>

      <div className="flex justify-center space-x-4 mb-3 mt-1">
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
