import React from "react";

const PageEp = () => {
  const back1 = "/assets/ep/background/3.png";
  return (
    <div className="w-full lg:h-screen">
      <div
        style={{ "--image-url": `url(${back1})` }}
        className="flex justify-center items-center  bg-[image:var(--image-url)] object-cover object-center w-screen h-screen"
      >
        <div className="w-[95%]">
          <div className="text-center text-[45px] text-white header mt-10 mb-14 ">
            <span className="bernoru uppercase">ENTREPRENURSHIP PROGRAM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageEp;
