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
    <div className="flex justify-center bg-black  mt-14 pt-10 pb-10 header font-light tracking-wider">
      <div className="lg:w-[72%]">
        <div className=" flex justify-between flex-col lg:flex-row">
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
                <div>
                  <PhoneInTalkIcon />
                </div>
                <Link href={"tel:+919618462926"}>
                  <div className="font-medium ml-[4px]">
                    {" "}
                    Abdul Basith :-{" "}
                    <span className="hover:underline">+91 96184 62926</span>
                  </div>
                </Link>
              </div>
              <div className="mt-2 flex  items-center">
                <div>
                  <PhoneInTalkIcon />
                </div>
                <Link href={"tel:+919515130124"}>
                  <div className="font-medium ml-[4px]">
                    {" "}
                    Shujauddin :-{" "}
                    <span className="hover:underline">+91 95151 30124</span>
                  </div>
                </Link>
                <div className="font-medium ml-[4px]"> </div>
              </div>
              <div className="mt-6 flex  items-center">
                <div>
                  <EmailIcon />
                </div>

                <div className="font-semibold ml-[4px]">
                  {" "}
                  <Link href={"mailto:documentationecell@gmail.com"}>
                    -{" "}
                    <span className="hover:underline">
                      documentationecell@gmail.com
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="break-all text-sm text-gray-400 font-semibold mt-4 mb-5 lg:mb-0">
              Beside Veg Canteen, MJCET, Mount Pleasant,
              <div></div> 8-2-249, Road No. 3, Banjara Hills, <div></div>
              Hyderabad, Telangana 500034
            </div>
          </div>
          <div>
            <div className="h-[270px] w-[350px] lg:w-[450px] bg-black overflow-hidden rounded-lg ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.3237499654497!2d78.4400578444275!3d17.4286963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9160e8ec3785%3A0x3f188f2fbbd1f4be!2sMJCET%20juice%20Center!5e0!3m2!1sen!2sin!4v1693321894208!5m2!1sen!2sin"
                className="border-none h-[270px] w-[350px] lg:w-[450px] opacity-75"
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
              <InstagramIcon className="h-14 w-14 text-white" />
            </Link>
          </div>
          <div className=" h-14 w-14 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:translate-y-[-5px] duration-500 ease-in-out">
            <Link
              passHref
              href="https://in.linkedin.com/company/e-cell-mjcet"
              target="_blank"
            >
              <LinkedInIcon className="h-14 w-14 text-white" />
            </Link>
          </div>
          <div className=" h-14 w-14 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:translate-y-[-5px] duration-500 ease-in-out">
            <Link passHref href="https://linktr.ee/ecellmjcet" target="_blank">
              <AcUnitIcon className="h-14 w-14 text-white" />
            </Link>
          </div>
          <div className=" h-14 w-14 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:translate-y-[-5px] duration-500 ease-in-out">
            <Link
              passHref
              href="https://www.facebook.com/groups/ecellmj/"
              target="_blank"
            >
              <FacebookIcon className="h-14 w-14 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
