import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center text-center">
      <p className="text-4xl md:text-5xl md:leading-relaxed font-bold bg-gradient-to-r from-orange-700 to-blue-500 text-transparent bg-clip-text bg-300% animate-gradient">
        We are E-Cell MJCET
      </p>
      <p className="text-3xl mt-5 md:text-5xl leading-normal font-bold bg-gradient-to-r from-orange-700 to-blue-500 text-transparent bg-clip-text bg-300% animate-gradient">
        Great things are in the making. Stay tuned!
      </p>
    </div>
  );
};

export default Main;
