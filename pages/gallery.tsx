import PageEv from "@/components/events/pageEv";
import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Gallery from "@/components/home/gallery";
import Header from "@/components/home/header";
import Nav from "@/components/nav";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="bg-black">
      <Nav />
      <Gallery />
      <Footer />
      <Footers />
    </div>
  );
};

export default GalleryPage;
