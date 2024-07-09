import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import Image, { StaticImageData } from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export interface CardProps {
  username: string;
  dp: any;
  position: string;
  instalink: string;
  insta: boolean;
  head: boolean;
  linkedlinlink: string;
  linkedln: boolean;
  twitterlink: string;
  twitter: boolean;
}

const HoverExecom: React.FC<CardProps> = ({
  username,
  dp,
  position,
  instalink,
  linkedlinlink,
  twitterlink,
  head,
  insta,
  linkedln,
  twitter,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-80 w-60 rounded-xl ${
        head ? "bg-[#6b28d5]" : "bg-[#c23c83]"
      } m-5`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-1 flex flex-col items-center rounded-xl bg-[#1b1b1b] shadow-lg"
      >
        <div className="flex items-center justify-center w-[93px] h-[93px] mt-[25px] rounded-full bg-gradient-to-r from-[#c23c83]  to-[#6b28d5] ">
          <Image
            className="w-[90px] h-[90px]  object-cover rounded-full"
            src={dp}
            width={80}
            height={80}
            alt={""}
          ></Image>
        </div>

        <h1 className="mt-[20px] text-[20px] text-white text-center px-[25px] md:px-[35px] font-medium header">
          {username}
        </h1>

        {head ? (
          <div className="rounded-md bg-[#6b28d5] text-white text-[12px] mb-[25px] mt-[12px] px-[7px] py-[2px]">
            Head
          </div>
        ) : (
          <div className="rounded-md bg-[#c23c83] text-white text-[12px] mb-[25px] mt-[12px] px-[7px] py-[2px]">
            Core
          </div>
        )}

        <div className="flex justify-center  mb-3 mt-auto">
          {insta ? (
            <a
              href={instalink}
              className="text-gray-500 hover:text-blue-500 mx-[6px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-7 w-7" />
            </a>
          ) : (
            <span></span>
          )}

          {linkedln ? (
            <a
              href={linkedlinlink}
              className="text-gray-500 hover:text-pink-600 mx-[6px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="h-7 w-7" />
            </a>
          ) : (
            <span></span>
          )}

          {twitter ? (
            <a
              href={twitterlink}
              className="text-gray-500 hover:text-blue-500 mx-[6px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="h-7 w-7" />
            </a>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default HoverExecom;
