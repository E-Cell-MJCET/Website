import React from "react";

const Footers = () => {
  return (
    <div className="flex justify-center bg-white pb-4 dark:bg-black">
      <div className="w-[90%]">
        <hr className="mx-auto  mb-3 h-px border-0  bg-gradient-to-r from-[#ff403c] to-[#0b5db0]" />
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="text-sm  text-black dark:text-white">
            &#169; E-Cell MJCET 2024-25 | All rights reserved.
          </div>
          <div className="mt-1 text-center text-sm text-black dark:text-white lg:mt-0">
            Developed by{" "}
            <span className="cursor-pointer bg-clip-text text-black dark:text-white ">
              <p>Tech Team of E-Cell</p>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
