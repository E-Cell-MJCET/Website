import PageEv from "@/components/events/pageEv";
import GalleryTwo from "@/components/gallery/gallaryTwo";
import GalleryOne from "@/components/gallery/galleryOne";
import Gallery1 from "@/components/gallery/galleryOne";
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
      <GalleryOne />
      <GalleryTwo />
      <Footer />
      <Footers />
    </div>
  );
};

export default GalleryPage;
