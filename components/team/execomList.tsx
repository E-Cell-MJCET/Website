import React from "react";
import Execom from "./execom";

import webData from "../../data/utils/webData";
import crmData from "../../data/utils/crmData";
import designData from "../../data/utils/designData";
import documentationData from "../../data/utils/documentationData";
import eventsData from "../../data/utils/eventsData";
import hrData from "../../data/utils/hrData";
import ideationData from "../../data/utils/ideationData";
import marketingData from "../../data/utils/marketingData";
import mediaData from "../../data/utils/mediaData";
import operationsData from "../../data/utils/operationsData";
import ExecomTeam from "./execomTeam";

const ExecomList = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center my-10 flex-col">
        <ExecomTeam teamName="Human Resources" teamData={hrData} />
        <ExecomTeam teamName="Events" teamData={eventsData} />
        <ExecomTeam teamName="Ideation" teamData={ideationData} />
        <ExecomTeam teamName="Marketing" teamData={marketingData} />
        <ExecomTeam teamName="CRM" teamData={crmData} />
        <ExecomTeam teamName="Operations" teamData={operationsData} />
        <ExecomTeam teamName="Design" teamData={designData} />
        <ExecomTeam teamName="Web" teamData={webData} />
        <ExecomTeam teamName="Documentation" teamData={documentationData} />
        <ExecomTeam teamName="Media" teamData={mediaData} />
      </div>
    </div>
  );
};

export default ExecomList;
