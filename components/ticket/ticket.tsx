import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

import logo from "../../public/assets/Logo/logo-big-colour.png";
import cover from "../../public/assets/test/image.png";
import qr from "../../public/assets/test/qrcode.png";

const Ticket = () => {
  return (
    <div className="shadow-ticket flex h-fit w-[300px] flex-col bg-white">
      <div id="Photo h-[250px]">
        <div className=" relative w-fit bg-cover bg-center">
          <Image src={cover} alt="cover" />
        </div>
      </div>
      <div
        id="MainContent"
        className="flex flex-col items-center justify-between border-b-2 border-dashed px-5"
      >
        <div
          id="date"
          className="font-staatliches mt-4 flex w-full flex-row items-center justify-between border-y border-gray-900 py-1 font-bold text-black"
        >
          <p>SATURDAY</p>
          <p className="text-xl text-blue-500">APRIL 27th</p>
          <p>2024</p>
        </div>
        <div
          id="show-name"
          className="flex w-full flex-col items-center justify-center gap-3"
        >
          <Image
            src={logo}
            alt="logo"
            height={100}
            width={100}
            className="mt-5"
          />
          <h1 className="font-staatliches text-center text-4xl text-blue-500">
            IPL Auctions
          </h1>
        </div>
        <div
          id="time"
          className="font-staatliches flex w-full flex-row items-center justify-evenly text-xl text-red-500"
        >
          <p>
            2:00 PM <span>TO</span> 5:00 PM
          </p>
        </div>
        <div
          id="location"
          className="font-staatliches my-3 flex flex-row items-center justify-center gap-5 text-black"
        >
          <p>Civil Seminar Hall Block 4</p>
          <FaLocationDot />
          <p>MJCET</p>
        </div>
      </div>
      <div
        id="ticket"
        className="mt-5 flex flex-col items-center justify-evenly"
      >
        <div id="qrcode" className="flex flex-col items-center ">
          <Image src={qr} alt="QR code" width={75} height={75} />
          <p className="mt-3 text-black">#20030220</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
