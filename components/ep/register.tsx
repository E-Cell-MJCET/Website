import React, { useState } from "react";
import FAQBox from "./faqBox";

const Register = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-[#031c35] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] px-[20px] lg:mx-0">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Register Now!
              </h2>
              <button className="poppins inline-flex text-white bg-[#cd3e35] border-0 py-2 px-6 focus:outline-none hover:bg-[#4a1c40] rounded text-lg">
                Register now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
