/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
// import elwt from '../../public/assets/money heaist.png'
import abme from "../../public/assets/abme.webp";
import ab1 from "../../public/assets/117.jpg";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Banner = () => {
  return (
    <div className="flex justify-center mt-24">
      <div className="w-[85%]">
        <div className="flex justify-center items-center relative">
          <div className="flex flex-col items-center ">
            {/* <div className='h-[3px] w-[300px] bg-pink-600 rounded-lg mb-[2px]'></div> */}
            <div className="h-[3px] w-[260px] bg-[#c23c83] rounded-lg my-[2px]"></div>
            <div className="h-[3px] w-[320px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
          </div>

          <div className="text-center poiret text-[30px] font-bold opacity-100 z-30 bg-black px-3 absolute">
            Meet the Team
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 place-items-center">
            <div className="flex flex-col mt-10 lg:m-10 text-center  bg-gray-900">
              <div className="w-[280px]   m-1 h-fit text-center shadow-lg ">
                <div className="text-center rounded-t-[20px]">
                  <Image
                    src={abme}
                    alt=""
                    className="h-[280px] w-[100%] object-cover"
                    style={{
                      clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
                    }}
                  ></Image>
                </div>
                <div className=" flex flex-col justify-center items-center">
                 
                    <div className="font-sans  header  text-white text-center  mt-2 text-[20px] tracking-[0.07em] ">
                      ABDUL BASITH
                    </div>
                   
                
                  <p className="font-sans header text-white text-center mt-1 text-[12px]">
                    CHIEF COORDINATOR
                  </p>
                  <p className="font-sans header text-gray-400   mr-10 ml-10 mt-2 mb-2 text-center text-[10px]">
                    Description here they can keep whatever they want
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mb-3 mt-2">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-pink-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
