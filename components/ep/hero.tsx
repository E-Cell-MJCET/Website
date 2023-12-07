import Image from "next/image";
import React from "react";

const Hero = () => {
  const eplogo = "/assets/ep/logo/2.png";
  return (
    <section className="bg-[#031c35] text-gray-600 body-font lg:mt-[100px]">
      <div className="container lg:w-[80%] mx-auto flex px-5 py-8 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font bernoru sm:text-4xl text-3xl mb-4 font-medium text-white">
            Entrepreneurship Program
          </h1>
          <p className="mb-8 poppins text-white leading-relaxed opacity-80">
            The 6-week Entrepreneurship Program is an inclusive initiative open
            to all students, meticulously designed to equip participants with
            essential entrepreneurial skills. Structured through a combination
            of building basics, mentorship sessions, and a focus on fostering
            innovation and creativity. Our commitment to hands-on learning
            ensures that participants not only gain theoretical knowledge but
            also acquire practical insights for lifelong entrepreneurial
            success.
          </p>
          <div className="flex justify-center">
            <a
              className="poppins inline-flex text-white bg-[#cd3e35] border-0 py-2 px-6 focus:outline-none hover:bg-[#4a1c40] rounded text-lg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSffsIGuk7dUvJh1csB68We46L4zWQjUcRUAQGf8dzDNYWq4Tg/viewform"
              target="_blank"
            >
              Register now
            </a>
          </div>
          <div className="mb-8 poppins text-white leading-relaxed mt-4">
            The Sessions are conducted only on Fridays and Saturdays
          </div>
        </div>
        <div className=" lg:w-[40%] md:w-1/2  mb-10 lg:mb-0">
          <img className="object-cover object-center" alt="hero" src={eplogo} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
