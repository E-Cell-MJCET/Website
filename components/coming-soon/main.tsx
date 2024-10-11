import React from "react";

import Social from "./social";

const Main = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-neutral-950 text-center">
      <p className="animate-gradient bg-gradient-to-r from-orange-700 to-blue-500 bg-300% bg-clip-text text-4xl font-bold text-transparent md:text-5xl md:leading-relaxed">
        We are E-Cell MJCET
      </p>
      <p className="mt-5 animate-gradient bg-gradient-to-r from-orange-700 to-blue-500 bg-300% bg-clip-text text-3xl font-bold text-transparent md:text-5xl md:leading-loose">
        Great things are in the making. Stay tuned!
      </p>
      <div className="absolute bottom-10">
        <p className="mt-5 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-xl font-bold text-transparent md:text-3xl">
          Connect with us online
        </p>
        <Social />
      </div>
    </div>
  );
};

export default Main;
