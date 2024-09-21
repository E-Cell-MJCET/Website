import Link from "next/link";
import React from "react";

const Footers = () => {
  return (
    <div className="flex justify-center pb-4 header bg-back-light dark:bg-back-dark">
      <div className="w-[90%]">
        <hr className="h-[1px]  mx-auto bg-gradient-to-r from-[#ff403c]  to-[#0b5db0] border-0 mb-3" />
        <div className="flex items-center lg:justify-between flex-col lg:flex-row">
          <div className="text-sm  text-black dark:text-white">
            &#169; E-Cell MJCET 2024-25 | all rights reserved
          </div>
          <div className="text-sm text-black dark:text-white mt-1 lg:mt-0">
            Developed by{" "}
            <span className="text-black dark:text-white cursor-pointer bg-clip-text ">
              <p>E-Cell Tech Team</p>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
