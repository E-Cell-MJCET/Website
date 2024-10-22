"use client";
import Image from "next/image";
import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Link from "next/link";

import elwt from "../../public/assets/Logo/logo-big-colour.png";

const Footer = () => {
  return (
    <div className="mt-14 flex justify-center  bg-white py-10 font-light tracking-wider dark:bg-black">
      <div className="lg:w-[72%]">
        <div className=" flex flex-col justify-between text-white lg:flex-row">
          <div className="">
            <div>
              <Image
                src={elwt}
                alt=""
                className="h-[64px] w-[130px] "
                height={200}
                width={500}
              />
            </div>
            <div>
              <p className="mt-4 text-black dark:text-white">
                Student Coordinators Contact
              </p>
              {/* start */}
              <div className="mt-4 flex flex-col flex-wrap">
                {[
                  {
                    name: "Faiz Ali",
                    role: "Relations and Outreach",
                    phone: "+91 91825 71088",
                  },
                  {
                    name: "Mohammad Irfan",
                    role: "CIO",
                    phone: " +91 89191 63391",
                  },
                ].map((contact,index) => (
                  <Link
                    href={`tel:${contact.phone}`}
                    key={index}
                    className="m-2 flex items-center rounded-3xl bg-blue-700 px-3 py-1 text-white shadow-lg hover:bg-blue-500 "
                  >
                    <PhoneInTalkIcon />
                    <div className="ml-2">
                      <div className="font-bold">{contact.name}</div>
                      <p className="text-sm">{contact.role}</p>
                      <div className="text-white underline">
                        {contact.phone}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex  items-center">
                <div className="text-black dark:text-white">
                  <EmailIcon />
                </div>
                <div className="ml-[4px] font-semibold text-black dark:text-white">
                  {" "}
                  <Link href={"mailto:ecellmjcet@mjcollege.ac.in"}>
                    -{" "}
                    <span className="hover:underline">
                      ecellmjcet@mjcollege.ac.in
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mb-5 mt-4 break-all text-sm font-semibold text-gray-700 dark:text-gray-400 lg:mb-0">
              Beside Veg Canteen, MJCET, Mount Pleasant,
              <div></div> 8-2-249, Road No. 3, Banjara Hills, <div></div>
              Hyderabad, Telangana 500034
            </div>
          </div>
          <div>
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg  lg:w-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15226.609263238766!2d78.442398!3d17.4284654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9181ad8c26f1%3A0x6c397f5fd4f4c585!2sECELL%20MJCET!5e0!3m2!1sen!2sin!4v1701412482039!5m2!1sen!2sin"
                className="h-[270px] w-[350px] border-none dark:opacity-75 lg:w-[450px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-10 text-center">
          <div className="  flex cursor-pointer items-center justify-center rounded-full transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
            <Link
              passHref
              href="https://instagram.com/ecellmjcet?igshid=NjIwNzIyMDk2Mg=="
              target="_blank"
            >
              <InstagramIcon className="h-9 w-9 text-black dark:text-white" />
            </Link>
          </div>
          <div className="  flex cursor-pointer items-center justify-center rounded-full transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
            <Link
              passHref
              href="https://in.linkedin.com/company/e-cell-mjcet"
              target="_blank"
            >
              <LinkedInIcon className="h-9 w-9 text-black dark:text-white" />
            </Link>
          </div>
          <div className="  flex cursor-pointer items-center justify-center rounded-full transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
            <Link passHref href="https://linktr.ee/ecellmjcet" target="_blank">
              <AcUnitIcon className="h-9 w-9 text-black dark:text-white" />
            </Link>
          </div>
          <div className="  flex cursor-pointer items-center justify-center rounded-full transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
            <Link
              passHref
              href="https://www.facebook.com/groups/ecellmj/"
              target="_blank"
            >
              <FacebookIcon className="h-9 w-9 text-black dark:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
