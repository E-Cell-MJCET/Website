"use client";
import MainGallery from "@/components/gallery/mainGallery";
import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Nav from "@/components/nav";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="dark:bg-back-dark bg-back-light">
      <Nav />
      <MainGallery />
      <Footer />
      <Footers />
    </div>
  );
};

export default GalleryPage;
