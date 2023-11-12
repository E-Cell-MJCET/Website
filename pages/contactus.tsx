import ContactBlock from "@/components/contact/contact";
import Title from "@/components/contact/title";
import PageEv from "@/components/events/pageEv";
import Footer from "@/components/home/footer";
import Gallery from "@/components/home/gallery";
import Header from "@/components/home/header";
import Navbar from "@/components/home/navbar";
import Nav from "@/components/nav";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <Nav />
      <Title />
      <ContactBlock />
      <Footer />
    </div>
  );
};

export default ContactUs;