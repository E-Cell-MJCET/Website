import BYOBTitle from "@/components/byob/byobTitle";
import BYOBForm from "@/components/byob/byobform";
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

const BYOB = () => {
  return (
    <div className="bg-back-light dark:bg-back-dark">
      <Nav />
      <BYOBTitle />
      <BYOBForm />
      <Footer />
      <Footers />
    </div>
  );
};

export default BYOB;
