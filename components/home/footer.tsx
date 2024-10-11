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
              <p className="mt-4">Student Co-Ordinators Contact</p>
              <div className="mt-2 flex  items-center">
                <div className="text-black dark:text-white">
                  <PhoneInTalkIcon />
                </div>
                <Link href={"tel:+919515130124"}>
                  <div className="ml-[4px] font-medium text-black dark:text-white">
                    {" "}
                    Shujauddin :-{" "}
                    <span className="text-black hover:underline dark:text-white">
                      +91 95151 30124
                    </span>
                  </div>
                </Link>
                <div className="ml-[4px] font-medium"> </div>
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
            <div className="h-[270px] w-[350px] overflow-hidden rounded-lg bg-black lg:w-[450px] ">
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
