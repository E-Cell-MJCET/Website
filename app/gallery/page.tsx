"use client";
import React from "react";

import MainGallery from "@/components/gallery/mainGallery";
import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Nav from "@/components/nav";

const GalleryPage = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Nav />
      <MainGallery />
      <Footer />
      <Footers />
    </div>
  );
};

export default GalleryPage;
