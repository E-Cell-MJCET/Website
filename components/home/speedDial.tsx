"use client";
import Email from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
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
      className="group fixed bottom-6 end-6 z-50 block md:hidden"
    >
      <div
        id="speed-dial-menu-bottom-right"
        className={`mb-4 flex flex-col items-center space-y-2 ${
          isMenuVisible ? "visible" : "invisible"
        }`}
      >
        <a
          type="button"
          href="https://www.instagram.com/ecellmjcet/"
          data-tooltip-target="tooltip-print"
          data-tooltip-placement="left"
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400"
        >
          <Instagram />
          <span className="sr-only">Instagram</span>
        </a>
        <div
          id="tooltip-print"
          role="tooltip"
          className="invisible absolute z-10 inline-block w-auto rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        >
          Instagram
          <div data-popper-arrow></div>
        </div>
        <a
          type="button"
          href="https://wa.link/6o7xq3"
          data-tooltip-target="tooltip-download"
          data-tooltip-placement="left"
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400"
        >
          <WhatsApp />
          <span className="sr-only">Whatsapp</span>
        </a>
        <div
          id="tooltip-download"
          role="tooltip"
          className=" invisible absolute z-10 inline-block w-auto rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        >
          Whatsapp
          <div data-popper-arrow></div>
        </div>
        <a
          type="button"
          href="mailto:ecellmjcet@mjcollege.ac.in"
          data-tooltip-target="tooltip-copy"
          data-tooltip-placement="left"
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400"
        >
          <Email />
          <span className="sr-only">Email</span>
        </a>
        <div
          id="tooltip-copy"
          role="tooltip"
          className=" invisible absolute z-10 inline-block w-auto rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        >
          Email
          <div data-popper-arrow></div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleClick}
        data-dial-toggle="speed-dial-menu-bottom-right"
        aria-controls="speed-dial-menu-bottom-right"
        aria-expanded="false"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff403c] text-white "
      >
        <svg
          className={`h-5 w-5 transition-transform ${
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
