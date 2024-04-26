import Add from "@/components/dash/add";
import Leader from "@/components/dash/leader";
import NavDash from "@/components/dash/nav";
import Team from "@/components/dash/team";
import Winner from "@/components/dash/winner";
import React, { useState } from "react";

const Dash = () => {
  const [selectedComponent, setSelectedComponent] = useState("Add Player");

  return (
    <main className="h-screen w-full">
      <NavDash setSelectedComponent={setSelectedComponent} />
      <div className="pl-24 h-full">
        {" "}
        {selectedComponent === "Add Player" && <Add />}
        {selectedComponent === "Teams" && <Team />}
        {selectedComponent === "Leaderboard" && <Leader />}
        {selectedComponent === "Winners" && <Winner />}
      </div>
    </main>
  );
};

export default Dash;
