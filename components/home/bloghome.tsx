/* eslint-disable @next/next/no-img-element */
import React from "react";

const Blog = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="w-[85%]">
        <div className="flex justify-center items-center relative">
          <div className="flex flex-col items-center ">
            <div className="h-[3px] w-[220px] bg-[#c23c83] rounded-lg my-[2px]"></div>
            <div className="h-[3px] w-[280px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
          </div>

          <div className="text-center poiret text-[30px] font-bold opacity-100 z-30 bg-black px-3 absolute">
            Latest Blogs
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 lg:gap-x-8 gap-y-8 lg:gap-y-0 mt-16 ">
            {/* first one */}
            <div className="relative">
            <div className="h-[400px] w-full absolute inset-0.1  bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] rounded-lg blur"></div>
            <div className="h-[400px] relative w-full rounded-lg bg-black flex flex-col justify-start items-center border-[1.5px] border-[#6b28d5] group hover:cursor-text">
              <div className="w-[90%] h-[50%] object-contain overflow-hidden mt-4">
                {" "}
                <img
                  src="../../assets/blog2.jpeg"
                  alt=""
                  className="h-full w-full rounded-lg opacity-70 group-hover:border-[2px] group-hover:border-[#c23c83]  "
                />{" "}
              </div>
              <div className="w-[90%] flex justify-between text-[9px] header font-semibold text-white mt-5 group-hover:scale-95 transition duration-500">
                <div>16 Aug 2023</div>
                <div className="rounded-md bg-[#6b28d5] px-[7px] py-[2px]">7 min read</div>
              </div>
              <div className="w-[90%]  text-gray-400 text-xs leading-snug mt-5 header group-hover:scale-95 transition duration-500">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus ipsa placeat blanditiis? Corrupti repellendus non
                  dolorum iste expedita exercitationem obcaecati totam quam vero
                  fugiat assumenda......
                </div>
              </div>
              <div className="w-[90%] flex justify-end mt-6 group-hover:scale-95 transition duration-500">
                <button className="header text-sm bg-[#6b28d5] hover:bg-[#c23c83] transition duration-500 ease-in-out rounded-md px-[7px] py-[2px]">Read More &rarr;</button>
              </div>
            </div>
            </div>
            {/* second one */}
            <div className="relative">
            <div className="h-[400px] w-full absolute inset-0.1  bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] rounded-lg blur"></div>
            <div className="h-[400px] relative w-full rounded-lg bg-black flex flex-col justify-start items-center border-[1.5px] border-[#6b28d5] ">
              <div className="w-[90%] h-[50%] object-contain overflow-hidden mt-4">
                {" "}
                <img
                  src="../../assets/blog3.png"
                  alt=""
                  className="h-full w-full rounded-lg opacity-70"
                />{" "}
              </div>
              <div className="w-[90%] flex justify-between text-[9px] header font-semibold text-white mt-5">
                <div>16 Aug 2023</div>
                <div className="rounded-md bg-[#6b28d5] px-[7px] py-[2px]">7 min read</div>
              </div>
              <div className="w-[90%]  text-gray-400 text-xs leading-snug mt-5 header">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus ipsa placeat blanditiis? Corrupti repellendus non
                  dolorum iste expedita exercitationem obcaecati totam quam vero
                  fugiat assumenda......
                </div>
              </div>
              <div className="w-[90%] flex justify-end mt-6 ">
                <button className="header text-sm bg-[#6b28d5] rounded-md px-[7px] py-[2px]">Read More &rarr;</button>
              </div>
            </div>
            </div>
            {/* third one  */}
            <div className="relative">
            <div className="h-[400px] w-full absolute inset-0.1  bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] rounded-lg blur"></div>
            <div className="h-[400px] relative w-full rounded-lg bg-black flex flex-col justify-start items-center border-[1.5px] border-[#6b28d5] ">
              <div className="w-[90%] h-[50%] object-contain overflow-hidden mt-4">
                {" "}
                <img
                  src="../../assets/blog4.jpeg"
                  alt=""
                  className="h-full w-full rounded-lg opacity-70"
                />{" "}
              </div>
              <div className="w-[90%] flex justify-between text-[9px] header font-semibold text-white mt-5">
                <div>16 Aug 2023</div>
                <div className="rounded-md bg-[#6b28d5] px-[7px] py-[2px]">7 min read</div>
              </div>
              <div className="w-[90%]  text-gray-400 text-xs leading-snug mt-5 header">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus ipsa placeat blanditiis? Corrupti repellendus non
                  dolorum iste expedita exercitationem obcaecati totam quam vero
                  fugiat assumenda......
                </div>
              </div>
              <div className="w-[90%] flex justify-end mt-6 ">
                <button className="header text-sm bg-[#6b28d5] rounded-md px-[7px] py-[2px]">Read More &rarr;</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
