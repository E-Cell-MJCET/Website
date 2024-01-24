import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Nav from "@/components/nav";
import Execom from "@/components/team/execom";
import ExecomList from "@/components/team/execomList";
import GB from "@/components/team/team";
import React from "react";

const Team = () => {
  return (
    <div className="bg-black">
      <Nav />
      <GB />

      <ExecomList />
      <Footer />
      <Footers />
    </div>
  );
};

export default Team;
