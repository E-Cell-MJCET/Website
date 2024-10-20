"use client";
import React from "react";

import Hero from "@/components/membership/Hero";
import Navbar from "@/components/membership/NavbarMem";
import { Perks } from "@/components/membership/perks";
import Story from "@/components/membership/Story/story";
import WhyMembership from "@/components/membership/why-membership";
import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Faq from "@/components/membership/Faq";

const MembershipPage = () => {
  return (
    <div className="max-w-screen overflow-hidden">
      <Navbar />
      <Hero />
      <WhyMembership />
      <Perks />
      <Story />
      <Faq />
      <Footer />
      <Footers />
    </div>
  );
};

export default MembershipPage;
