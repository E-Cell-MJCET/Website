"use client";
import ContactBlock from "@/components/contact/contact";
import Form from "@/components/contact/form";
import Title from "@/components/contact/title";
import PageEv from "@/components/events/pageEv";
import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Nav from "@/components/nav";
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Nav />
      <Title />
      <ContactBlock />
      <Form />
      <Footer />
      <Footers />
    </div>
  );
};

export default ContactUs;
