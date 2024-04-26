import React from "react";
import { Button } from "../ui/button";
import PlayerMain from "./playerData/main";

const Add = () => {
  return (
    <div className="h-full w-full bg-gray-950">
      <div className="pt-10 pl-10 flex flex-row justify-between items-center pr-10">
        <div>
          <p className="text-3xl text-white">Player Management</p>
          <p className="text-xl mt-5 text-gray-400">
            View and add players or put players in auction or mark them sold in
            this page
          </p>
        </div>
        <div>
          <Button>Add Player</Button>
        </div>
      </div>
      <PlayerMain />
    </div>
  );
};

export default Add;
