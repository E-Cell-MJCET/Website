import ContactBlock from "@/components/contact/contact";
import Form from "@/components/contact/form";
import Title from "@/components/contact/title";
import PageEv from "@/components/events/pageEv";
import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Gallery from "@/components/home/gallery";
import Header from "@/components/home/header";
import Navbar from "@/components/home/navbar";
import Nav from "@/components/nav";
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-back-light dark:bg-back-dark">
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
