import Email from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
import PhoneInTalk from "@mui/icons-material/PhoneInTalk";
import WhatsApp from "@mui/icons-material/WhatsApp";
import React, { useState } from "react";

const SpeedDial = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div
      data-dial-init
      className="fixed end-6 bottom-6 group z-50 block md:hidden"
    >
      <div
        id="speed-dial-menu-bottom-right"
        className={`flex flex-col items-center mb-4 space-y-2 ${
          isMenuVisible ? "visible" : "invisible"
        }`}
      >
        <a
          type="button"
          href="https://www.instagram.com/ecellmjcet/"
          data-tooltip-target="tooltip-print"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <Instagram />
          <span className="sr-only">Instagram</span>
        </a>
        <div
          id="tooltip-print"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Instagram
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          type="button"
          href="https://wa.link/6o7xq3"
          data-tooltip-target="tooltip-download"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <WhatsApp />
          <span className="sr-only">Whatsapp</span>
        </a>
        <div
          id="tooltip-download"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Whatsapp
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          type="button"
          href="mailto:ecellmjcet@mjcollege.ac.in"
          data-tooltip-target="tooltip-copy"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <Email />
          <span className="sr-only">Email</span>
        </a>
        <div
          id="tooltip-copy"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Email
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleClick}
        data-dial-toggle="speed-dial-menu-bottom-right"
        aria-controls="speed-dial-menu-bottom-right"
        aria-expanded="false"
        className="flex items-center justify-center text-white bg-[#ff403c] rounded-full w-14 h-14 "
      >
        <svg
          className={`w-5 h-5 transition-transform ${
            isMenuVisible ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default SpeedDial;
