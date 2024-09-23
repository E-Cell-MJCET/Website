/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
// import elwt from '../../public/assets/money heaist.png'
import abid from "../../public/assets/GB/abid.png";
import maliha from "../../public/assets/GB/maliha.jpeg";
import shuja from "../../public/assets/GB/shuja.jpeg";
import ayesha from "../../public/assets/GB/ayesha.jpeg";
import irfan from "../../public/assets/GB/irfan.jpeg";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GBCOMP from "./gb-comp";

const GB = () => {
  return (
    <div className="flex justify-center pt-32">
      <div className="w-[85%]">
        <div className="flex justify-center flex-col items-center">
          <div className="text-center text-[45px] text-black dark:text-white header mt-10 mb-14">
            <span className="font-staatliches uppercase">Teams</span>
          </div>
          <div className="flex justify-center items-center mb-10">
            <div className="flex flex-col items-center justify-center">
              <div className="h-[3px] w-[260px] bg-[#ff403c] rounded-lg my-[2px]"></div>
              <div className="h-[3px] w-[320px] bg-[#ff403c] rounded-lg mt-[2px]"></div>
            </div>

            <div className="text-center text-black bg-black dark:text-white font-montserrat text-[30px] font-bold opacity-100  dark:bg-back-dark px-3 absolute">
              Governing Body
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-col">
          <div className="flex flex-col lg:flex-row w-full justify-center items-center">
            <GBCOMP
              image={shuja}
              name="SYED SHUJAUDDIN"
              position="CHIEF COORDINATOR"
              qoute="Break boundaries, build legacies"
            />
            <GBCOMP
              image={ayesha}
              name="AYESHA FATHIMA"
              position="CHIEF COORDINATOR"
              qoute="You are not the work you do, you are the person you are."
            />
          </div>
          <div className="flex flex-col lg:flex-row w-full items-center justify-center">
            <GBCOMP
              image={irfan}
              name="MOHAMMAD IRFAN"
              position="CHIEF INFORMATION OFFICER"
              qoute="I see challenges as opportunities to innovate and grow."
            />
            <GBCOMP
              image={maliha}
              name="MALIHA ISHAQ"
              position="CHIEF OPERATING OFFICER"
              qoute="Believe and achieve."
            />
            <GBCOMP
              image={abid}
              name="ABID NAFI"
              position="CHIEF TECHNOLOGY OFFICER"
              qoute="Have an attitude that you can do anything, only then you will go and try anything."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GB;
