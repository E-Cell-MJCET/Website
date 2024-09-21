/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
// import elwt from '../../public/assets/money heaist.png'
import abid from "../../public/assets/test/abid.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const GB = () => {
  return (
    <div className="flex justify-center pt-32">
      <div className="w-[85%]">
        <div className="flex justify-center flex-col items-center">
          <div className="text-center text-[45px] text-black dark:text-white header mt-10 mb-14">
            <span className="font-staatliches uppercase">Teams</span>
          </div>
          <div className="flex justify-center items-center mb-10">
            <div className="flex flex-col items-center justify-center">
              <div className="h-[3px] w-[260px] bg-[#ff403c] rounded-lg my-[2px]"></div>
              <div className="h-[3px] w-[320px] bg-[#ff403c] rounded-lg mt-[2px]"></div>
            </div>

            <div className="text-center text-black bg-black dark:text-white font-montserrat text-[30px] font-bold opacity-100  dark:bg-back-dark px-3 absolute">
              Governing Body
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap lg:flex-col">
            {/* 1 */}
            <div className="flex flex-col lg:flex-row w-full justify-center items-center">
              <div className="flex flex-col mt-10 w-[250px] h-[400px] lg:m-10 text-center bg-slate-700  dark:bg-slate-900  dark:rounded-md">
                <div className="w-[250px]   h-fit text-center ">
                  <div className="text-center rounded-t-[20px]">
                    <Image
                      src={abid}
                      alt=""
                      className="h-[230px] w-[100%] object-cover top-52"
                      style={{
                        clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
                      }}
                    ></Image>
                  </div>
                  <div className=" flex flex-col justify-center items-center">
                    <div className="font-sans  header  text-white text-center   text-[20px] tracking-[0.07em] ">
                      SYED SHUJAUDDIN
                    </div>

                    <p className="font-sans header text-white text-center  text-[12px]">
                      CHIEF COORDINATOR
                    </p>
                    <p className="font-sans header text-gray-300  dark:text-gray-400  mr-10 ml-10 mt-1 mb-2 text-center text-[10px]">
                      "Break boundaries, build legacies"
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 mb-3 mt-1">
                    <a
                      href="https://www.instagram.com/basith_ab1235"
                      className="text-gray-300 dark:text-gray-400 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abdul-basith-2b90ab267"
                      className="text-gray-300 dark:text-gray-400 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com/abdul_basith123"
                      className="text-gray-300 dark:text-gray-400 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-col mt-10 w-[250px] h-[400px] lg:m-10 text-center bg-slate-700  dark:bg-slate-900  dark:rounded-md">
                <div className="w-[250px]  h-fit text-center ">
                  <div className="text-center rounded-t-[20px]">
                    <Image
                      src={abid}
                      alt=""
                      className="h-[230px] w-[100%] object-cover top-52"
                      style={{
                        clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
                      }}
                    ></Image>
                  </div>
                  <div className=" flex flex-col justify-center items-center">
                    <div className="font-sans  header  text-white text-center  uppercase text-[20px] tracking-[0.07em] ">
                      AYESHA FATHIMA
                    </div>

                    <p className="font-sans header text-white text-center  text-[12px]">
                      CHIEF COORDINATOR
                    </p>
                    <p className="font-sans header text-gray-300 dark:text-gray-400   mr-10 ml-10 mt-1 mb-2 text-center text-[10px]">
                      “You are not the work you do, you are the person you are.”
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4  mt-auto">
                    <a
                      href="https://www.instagram.com/shoujaboy"
                      className="text-gray-300 dark:text-gray-400 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shuj4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      className="text-gray-300 dark:text-gray-400 hover:text-pink-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full items-center justify-center">
              {/* 3 */}
              <div className="flex flex-col mt-10 w-[250px] h-[400px] lg:m-10 text-center bg-slate-700  dark:bg-slate-900  dark:rounded-md">
                <div className="w-[250px]   h-fit text-center  ">
                  <div className="text-center rounded-t-[20px]">
                    <Image
                      src={abid}
                      alt=""
                      className="h-[230px] w-[100%] object-cover top-52"
                      style={{
                        clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
                      }}
                    ></Image>
                  </div>
                  <div className=" flex flex-col justify-center items-center">
                    <div className="font-sans  header  text-white text-center   text-[20px] tracking-[0.07em] ">
                      MOHAMMAD IRFAN
                    </div>

                    <p className="font-sans header text-white text-center  text-[12px]">
                      CHIEF INFORMATION OFFICER
                    </p>
                    <p className="font-sans header text-gray-300  dark:text-gray-400   mr-10 ml-10 mt-1 mb-2 text-center text-[10px]">
                      "I see challenges as opportunities to innovate and grow."
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4  mt-auto">
                    <a
                      href="https://www.instagram.com/__sofain__"
                      className="text-gray-300 dark:text-gray-400 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sofain-hussain-554505231/"
                      className="text-gray-300 dark:text-gray-400 hover:text-pink-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com/SofainHussain"
                      className="text-gray-300 dark:text-gray-400 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              {/* 4 */}
              <div className="flex flex-col mt-10 w-[250px] h-[400px] lg:m-10 text-center bg-slate-700  dark:bg-slate-900  dark:rounded-md">
                <div className="w-[250px]   h-fit text-center ">
                  <div className="text-center rounded-t-[20px]">
                    <Image
                      src={abid}
                      alt=""
                      className="h-[230px] w-[100%] object-cover top-52"
                      style={{
                        clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
                      }}
                    ></Image>
                  </div>
                  <div className=" flex flex-col justify-center items-center">
                    <div className="font-sans  header  text-white text-center   text-[20px] tracking-[0.07em] ">
                      MALIHA ISHAQ
                    </div>

                    <p className="font-sans header text-white text-center  text-[12px]">
                      CHIEF OPERATING OFFICER
                    </p>
                    <p className="font-sans header text-gray-300  dark:text-gray-400   mr-10 ml-10 mt-1 mb-2 text-center text-[10px]">
                      "Believe and achieve."
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 mb-3 mt-1"></div>
                </div>
              </div>
              {/* 5 */}

              {/* end */}
              <div className="flex flex-col mt-10 w-[250px] h-[400px] lg:m-10 text-center bg-slate-700  dark:bg-slate-900  dark:rounded-md">
                <div className="w-[250px]   h-fit text-center  ">
                  <div className="text-center rounded-t-[20px]">
                    <Image
                      src={abid}
                      alt=""
                      className="h-[230px] w-[100%] object-cover top-52"
                      style={{
                        clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)",
                      }}
                    ></Image>
                  </div>
                  <div className=" flex flex-col justify-center items-center">
                    <div className="font-sans  header  text-white text-center text-[20px] tracking-[0.07em] ">
                      ABID NAFI
                    </div>

                    <p className="font-sans header text-white text-center  text-[12px]">
                      CHIEF TECHNOLOGY OFFICER
                    </p>
                    <p className="font-sans header text-gray-300  dark:text-gray-400   mr-10 ml-10 mt-1 mb-2 text-center text-[10px]">
                      "Have an attitude that you can do anything, only then you
                      will go and try anything."
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4  mt-auto">
                    <a
                      href="https://www.instagram.com/_abdulbasith07._/"
                      className="text-gray-300 dark:text-gray-400 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/abdulbasith1733/"
                      className="text-gray-300 dark:text-gray-400 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon className="h-5 w-5" />
                    </a>
                  </div>
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
