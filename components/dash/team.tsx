import React from "react";
import { Button } from "../ui/button";
import TeamMain from "./teamData/main";

const Team = () => {
  return (
    <div className="h-full w-full bg-gray-950">
      <div className="pt-10 pl-10 flex flex-row justify-between items-center pr-10">
        <div>
          <p className="text-3xl text-white">Team Management</p>
          <p className="text-xl mt-5 text-gray-400">
            View all the team details and their players
          </p>
        </div>
      </div>
      <TeamMain />
    </div>
  );
};

export default Team;
