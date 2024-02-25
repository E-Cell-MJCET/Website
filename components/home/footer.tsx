import Image from "next/image";
import React from "react";
import elwt from "../../public/assets/elwt.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="flex justify-center bg-back-light dark:bg-back-dark  mt-14 pt-10 pb-10 header font-light tracking-wider">
      <div className="lg:w-[72%]">
        <div className=" flex justify-between text-white flex-col lg:flex-row">
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
              <div className="mt-4 flex  items-center">
                <div className="text-black dark:text-white">
                  <PhoneInTalkIcon />
                </div>
                <Link href={"tel:+919618462926"}>
                  <div className="font-medium ml-[4px] text-black dark:text-white">
                    {" "}
                    Abdul Basith :-{" "}
                    <span className="hover:underline text-black dark:text-white">
                      +91 96184 62926
                    </span>
                  </div>
                </Link>
              </div>
              <div className="mt-2 flex  items-center">
                <div className="text-black dark:text-white">
                  <PhoneInTalkIcon />
                </div>
                <Link href={"tel:+919515130124"}>
                  <div className="font-medium ml-[4px] text-black dark:text-white">
                    {" "}
                    Shujauddin :-{" "}
                    <span className="hover:underline text-black dark:text-white">
                      +91 95151 30124
                    </span>
                  </div>
                </Link>
                <div className="font-medium ml-[4px]"> </div>
              </div>
              <div className="mt-6 flex  items-center">
                <div className="text-black dark:text-white">
                  <EmailIcon />
                </div>

                <div className="font-semibold ml-[4px] text-black dark:text-white">
                  {" "}
                  <Link href={"mailto:ecellmjcet@mjcollege.ac.in"}>
                    -{" "}
                    <span className="hover:underline text-black dark:text-white">
                    ecellmjcet@mjcollege.ac.in
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="break-all text-sm text-gray-700 dark:text-gray-400 font-semibold mt-4 mb-5 lg:mb-0">
              Beside Veg Canteen, MJCET, Mount Pleasant,
              <div></div> 8-2-249, Road No. 3, Banjara Hills, <div></div>
              Hyderabad, Telangana 500034
            </div>
          </div>
          <div>
            <div className="h-[270px] w-[350px] lg:w-[450px] overflow-hidden bg-black rounded-lg ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15226.609263238766!2d78.442398!3d17.4284654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9181ad8c26f1%3A0x6c397f5fd4f4c585!2sECELL%20MJCET!5e0!3m2!1sen!2sin!4v1701412482039!5m2!1sen!2sin"
                className="border-none h-[270px] w-[350px] lg:w-[450px] dark:opacity-75"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="text-center flex justify-center items-center mt-10">
          <div className=" h-14 w-14 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:translate-y-[-5px] duration-500 ease-in-out">
            <Link
              passHref
              href="https://instagram.com/ecellmjcet?igshid=NjIwNzIyMDk2Mg=="
              target="_blank"
            >
              <InstagramIcon className="h-14 w-14 text-black dark:text-white" />
            </Link>
          </div>
          <div className=" h-14 w-14 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:translate-y-[-5px] duration-500 ease-in-out">
            <Link
              passHref
              href="https://in.linkedin.com/company/e-cell-mjcet"
              target="_blank"
            >
              <LinkedInIcon className="h-14 w-14 text-black dark:text-white" />
            </Link>
          </div>
          <div className=" h-14 w-14 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:translate-y-[-5px] duration-500 ease-in-out">
            <Link passHref href="https://linktr.ee/ecellmjcet" target="_blank">
              <AcUnitIcon className="h-14 w-14 text-black dark:text-white" />
            </Link>
          </div>
          <div className=" h-14 w-14 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:translate-y-[-5px] duration-500 ease-in-out">
            <Link
              passHref
              href="https://www.facebook.com/groups/ecellmj/"
              target="_blank"
            >
              <FacebookIcon className="h-14 w-14 text-black dark:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
