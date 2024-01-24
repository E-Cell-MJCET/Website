import React from "react";
import Execom from "./execom";

const ExecomTeam = ({
  teamName,
  teamData,
}: {
  teamName: string;
  teamData: any;
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center my-10">
        <div className="flex flex-col items-center justify-center ">
          <div className="h-[3px] w-[260px] bg-[#c23c83] rounded-lg my-[2px]"></div>
          <div className="h-[3px] w-[320px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
        </div>

        <div className="text-center poiret text-[30px] font-bold opacity-100 text-white bg-black px-3 absolute">
          {teamName}
        </div>
      </div>
      <div className="flex justify-center  h-auto bg-[#000]">
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
