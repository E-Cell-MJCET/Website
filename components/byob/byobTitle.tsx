import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Execom from "../team/execom";

const BYOBTitle = () => {
  return (
    <div className="flex flex-grow items-start justify-center text-center leading-tight lg:items-center ">
      <div className="-mt:20 w-[70%]   ">
        <div className="blackOps text-[max(2rem,min(4vw,4rem))] font-bold tracking-wider text-gray-900 opacity-100 dark:text-gray-300 ">
          BYOB
        </div>
      </div>
    </div>
  );
};

export default BYOBTitle;
