import React from "react";

const About = () => {
  return (
    <div className="flex justify-center lg:mt-24 z-10 text-white">
      <div className="w-[97%] lg:w-[70%] ">
        <div className="flex justify-center items-center relative">
          <div className="flex flex-col items-center ">
            {/* <div className='h-[3px] w-[300px] bg-pink-600 rounded-lg mb-[2px]'></div> */}
            <div className="h-[3px] w-[290px] bg-[#c23c83] rounded-lg my-[2px]"></div>
            <div className="h-[3px] w-[350px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
          </div>

          <div className="text-center poiret text-[30px] font-bold opacity-100 z-30 bg-black px-3 absolute">
            About Our Club
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mt-10 lg:w-[70%] text-gray-500 header text-sm">
            <div>
              Welcome to Ecell MJCET, your gateway to the world of
              entrepreneurship! We are a dynamic student club at Muffakham Jah
              College of Engineering and Technology dedicated to fostering
              innovation, creativity, and business acumen. Our mission is to
              ideate groundbreaking ideas, innovate solutions, and incubate
              startups that have the potential to change the world....
            </div>
          </div>
          <div className="w-[80%]  h-auto aspect-video bg-black mt-10 overflow-hidden hover:cursor-progress  hidden lg:block">
            <video
              autoPlay
              className="object-cover opacity-50 hover:opacity-100 "
              loop
              muted
              src="../../assets/aboutus.webm"
            />
            <video
              autoPlay
              className="object-cover opacity-50 hover:opacity-100 lg:hidden block"
              loop
              muted
              playsInline
              src="../../assets/ecell.mp4"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
