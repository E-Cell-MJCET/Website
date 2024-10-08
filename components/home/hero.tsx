import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex text-center justify-center items-start lg:items-center leading-tight flex-grow ">
      {/* <div className='h-10 bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] opacity-25 flex items-center justify-center  backdrop-filter backdrop-blur-2xl'>
            <div className=''>
            <InstagramIcon  className='text-black mx-5 h-7 w-7'/>
            <FacebookIcon className='text-black mx-3 h-7 w-7 my-3' />
            <TwitterIcon className='text-black  mx-3 h-7 w-7 my-3' />
            <LinkedInIcon className='text-black  mx-3 h-7 w-7 my-3' />
            </div>
        </div> */}

      <div className="w-[70%]">
        {/* <div className='text-[40px] font-bold poiret  -mb-8 opacity-100'> Welcome to </div> */}
        {/* <div className="relative"> */}
        {/* <div className="text-[max(3.2rem,min(5.2vw,5.3rem))] absolute hidden lg:inline uppercase -inset-1 blur-sm opacity-60 font-extrabold header bg-clip-text text-transparent bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] ">
            Entrepreneurship Cell
          </div> */}
        <div className="text-[max(3rem,min(5vw,5rem))] font-montserrat hidden lg:inline bg-gradient-to-r from-orange-700 to-blue-500 text-transparent bg-clip-text bg-300% animate-gradient ">
          Entrepreneurship Cell
        </div>
        {/* </div> */}
        {/* https://www.youtube.com/watch?v=ANKNNKPJAMI */}
        {/* text animation above */}
        <div className="relative">
          <div className="text-[max(3.2rem,min(5.6vw,5.6rem))] inline desktop:hidden lg:hidden absolute  -inset-1 blur-sm opacity-60 font-medium bg-gradient-to-r from-orange-700 to-blue-500 text-transparent bg-clip-text bg-300% animate-gradient ">
            E-Cell
          </div>
          <div className="text-[max(3.2rem,min(5.6vw,5.6rem))] inline desktop:hidden lg:hidden font-medium blackOps bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-blue-500  bg-300% animate-gradient">
            E-Cell
          </div>
        </div>
        <div className="text-[max(2rem,min(4vw,4rem))] tracking-wider font-bold  text-gray-300 opacity-100 ">
          MJCET
        </div>

        {/* <div className='text-[14px]  mt-2 lg:max-w-[400px] poiret font-semibold text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit eligendi dolores neque dolor sed sunt quisquam tempora 
          nesciunt? Quas nihil totam alias quos, sunt....</div> */}
        <div className="grid gap-8 items-start justify-center mt-10 mb-14 lg:my-20">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff403c]  to-[#0b5db0] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-5000 group-hover:duration-2000 animate-tilt"></div>
            <button className=" relative px-10 py-4 bg-black rounded-lg leading-none flex items-center space-x-5 ">
              {/* <span className="text-gray-300 header font-semibold tracking-wide text-[16px] lg:text-[20px] flex items-center justify-center">
                Ideate{" "}
                <div className="h-[10px] w-[10px] rounded-full bg-[#0b5db0] mx-2 mt-1 group-hover:bg-[#ff403c] transition duration-1000">
                  {" "}
                </div>{" "}
                Innovate{" "}
                <div className="h-[10px] w-[10px] rounded-full bg-[#0b5db0] mx-2 mt-1 group-hover:bg-[#ff403c] transition duration-1000">
                  {" "}
                </div>
                Incubate
              </span> */}
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSebLywGHGDN2Vf6KE8lxojQJdpaWsckSa385PK8rfzYNG1aKg/viewform"
                }
                className="text-gray-300 header font-semibold tracking-wide text-[16px] lg:text-[20px] flex items-center justify-center"
              >
                Join our team
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
