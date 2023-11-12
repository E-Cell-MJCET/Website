import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import AddressIcon from "@mui/icons-material/LocationOn";

const ContactBlock = () => {
  return (
    <div className="flex flex-col  items-center justify-center mt-[50px]">
      <div className="flex flex-wrap justify-center  text-white items-center mt-[40px]">
        <div className="flex flex-col  justify-center items-center px-[30px] max-w-[300px] text-center">
          <PhoneInTalkIcon />
          <h1>Phone</h1>
          <p>Phone: +966570781826</p>
          <p>Phone: +91 95151 30124</p>
        </div>

        <div className="w-[2px] h-[100px] bg-red-500 hidden lg:block mt-[40px]"></div>
        <div className="flex flex-col justify-center items-center px-[30px] max-w-[300px] text-center">
          <AddressIcon />
          <h1>Address</h1>
          <p>
            Beside Veg Canteen, MJCET, Mount Pleasant,8-2-249, Road No. 3,
            Banjara Hills,Hyderabad, Telangana 500034
          </p>
        </div>
        <div className="w-[2px] h-[100px] bg-red-500 hidden lg:block mt-[40px]"></div>
        <div className="flex flex-col justify-center items-center px-[30px]   max-w-[300px] text-center">
          <EmailIcon />
          <h1>E-Mail</h1>
          <p>documentationecell@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
