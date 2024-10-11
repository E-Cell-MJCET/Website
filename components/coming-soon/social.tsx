import Link from "next/link";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const Social = () => {
  return (
    <div>
      {" "}
      <div className="mt-10 flex items-center justify-center gap-x-10 text-center">
        <div className="  flex cursor-pointer items-center justify-center rounded-full transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
          <Link
            passHref
            href="https://instagram.com/ecellmjcet?igshid=NjIwNzIyMDk2Mg=="
            target="_blank"
          >
            <InstagramIcon className="h-9 w-9 text-neutral-200 hover:text-purple-500" />
          </Link>
        </div>
        <div className="  flex cursor-pointer items-center justify-center rounded-full transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
          <Link
            passHref
            href="mailto:ecellmjcet@mjcollege.ac.in"
            target="_blank"
          >
            <EmailIcon className="h-9 w-9 text-neutral-200 hover:text-red-500" />
          </Link>
        </div>
        <div className="  flex cursor-pointer items-center justify-center rounded-full transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
          <Link
            passHref
            href="https://in.linkedin.com/company/e-cell-mjcet"
            target="_blank"
          >
            <LinkedInIcon className="h-9 w-9 text-neutral-200 hover:text-blue-500" />
          </Link>
        </div>
        <div className="  flex cursor-pointer items-center justify-center rounded-full transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
          <Link passHref href="https://linktr.ee/ecellmjcet" target="_blank">
            <AcUnitIcon className="h-9 w-9 text-neutral-200 hover:text-neutral-400" />
          </Link>
        </div>
        <div className="  flex cursor-pointer items-center justify-center rounded-full transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
          <Link
            passHref
            href="https://www.facebook.com/groups/ecellmj/"
            target="_blank"
          >
            <FacebookIcon className="h-9 w-9 text-neutral-200 hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Social;
