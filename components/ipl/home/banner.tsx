import Image from "next/image";
import React from "react";
import TeamCard from "./teamCard";

const Banner = () => {
  return (
    <div className="flex justify-center">
      <div className="md:w-[90%]">
        <div className="blackOps text-lg mt-5">Back Home</div>
        <div className="flex items-center justify-center flex-col gap-4">
          <Image
            src={"../../../assets/ipl/iplb.png"}
            alt=""
            width={1000}
            height={1000}
            className="h-[27vh] w-[55vh]"
          />
          <div className="header text-xl font-medium bg-ecell-blue-100 px-3  rounded-full">
            Welcome to IPL Auction Conducted by ECELL MJCET
          </div>
          <div className="text-4xl mt-10 blackOps">Teams</div>
          <div className="mb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
