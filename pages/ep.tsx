import FAQ from "@/components/ep/faq";
import Hero from "@/components/ep/hero";
import PageEp from "@/components/ep/pageEp";
import PhasesList from "@/components/ep/phasesList";
import PageEv from "@/components/events/pageEv";
import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Nav from "@/components/nav";
import React from "react";
import ParticleRing from '@/components/ep/epbackground';

const EP = () => {
  return (
    <div className="bg-black">
      <PageEp />
      <Hero />
      <ParticleRing />
      <PhasesList />
      <FAQ />
      <Footer />
      <Footers />
    </div>
  );
};

export default EP;
