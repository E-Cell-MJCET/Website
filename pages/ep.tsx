import FAQ from "@/components/ep/faq";
import Hero from "@/components/ep/hero";
import PageEp from "@/components/ep/pageEp";
import PhasesList from "@/components/ep/phasesList";
import PageEv from "@/components/events/pageEv";
import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Nav from "@/components/nav";
import React from "react";
import ParticleRing from "@/components/ep/epbackground";
import ShiftingCountdown from "@/components/ep/countdown";
import EPNav from "@/components/ep/epNav";
import EPFooter from "@/components/ep/epFooter";
import EPFooter2 from "@/components/ep/epFooter2";
import Register from "@/components/ep/register";
import Brouchere from "@/components/ep/brouchere";
import su from "@/public/assets/ep/logo/su.png";
import Image from "next/image";

const EP = () => {

  
  return (
    <div className="bg-[#031c35]">
      <EPNav />
      <Hero />
      <Brouchere />
      <ShiftingCountdown />
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
  );
};

export default EP;
