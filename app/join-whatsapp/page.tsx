"use client";
import { useRouter } from "next/navigation";
import React from "react";

const WhatsappJoin = () => {
  const router = useRouter();

  // Redirect to the whatsapp group without using UseEfect
  router.push("https://chat.whatsapp.com/ExFwuT5bq8r3iqrY5ev5Gn");

  return (
    <div className="flex h-screen w-full items-center justify-center text-4xl md:text-6xl">
      Fuel your passion!
    </div>
  );
};

export default WhatsappJoin;
