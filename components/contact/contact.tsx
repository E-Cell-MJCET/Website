import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import AddressIcon from "@mui/icons-material/LocationOn";

const ContactBlock = () => {
  return (
    <div className="flex flex-col  items-center justify-center mt-[50px]">
      <div className="flex flex-wrap justify-center  text-white items-center mt-[40px] gap-5">
        <div className="flex flex-col h-52 items-start pl-5 pr-32 max-w-[300px] text-left text-black dark:text-white  rounded-2xl border-[1px] border-card-light dark:border-card-dark">
          <h1 className="text-3xl mt-5 header">Phone</h1>
          <div className="flex flex-col justify-start mt-5 mb-5 ">
            <span className="text-sm">Abdul Basith</span>
            <a href="tel:+919618462926" className="hover:underline text-lg">
              +91 96184 62926
            </a>
            <span className="text-sm mt-5">Syed Shujauddin</span>
            <a href="tel:+919515130124" className="hover:underline text-lg">
              +91 95151 30124
            </a>
          </div>
        </div>

        <div className="flex flex-col h-52 items-center pl-5 max-w-[300px] border-[1px] text-black dark:text-white border-card-light dark:border-card-dark rounded-2xl">
          <div className="flex flex-col justify-start mb-5">
            <h1 className="text-3xl mt-5 header">Address</h1>
            <p className="text-lg mt-5">
              Beside Veg Canteen, MJCET, Mount Pleasant,8-2-249, Road No. 3,
              Banjara Hills,Hyderabad, Telangana 500034
            </p>
          </div>
        </div>

        <div className="flex flex-col h-52 items-start pl-5 pr-5 border-[1px] text-black dark:text-white border-card-light dark:border-card-dark   max-w-[300px] text-center rounded-2xl">
          <h1 className="text-3xl mt-5 header">E-Mail</h1>
          <a
            href="mailto:ecellmjcet@mjcollege.ac.in"
            className="hover:underline text-[22px] mt-5"
          >
            ecellmjcet@mjcollege.ac.in
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
