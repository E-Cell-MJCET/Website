import React from "react";
import Social from "./social";

const Main = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center text-center bg-neutral-950">
      <p className="text-4xl md:text-5xl md:leading-relaxed font-bold bg-gradient-to-r from-orange-700 to-blue-500 text-transparent bg-clip-text bg-300% animate-gradient">
        We are E-Cell MJCET
      </p>
      <p className="text-3xl mt-5 md:text-5xl md:leading-loose font-bold bg-gradient-to-r from-orange-700 to-blue-500 text-transparent bg-clip-text bg-300% animate-gradient">
        Great things are in the making. Stay tuned!
      </p>
      <div className="absolute bottom-10">
        <p className="text-xl mt-5 md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Connect with us online
        </p>
        <Social />
      </div>
    </div>
  );
};

export default Main;
