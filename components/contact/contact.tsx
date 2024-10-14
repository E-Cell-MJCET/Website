import React from "react";

const ContactBlock = () => {
  return (
    <div className="mt-[50px] flex  flex-col items-center justify-center">
      <div className="mt-[40px] flex flex-wrap  items-center justify-center gap-5 text-white">
        <div className="flex h-52 max-w-[320px] flex-col items-start rounded-2xl border border-card-light pl-5 pr-32  text-left text-black dark:border-card-dark dark:text-white">
          <h1 className="mt-5 text-3xl">Phone</h1>
          <div className="my-5 flex flex-col justify-start ">
            <span className="mt-5 text-xl">Syed Shujauddin</span>
            <a href="tel:+919515130124" className="text-xl hover:underline">
              +91 95151 30124
            </a>
          </div>
        </div>
        <div className="flex h-52 max-w-[320px] flex-col items-center rounded-2xl border border-card-light pl-5 text-black dark:border-card-dark dark:text-white">
          <div className="mb-5 flex flex-col justify-start">
            <h1 className="mt-5 text-3xl">Address</h1>
            <p className="mt-5 text-lg">
              Beside Veg Canteen, MJCET, Mount Pleasant,8-2-249, Road No. 3,
              Banjara Hills,Hyderabad, Telangana 500034
            </p>
          </div>
        </div>
        <div className="flex h-52 w-fit flex-col items-start rounded-2xl border border-card-light px-5 text-center text-black   dark:border-card-dark dark:text-white">
          <h1 className="mt-5 text-3xl">E-Mail</h1>
          <a
            href="mailto:ecellmjcet@mjcollege.ac.in"
            className="mt-5 text-[22px] hover:underline"
          >
            ecellmjcet@mjcollege.ac.in
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
