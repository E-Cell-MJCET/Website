import Image from "next/image";
import React from "react";

import logo from "../../public/assets/test/goi.png";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={logo} alt="logo" height={500} width={500} />
      <div className="rounded-xl bg-slate-500 p-5 text-left">
        <h1>Game of Investors</h1>
        <p>
          Experience the thrill of investing with Ecell&apos;s &quot;Game of
          Investors&quot;. Make strategic decisions, challenge your skills and
          find out if you can outsmart the market for profit!💰🏆 <br></br>Date:
          11.7.24 <br></br>Time: 2PM to 4:30PM <br></br>Venue: Ghulam Ahmed Hall
        </p>
      </div>
    </div>
  );
};

export default Intro;
