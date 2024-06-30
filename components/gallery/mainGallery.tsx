import React from "react";
import { ParallaxScroll } from "../ui/parallax-scroll";

const MainGallery = () => {
  const images = [
    "/assets/gallery/1.webp",
    "/assets/gallery/2.webp",
    "/assets/gallery/3.webp",
    "/assets/gallery/4.webp",
    "/assets/gallery/5.webp",
    "/assets/gallery/6.webp",
    "/assets/gallery/7.webp",
    "/assets/gallery/8.webp",
    "/assets/gallery/9.webp",
    "/assets/gallery/10.webp",
    "/assets/gallery/11.webp",
    "/assets/gallery/12.webp",
    "/assets/gallery/13.webp",
    "/assets/gallery/14.webp",
    "/assets/gallery/15.webp",
    "/assets/gallery/16.webp",
    "/assets/gallery/17.webp",
    "/assets/gallery/18.webp",
    "/assets/gallery/19.webp",
    "/assets/gallery/20.webp",
    "/assets/gallery/21.webp",
    "/assets/gallery/22.webp",
    "/assets/gallery/23.webp",
    "/assets/gallery/24.webp",
    "/assets/gallery/25.webp",
    "/assets/gallery/26.webp",
  ];

  return <ParallaxScroll images={images} />;
};

export default MainGallery;
