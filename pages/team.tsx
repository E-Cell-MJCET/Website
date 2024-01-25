import Footer from "@/components/home/footer";
import Footers from "@/components/home/footer2";
import Nav from "@/components/nav";
import Execom from "@/components/team/execom";
import ExecomList from "@/components/team/execomList";
import ExecomTeam from "@/components/team/execomTeam";
import GB from "@/components/team/team";
import crmData from "@/data/utils/crmData";
import designData from "@/data/utils/designData";
import documentationData from "@/data/utils/documentationData";
import eventsData from "@/data/utils/eventsData";
import hrData from "@/data/utils/hrData";
import ideationData from "@/data/utils/ideationData";
import marketingData from "@/data/utils/marketingData";
import mediaData from "@/data/utils/mediaData";
import operationsData from "@/data/utils/operationsData";
import webData from "@/data/utils/webData";
import Link from "next/link";
import React, { useRef } from "react";

const Team = () => {
  return (
    <div className="bg-black w-full">
      <Nav />
      <GB />

      <div className="flex justify-center items-center my-10">
        <div className="flex flex-col items-center justify-center ">
          <div className="h-[3px] w-[260px] bg-[#c23c83] rounded-lg my-[2px]"></div>
          <div className="h-[3px] w-[320px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
        </div>

        <div className="text-center poiret text-[30px] font-bold opacity-100 text-white bg-black px-3 absolute">
          Portfolios
        </div>
      </div>
      <div className="md:flex md:flex-wrap grid grid-cols-2 justify-center">
        <Link href="/team/#hr" scroll={true}>
          <div className="rounded-md border text-center border-[#6b28d5] text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[10px] py-[4px] hover:bg-[#6b28d5] cursor-pointer">
            HR
          </div>
        </Link>
        <Link href="/team/#events" scroll={true}>
          <div className="rounded-md border text-center border-[#6b28d5] text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[10px] py-[4px] hover:bg-[#6b28d5] cursor-pointer">
            Events
          </div>
        </Link>
        <Link href="/team/#ideation" scroll={true}>
          <div className="rounded-md border text-center border-[#6b28d5] text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[10px] py-[4px] hover:bg-[#6b28d5] cursor-pointer">
            Ideation
          </div>
        </Link>
        <Link href="/team/#marketing" scroll={true}>
          <div className="rounded-md border text-center border-[#6b28d5] text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[10px] py-[4px] hover:bg-[#6b28d5] cursor-pointer">
            Marketing
          </div>
        </Link>
        <Link href="/team/#crm" scroll={true}>
          <div className="rounded-md border text-center border-[#6b28d5] text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[10px] py-[4px] hover:bg-[#6b28d5] cursor-pointer">
            CRM
          </div>
        </Link>
        <Link href="/team/#operations" scroll={true}>
          <div className="rounded-md border text-center border-[#6b28d5] text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[10px] py-[4px] hover:bg-[#6b28d5] cursor-pointer">
            Operations
          </div>
        </Link>
        <Link href="/team/#design" scroll={true}>
          <div className="rounded-md border text-center border-[#6b28d5] text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[10px] py-[4px] hover:bg-[#6b28d5] cursor-pointer">
            Design
          </div>
        </Link>
        <Link href="/team/#web" scroll={true}>
          <div className="rounded-md border text-center border-[#6b28d5] text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[10px] py-[4px] hover:bg-[#6b28d5] cursor-pointer">
            Web
          </div>
        </Link>
        <Link href="/team/#documentation" scroll={true}>
          <div className="rounded-md border text-center border-[#6b28d5] text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[10px] py-[4px] hover:bg-[#6b28d5] cursor-pointer">
            Documentation
          </div>
        </Link>

        <Link href="/team/#media" scroll={true}>
          <div className="rounded-md border text-center border-[#6b28d5] text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[10px] py-[4px] hover:bg-[#6b28d5] cursor-pointer">
            Media
          </div>
        </Link>
      </div>
      <div className="w-full">
        <div className="flex justify-center items-center my-10 flex-col w-full">
          <div id="hr" className="w-full">
            <ExecomTeam teamName="HR" teamData={hrData} />
          </div>

          <div id="events" className="w-full">
            {" "}
            <ExecomTeam teamName="Events" teamData={eventsData} />
          </div>

          <div id="ideation" className="w-full">
            {" "}
            <ExecomTeam teamName="Ideation" teamData={ideationData} />
          </div>

          <div id="marketing" className="w-full">
            <ExecomTeam teamName="Marketing" teamData={marketingData} />
          </div>

          <div id="crm" className="w-full">
            <ExecomTeam teamName="CRM" teamData={crmData} />
          </div>

          <div id="operations" className="w-full">
            {" "}
            <ExecomTeam teamName="Operations" teamData={operationsData} />
          </div>

          <div id="design" className="w-full">
            <ExecomTeam teamName="Design" teamData={designData} />
          </div>

          <div id="web" className="w-full">
            <ExecomTeam teamName="Web" teamData={webData} />
          </div>

          <div id="documentation" className="w-full">
            <ExecomTeam teamName="Documentation" teamData={documentationData} />
          </div>

          <div id="media" className="w-full">
            {" "}
            <ExecomTeam teamName="Media" teamData={mediaData} />
          </div>
        </div>
      </div>
      <Footer />
      <Footers />
    </div>
  );
};

export default Team;
