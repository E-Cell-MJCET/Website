import React from "react";
import Execom from "./execom";
import HoverExecom from "./hoverExecom";

const ExecomTeam = ({
  teamName,
  teamData,
}: {
  teamName: string;
  teamData: any;
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center my-10 w-full">
        <div className="flex flex-col items-center justify-center ">
          <div className="h-[3px] w-[260px] bg-[#ff403c] rounded-lg my-[2px]"></div>
          <div className="h-[3px] w-[320px] bg-[#ff403c] rounded-lg mt-[2px]"></div>
        </div>

        <div className="text-center poiret text-[30px] font-bold opacity-100 text-black dark:text-white bg-back-light dark:bg-back-dark px-3 absolute">
          {teamName}
        </div>
      </div>
      <div className="flex justify-center w-full  h-auto bg-back-light dark:bg-back-dark">
        <div className="w-[95%]">
          <div className="justify-center flex flex-wrap">
            {teamData.map((data: any, index: any) => (
              <Execom key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecomTeam;
