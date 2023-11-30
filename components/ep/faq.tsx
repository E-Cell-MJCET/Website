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
              text="The 6-week Entrepreneurship Program is an inclusive initiative open to all students,
              meticulously designed to equip participants with essential entrepreneurial skills.
              Structured through a combination of building basics, mentorship sessions, and a focus on
              fostering innovation and creativity, we have 4 phases in this program that provide a
              comprehensive learning experience. Our commitment to hands-on learning ensures that
              participants not only gain theoretical knowledge but also acquire practical insights for
              lifelong entrepreneurial success."
            />
            <FAQBox
              header="Duration of the Course?"
              text="Embark on a transformative journey through our 4 phases—Entrepreneurship Basics,
              Technical Skills, Skill Development, and Finances. This comprehensive program ensures
              participants gain everything they need for a head start in their entrepreneurial endeavours.
              From laying the foundation with entrepreneurship basics to honing technical skills, fostering
              personal development, and mastering financial aspects, participants will acquire a well-
              rounded skill set essential for success in the entrepreneurial landscape."
            />
            <FAQBox
              header="What Will the Participants Gain from the Program?"
              text="Embark on a transformative journey through our 4 phases—Entrepreneurship Basics,
              Technical Skills, Skill Development, and Finances. This comprehensive program ensures
              participants gain everything they need for a head start in their entrepreneurial endeavours.
              From laying the foundation with entrepreneurship basics to honing technical skills, fostering
              personal development, and mastering financial aspects, participants will acquire a well-
              rounded skill set essential for success in the entrepreneurial landscape."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <FAQBox
              header="Why choose Entrepreneurship program?"
              text="Embark on a transformative journey of personal and professional growth by joining our
              entrepreneurship program. Our comprehensive curriculum is designed to equip you with a diverse
              skill set, including leadership, problem-solving, and strategic thinking. Connect with like-minded
              individuals and seasoned mentors, fostering valuable networks that can shape your entrepreneurial
              path. Access to resources, such as potential funding avenues and support services, ensures that your
              innovative ideas can flourish. Immerse yourself in an environment that not only encourages seeking
              knowledge but also nurtures an entrepreneurial mindset—essential for success in today's dynamic
              business landscape. Through this program, you'll step out of your comfort zone, overcome
              challenges, and develop the resilience needed to thrive. Join us on this exciting journey where
              personal growth, practical skills, and valuable insights converge to empower you in building a
              successful and sustainable business."
            />
            <FAQBox
              header="Is there any registration fees?"
              text="Yes it costs ₹500 to register"
            />
            <FAQBox
              header="Why 4 phases?"
              text="The foundational understanding of entrepreneurship provides the basis for acquiring technical skills,
              which in turn are crucial for innovative and efficient business practices. The development phase,
              focusing on both skillset enhancement and effective management, is directly connected to the initial
              phases, as it builds upon the knowledge gained. Additionally, the financial phase is interwoven with
              all the preceding phases, ensuring that participants have the financial acumen needed to make
              informed decisions that support the sustainability and growth of their entrepreneurial ventures.
              Together, these phases create a cohesive and interconnected framework for a well-rounded
              entrepreneurial journey."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
