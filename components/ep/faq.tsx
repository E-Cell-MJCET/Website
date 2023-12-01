import React, { useState } from "react";
import FAQBox from "./faqBox";

const FAQ = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-[#031c35] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] px-[20px] lg:mx-0">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6"></p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <FAQBox
              header="What is Entrepreneurship program?"
              text="The Entrepreneurship Program is a comprehensive educational initiative that equips individuals with the skills, knowledge, and resources needed to navigate and succeed in the entrepreneurial landscape."
            />
            <FAQBox
              header="Duration of the Course?"
              text="The course duration is 6 weeks, with sessions held every Friday and Saturday."
            />
            <FAQBox
              header="What Will the Participants Gain from the Program?"
              text="Choose the Entrepreneurship Program to gain comprehensive entrepreneurial skills, collaborate in a student-led initiative, and prepare yourself for success in the dynamic world of business."
            />
            <FAQBox
              header="When does the Entrepreneurship Program commence?"
              text="The Entrepreneurship Program is scheduled to commence in the last week of December."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <FAQBox
              header="Why choose Entrepreneurship program?"
              text="Choose the Entrepreneurship Program to gain comprehensive entrepreneurial skills, collaborate in a student-led initiative, and prepare yourself for success in the dynamic world of business."
            />
            <FAQBox
              header="Is there any registration fees?"
              text="Yes, there is a registration fee of ₹500 for the Entrepreneurship Program."
            />
            <FAQBox
              header="Why 4 phases?"
              text="The four phases are designed to cover different aspects of entrepreneurship, helping participants gradually build their skills from basics to advanced topics. This structure ensures a well-rounded learning experience for a successful entrepreneurial journey."
            />
            <FAQBox
              header="Where is the Entreprenurship Program being held?"
              text="The Entrepreneurship Program is being held in the facilities of Muffakham Jah College of Engineering and Technology."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
