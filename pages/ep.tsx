import FAQ from "@/components/ep/faq";
import Hero from "@/components/ep/hero";
import PhasesList from "@/components/ep/phasesList";
import React from "react";
import EPNav from "@/components/ep/epNav";
import EPFooter from "@/components/ep/epFooter";
import EPFooter2 from "@/components/ep/epFooter2";
import Brouchere from "@/components/ep/brouchere";
import su from "@/public/assets/ep/logo/su.png";
import Image from "next/image";
import Head from "next/head";

const EP = () => {
  return (
    <div>
      <Head>
        <meta name="theme-color" content="#031c35" />
      </Head>
      <body>
        <div className="bg-[#031c35]">
          <EPNav />
          <Hero />
          <Brouchere />

          <div className="relative flex overflow-x-hidden mt-10  bg-[#cd3e35]">
            <div className="py-4 animate-marquee whitespace-nowrap">
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
            </div>

            <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap ">
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
              <span className="text-3xl mx-4">Limited Seats Only!!!</span>
            </div>
          </div>

          <PhasesList />

          <FAQ />
          <div className="flex items-center justify-center">
            <Image src={su} alt={""} width={500} height={500} />
          </div>

          <EPFooter />
          <EPFooter2 />
        </div>
      </body>
    </div>
  );
};

export default EP;
