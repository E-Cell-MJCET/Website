import PageEp from "@/components/ep/pageEp";
import PageEv from "@/components/events/pageEv";
import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Nav from "@/components/nav";
import React from "react";

const EP = () => {
  return (
    <div className="bg-black">
      <Nav />
      <PageEp />
      <Footer />
      <Footers />
    </div>
  );
};

export default EP;
