"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ShootingStars } from "../ui/shootingstars";
import { StarsBackground } from "../ui/starsbackground";
import Link from "next/link";
// import {BackgroundBeams} from '../ui/background-beams'
// import {BackgroundLines} from '../ui/backgroundlines'
// import {hero} from '../ui/hero'
// import {LampContainer} from '../ui/lamp'
// import { motion } from "framer-motion";

const Hero = () => {
  //3
  useGSAP(() => {
    gsap.from("span", {
      duration: 1,
      delay: 1.1,
      opacity: 0,
      stagger: 0.08,
    });
  });
  //2
  useGSAP(() => {
    gsap.from(".demo", {
      y: 15,
      duration: 0.3,
      delay: 0.8,
    });
  });
  //1
  useGSAP(() => {
    gsap.from(".demo1", {
      y: 20,
      duration: 0.3,
      delay: 0.5,
    });
  });
  //2
  useGSAP(() => {
    gsap.from(".btn", {
      y: -60,
      duration: 0.3,
      delay: 0.8,
    });
  });

  useGSAP(() => {
    gsap.to(".one", {
      y: -10,
      duration: 0.6,
      delay: 3.1,
      opacity: 0,
    });
  });
  //4
  useGSAP(() => {
    gsap.from(".two", {
      y: 10,
      duration: 0.6,
      delay: 3.7,
      opacity: 0,
    });
  });

  return (
    <div className="flex items-center bg-black justify-center h-screen max-w-screen overflow-hidden flex-col px-4">
      <Image
        src="/icon-384x384.png"
        alt="Ecell Logo"
        width={304}
        height={304}
        className="demo1 mb-4 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 z-10 bg-clip-text"
      />

      <p className="demo text-3xl text-white z-10 sm:text-5xl font-extrabold bg-clip-text hidden sm:block font-silkscreen ">
        Entrepreneurship Cell
      </p>
      <p className="demo text-3xl text-white z-10 sm:hidden font-extrabold bg-clip-text font-silkscreen ">
        E-Cell MJCET
      </p>

      <h1
        className="z-10 text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2
    text-center sm:flex sm:flex-col text-[#F6E445] lg:flex lg:flex-row bg-clip-text gap-3 items-center justify-center sm:mt-6 font-silkscreen"
      >
        <div>
          <span>I</span>
          <span>d</span>
          <span>e</span>
          <span>a</span>
          <span>t</span>
          <span>e</span>
          <span>.</span>
        </div>
        <div>
          <span>I</span>
          <span>n</span>
          <span>n</span>
          <span>o</span>
          <span>v</span>
          <span>a</span>
          <span>t</span>
          <span>e</span>
          <span>.</span>
        </div>
        <div>
          <span>I</span>
          <span>n</span>
          <span>c</span>
          <span>u</span>
          <span>b</span>
          <span>a</span>
          <span>t</span>
          <span>e</span>
          <span>.</span>
        </div>
      </h1>
      <div className="flex flex-col sm:flex-row items-center w-96 mt-12 justify-center gap-5">
        <Link
          href={"/"}
          className="mt-12 px-4 py-3 z-10 sm:px-7 sm:py-4 bg-blue-700 text-white text-center text-sm sm:text-lg rounded font-silkscreen hover:bg-blue-600 hover:cursor-pointer w-52 h-12 flex justify-center items-center relative btn"
        >
          <div className="two absolute inset-0 flex items-center justify-center">
            Join us now
          </div>
          <div className="one absolute text-sm inset-0 flex items-center justify-center flex-nowrap">
            Become a Member
          </div>
        </Link>

        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="lg:mt-12 sm:mt-4 px-4 py-3 z-10 sm:px-7 sm:py-4 text-center text-sm sm:text-lg rounded font-silkscreen hover:cursor-pointer w-52 h-12 flex justify-center items-center relative btn border-2 border-[#F6E445]"
        >
          <p>Know more</p>
        </button>
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
};
//
export default Hero;
