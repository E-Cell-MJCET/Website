import React from "react";
import { Button } from "../ui/button";
import LeaderBoardMain from "./leaderBoardData/main";

const Leader = () => {
  return (
    <div className="h-full w-full bg-gray-950">
      <div className="pt-10 pl-10 flex flex-row justify-between items-center pr-10">
        <div>
          <p className="text-3xl text-white">LeaderBoard</p>
          <p className="text-xl mt-5 text-gray-400">
            View who is on the top of the leaderboard
          </p>
        </div>
      </div>
      <LeaderBoardMain />
    </div>
  );
};

export default Leader;
