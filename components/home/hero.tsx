"use client";
import React from "react";
import { HeroParallax } from "../ui/herocomp";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/assets/gallery/5.webp",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/assets/gallery/3.webp",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/assets/gallery/4.webp",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/assets/gallery/1.webp",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/assets/gallery/7.webp",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/assets/gallery/8.webp",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/assets/gallery/13.webp",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/assets/gallery/18.webp",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/assets/gallery/21.webp",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/assets/gallery/22.webp",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/assets/gallery/23.webp",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/assets/gallery/24.webp",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/assets/gallery/25.webp",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/assets/gallery/19.webp",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/assets/gallery/11.webp",
  },
];
