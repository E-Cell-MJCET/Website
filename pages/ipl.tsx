import Banner from "@/components/ipl/home/banner";
import Nav from "@/components/nav";
import React from "react";

const IplHome = () => {
  return (
    <div>
      <Nav />
      <div className="pt-32">
        <Banner />
      </div>
    </div>
  );
};

export default IplHome;
