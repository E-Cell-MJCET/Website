"use client";
import React from "react";

import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Nav from "@/components/nav";
import GB from "@/components/team/gb";

const Team = () => {
  return (
    <div className="w-full bg-white dark:bg-black">
      <Nav />
      <GB />
      <Footer />
      <Footers />
    </div>
  );
};

export default Team;
