import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../public/assets/Logo/logo-big-colour.png";
import cover from "../../public/assets/test/image.png";
import qr from "../../public/assets/test/qrcode.png";
import Image from "next/image";

const Ticket = () => {
  return (
    <div className="flex flex-col h-fit shadow-ticket bg-white w-[300px]">
      <div id="Photo h-[250px]">
        <div className=" w-fit bg-cover bg-center relative">
          <Image src={cover} alt="cover" />
        </div>
      </div>
      <div
        id="MainContent"
        className="flex flex-col items-center justify-between px-5 border-b-2 border-dashed"
      >
        <div
          id="date"
          className="w-full flex flex-row items-center justify-between font-staatliches text-black border-t border-b border-gray-900 mt-4 font-bold py-1"
        >
          <p>SATURDAY</p>
          <p className="text-blue-500 text-xl">APRIL 27th</p>
          <p>2024</p>
        </div>
        <div
          id="show-name"
          className="w-full flex flex-col items-center justify-center gap-3"
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
          className="w-full flex flex-row items-center justify-evenly font-staatliches text-red-500 text-xl"
        >
          <p>
            2:00 PM <span>TO</span> 5:00 PM
          </p>
        </div>
        <div
          id="location"
          className="flex flex-row items-center justify-center gap-5 font-staatliches text-black mb-3 mt-3"
        >
          <p>Civil Seminar Hall Block 4</p>
          <FaLocationDot />
          <p>MJCET</p>
        </div>
      </div>
      <div
        id="ticket"
        className="flex flex-col items-center justify-evenly mt-5"
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
