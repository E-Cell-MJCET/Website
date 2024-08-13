"use client";
import Ticket from "@/components/ticket/ticket";
import html2canvas from "html2canvas";
import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";

const TicketPage = () => {
  const ticketRef = useRef(null);

  const handleDownload = async () => {
    if (ticketRef.current) {
      const canvas = await html2canvas(ticketRef.current);
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");

      link.href = dataUrl;
      link.download = "ticket.png";
      link.click();
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-500">
      {/* <div className="h-[250px] mx-auto flex bg-white shadow-lg max-w-4xl">
        <div className="left flex">
          <div
            className="image h-[250px] w-[250px] bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://media.pitchfork.com/photos/60db53e71dfc7ddc9f5086f9/1:1/w_1656,h_1656,c_limit/Olivia-Rodrigo-Sour-Prom.jpg')",
            }}
          >
            <p className="absolute text-dark-gray flex h-full w-full items-start justify-center -rotate-90 text-sm text-center">
              <span className="text-gray-500">ADMIT ONE</span>
              <span className="text-white font-bold">ADMIT ONE</span>
              <span className="text-gray-500">ADMIT ONE</span>
            </p>
            <div className=" flex items-end justify-end h-full w-full p-1">
              <p>#20030220</p>
            </div>
          </div>
          <div className="p-4 text-center flex flex-col items-center justify-between">
            <p className=" border-t border-b border-gray-300 py-1 font-bold flex items-center justify-around">
              <span className=" text-left text-black">TUESDAY</span>
              <span className=" text-center text-[#d83565] text-xl">
                JUNE 29TH
              </span>
              <span className=" text-right text-black">2021</span>
            </p>
            <div className="show-name text-2xl text-[#d83565] font-[Nanum Pen Script]">
              <h1 className="text-4xl font-bold text-[#4a437e]">SOUR Prom</h1>
              <h2 className="text-[#d83565]">Olivia Rodrigo</h2>
            </div>
            <div className="time text-[#4a437e] font-bold py-2 flex flex-col gap-2">
              <p>
                8:00 PM <span className="text-gray-400">TO</span> 11:00 PM
              </p>
              <p>
                DOORS <span className="text-gray-400">@</span> 7:00 PM
              </p>
            </div>
            <p className="flex justify-around items-center w-full pt-2 border-t border-gray-300">
              <span className="text-black">East High School</span>
              <span className="text-2xl">
                <i className="far fa-smile"></i>
              </span>
              <span className="text-black">Salt Lake City, Utah</span>
            </p>
          </div>
        </div>
        <div className="right w-[180px] border-l border-dashed border-gray-600">
          <p className="absolute text-dark-gray flex h-[250px] items-start justify-center text-sm -rotate-90 text-center writing-mode-vertical-rl">
            <span className="text-gray-500">ADMIT ONE</span>
            <span className="text-gray-400">ADMIT ONE</span>
            <span className="text-gray-500">ADMIT ONE</span>
          </p>
          <div className="right-info-container h-[250px] p-2 pl-8 flex flex-col items-center justify-between">
            <div className="show-name text-xl font-[Nanum Pen Script]">
              <h1 className="text-2xl">SOUR Prom</h1>
            </div>
            <div className="time text-[#4a437e] font-bold py-2 flex flex-col gap-2 text-sm">
              <p>
                8:00 PM <span className="text-gray-400">TO</span> 11:00 PM
              </p>
              <p>
                DOORS <span className="text-gray-400">@</span> 7:00 PM
              </p>
            </div>
            <div className="h-[100px]">
              <Image
                src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb"
                alt="QR code"
                width={100}
                height={100}
              />
            </div>
            <p className="ticket-number text-gray-400">#20030220</p>
          </div>
        </div>
      </div> */}
      <div ref={ticketRef}>
        <Ticket />
      </div>

      <Button
        variant={"outline"}
        size="sm"
        className="mt-5"
        onClick={handleDownload}
      >
        Download Ticket
      </Button>
    </div>
  );
};

export default TicketPage;
