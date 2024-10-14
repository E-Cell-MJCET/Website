"use client";
import React from "react";

import PageEv from "@/components/events/pageEv";
import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Nav from "@/components/nav";

const Events = () => {
  return (
    <div className="bg-black">
      <Nav />
      <PageEv />
      <Footer />
      <Footers />
    </div>
  );
};

export default Events;
