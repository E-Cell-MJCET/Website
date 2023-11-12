import Nav from "@/components/nav";
import Execom from "@/components/team/execom";
import ExecomList from "@/components/team/execomList";
import GB from "@/components/team/team";
import React from "react";

const Team = () => {
  return (
    <div>
      <Nav />
      <GB />
      <div className="flex justify-center items-center my-10">
        <div className="flex flex-col items-center justify-center ">
          <div className="h-[3px] w-[260px] bg-[#c23c83] rounded-lg my-[2px]"></div>
          <div className="h-[3px] w-[320px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
        </div>

        <div className="text-center poiret text-[30px] font-bold opacity-100  bg-black px-3 absolute">
          Execom
        </div>
      </div>
      <ExecomList />
    </div>
  );
};

export default Team;
