import React from "react";

import abid from "../../public/assets/GB/abid.png";
import maliha from "../../public/assets/GB/maliha.jpeg";
import shuja from "../../public/assets/GB/shuja.jpeg";
import ayesha from "../../public/assets/GB/ayesha.jpeg";
import irfan from "../../public/assets/GB/irfan.jpeg";

import GBCOMP from "./gb-comp";

const GB = () => {
  return (
    <div className="flex justify-center pt-32">
      <div className="w-[85%]">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-14 mt-10 text-center text-[45px] text-black dark:text-white">
            <span className="font-staatliches uppercase">Teams</span>
          </div>
          <div className="mb-10 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="my-[2px] h-[3px] w-[260px] rounded-lg bg-[#ff403c]"></div>
              <div className="mt-[2px] h-[3px] w-[320px] rounded-lg bg-[#ff403c]"></div>
            </div>
            <div className="absolute bg-black px-3 text-center font-montserrat text-[30px] font-bold  text-black opacity-100 dark:text-white">
              Governing Body
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-col">
          <div className="flex w-full flex-col items-center justify-center lg:flex-row">
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
          <div className="flex w-full flex-col items-center justify-center lg:flex-row">
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
