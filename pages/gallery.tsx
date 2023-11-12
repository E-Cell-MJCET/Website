import PageEv from "@/components/events/pageEv";
import Gallery from "@/components/home/gallery";
import Header from "@/components/home/header";
import Nav from "@/components/nav";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="bg-black">
      <Nav />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
