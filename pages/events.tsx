import PageEv from "@/components/events/pageEv";
import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Nav from "@/components/nav";
import React from "react";

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
