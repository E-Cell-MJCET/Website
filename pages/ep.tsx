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

const EP = () => {
  return (
    <div className="bg-black">
      <EPNav />
      <Hero />
      <ShiftingCountdown />
      <PhasesList />
      <FAQ />
      <EPFooter />
      <EPFooter2 />
    </div>
  );
};

export default EP;
