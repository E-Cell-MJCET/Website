/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
// import elwt from '../../public/assets/money heaist.png'
import abme from "../../public/assets/abme1.jpg";
import ab1 from "../../public/assets/basith.jpeg";
import shuja from "../../public/assets/shuja.jpg";
import ayesha from "../../public/assets/ay.jpg";
import sofain from "../../public/assets/sofain.jpg";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const GB = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[85%]">
        <div className="flex justify-center flex-col items-center">
          <div className="text-center text-[45px] text-white header mt-10 mb-14">
            <span className="blackOps uppercase">Teams</span>
          </div>
          <div className="flex justify-center items-center mb-10">
            <div className="flex flex-col items-center justify-center">
              <div className="h-[3px] w-[260px] bg-[#c23c83] rounded-lg my-[2px]"></div>
              <div className="h-[3px] w-[320px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
            </div>

            <div className="text-center text-white poiret text-[30px] font-bold opacity-100  bg-black px-3 absolute">
              Governing Body
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center relative">
          <div className="flex flex-col items-center ">
            
            <div className="h-[3px] w-[260px] bg-[#c23c83] rounded-lg my-[2px]"></div>
            <div className="h-[3px] w-[320px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
          </div>

          <div className="text-center poiret text-[30px] font-bold opacity-100 z-30 bg-black px-3 absolute">
            Governing Body
          </div>
        </div> */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-8 place-items-center items-center">
            {/* 1 */}
            <div className="flex flex-col mt-3 lg:m-5 text-center  bg-gray-900 lg:col-span-4 lg:-mb-2">
              <div className="w-[250px]   m-1 h-fit text-center shadow-lg ">
                <div className="text-center rounded-t-[20px]">
                  <Image
                    src={ab1}
                    alt=""
                    className="h-[230px] w-[100%] object-cover top-52"
                    style={{
                      clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
                    }}
                  ></Image>
                </div>
                <div className=" flex flex-col justify-center items-center">
                  <div className="font-sans  header  text-white text-center   text-[20px] tracking-[0.07em] ">
                    ABDUL BASITH
                  </div>

                  <p className="font-sans header text-white text-center  text-[12px]">
                    CHIEF COORDINATOR
                  </p>
                  <p className="font-sans header text-gray-400   mr-10 ml-10 mt-1 mb-2 text-center text-[10px]">
                    "The victory is not about me, it's about us"
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mb-3 mt-1">
                  <a
                    href="https://www.instagram.com/basith_ab1235"
                    className="text-gray-500 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abdul-basith-2b90ab267"
                    className="text-gray-500 hover:text-pink-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/abdul_basith123"
                    className="text-gray-500 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col mt-10 lg:m-10 text-center  bg-gray-900 ">
              <div className="w-[250px]   m-1 h-fit text-center shadow-lg ">
                <div className="text-center rounded-t-[20px]">
                  <Image
                    src={shuja}
                    alt=""
                    className="h-[230px] w-[100%] object-cover top-52"
                    style={{
                      clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
                    }}
                  ></Image>
                </div>
                <div className=" flex flex-col justify-center items-center">
                  <div className="font-sans  header  text-white text-center  uppercase text-[20px] tracking-[0.07em] ">
                    Shujauddin
                  </div>

                  <p className="font-sans header text-white text-center  text-[12px]">
                    DEPUTY CHIEF COORDINATOR
                  </p>
                  <p className="font-sans header text-gray-400   mr-10 ml-10 mt-1 mb-2 text-center text-[10px]"></p>
                </div>
                <div className="flex justify-center space-x-4 mb-3 mt-1">
                  <a
                    href="https://www.instagram.com/shoujaboy"
                    className="text-gray-500 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shuj4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    className="text-gray-500 hover:text-pink-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="flex flex-col mt-10 lg:m-10 text-center  bg-gray-900 ">
              <div className="w-[250px]   m-1 h-fit text-center shadow-lg ">
                <div className="text-center rounded-t-[20px]">
                  <Image
                    src={sofain}
                    alt=""
                    className="h-[230px] w-[100%] object-cover top-52"
                    style={{
                      clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
                    }}
                  ></Image>
                </div>
                <div className=" flex flex-col justify-center items-center">
                  <div className="font-sans  header  text-white text-center   text-[20px] tracking-[0.07em] ">
                    SOFAIN HUSSAIN
                  </div>

                  <p className="font-sans header text-white text-center  text-[12px]">
                    CHIEF OPERATING OFFICER
                  </p>
                  <p className="font-sans header text-gray-400   mr-10 ml-10 mt-1 mb-2 text-center text-[10px]"></p>
                </div>
                <div className="flex justify-center space-x-4 mb-3 mt-1">
                  <a
                    href="https://www.instagram.com/__sofain__"
                    className="text-gray-500 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sofain-hussain-554505231/"
                    className="text-gray-500 hover:text-pink-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/SofainHussain"
                    className="text-gray-500 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="flex flex-col mt-10 lg:m-10 text-center  bg-gray-900 ">
              <div className="w-[250px]   m-1 h-fit text-center shadow-lg ">
                <div className="text-center rounded-t-[20px]">
                  <Image
                    src={ayesha}
                    alt=""
                    className="h-[230px] w-[100%] object-cover top-52"
                    style={{
                      clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
                    }}
                  ></Image>
                </div>
                <div className=" flex flex-col justify-center items-center">
                  <div className="font-sans  header  text-white text-center   text-[20px] tracking-[0.07em] ">
                    AYESHA FATIMA
                  </div>

                  <p className="font-sans header text-white text-center  text-[12px]">
                    CHIEF INFORMATION OFFICER
                  </p>
                  <p className="font-sans header text-gray-400   mr-10 ml-10 mt-1 mb-2 text-center text-[10px]"></p>
                </div>
                <div className="flex justify-center space-x-4 mb-3 mt-1">
                  <a
                    href="https://www.linkedin.com/in/ayesha-fatima-131311258/"
                    className="text-gray-500 hover:text-pink-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            {/* 5 */}

            {/* end */}
            <div className="flex flex-col mt-10 lg:m-10 text-center  bg-gray-900 ">
              <div className="w-[250px]   m-1 h-fit text-center shadow-lg ">
                <div className="text-center rounded-t-[20px]">
                  <Image
                    src={abme}
                    alt=""
                    className="h-[230px] w-[100%] object-cover top-52"
                    style={{
                      clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
                    }}
                  ></Image>
                </div>
                <div className=" flex flex-col justify-center items-center">
                  <div className="font-sans  header  text-white text-center   text-[20px] tracking-[0.07em] ">
                    ABDUL BASITH
                  </div>

                  <p className="font-sans header text-white text-center  text-[12px]">
                    CHIEF TECHNOLOGY OFFICER
                  </p>
                  <p className="font-sans header text-gray-400   mr-10 ml-10 mt-1 mb-2 text-center text-[10px]"></p>
                </div>
                <div className="flex justify-center space-x-4 mb-3 mt-1">
                  <a
                    href="https://www.instagram.com/_abdulbasith07._/"
                    className="text-gray-500 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abdulbasith1733/"
                    className="text-gray-500 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            {/* em=nddd */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GB;
