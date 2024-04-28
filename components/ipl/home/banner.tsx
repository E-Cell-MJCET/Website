import Image from "next/image";
import React, { useEffect, useState } from "react";
import TeamCard from "./teamCard";
import elnwt from "../../../public/assets/elwt.png";
import { db } from "@/firebase";
import {
  onSnapshot,
  query,
  collection,
  QuerySnapshot,
} from "firebase/firestore";
import Logs from "./logs";
import TopBuy from "./topBuy";
import UnSold from "./unsold";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

interface Team {
  id: string;
  name: string;
  balance: number;
  rating: number;
  bought: number;
  logo: string;
  players: Array<string>;
}

const Banner = () => {
  const [teamData, setTeamData] = useState<Team[]>([]);
  const [activeSection, setActiveSection] = useState<string>("teamView");

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "teams")),
      (snapshot: QuerySnapshot) => {
        const teamData: Team[] = [];
        snapshot.forEach((doc) => {
          const team = doc.data();
          teamData.push({
            id: team.id,
            name: team.name,
            balance: team.balance,
            bought: team.bought,
            players: team.players,
            rating: team.rating,
            logo: team.logo,
          });
        });
        setTeamData(teamData);
      }
    );

    console.log(teamData);

    return () => unsubscribe();
  }, [db]);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="flex justify-center">
      <div className="md:w-[90%] w-full">
        <div className="flex items-center justify-center flex-col gap-4">
          <Image
            src={"../../../assets/ipl/iplb.png"}
            alt=""
            width={1000}
            height={1000}
            className="h-[20vh] w-full object-contain"
          />

          <div className="header text-xl font-medium  px-3  ">By</div>
          <Image
            src={elnwt}
            alt=""
            className="h-[10vh] w-full lg:w-fit lg:mt-1 logo object-contain"
            height={200}
            width={500}
          />
          <div className="md:flex md:flex-wrap grid grid-cols-2 justify-center mt-10">
            <div>
              <div
                className={`rounded-md border text-center border-[#0b5db0] text-white hover:text-white dark:text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[24px] py-[16px] hover:bg-[#0b5db0] cursor-pointer ${
                  activeSection === "teamView" ? "bg-[#0b5db0] text-white" : ""
                }`}
                onClick={() => handleSectionClick("teamView")}
              >
                Team View
              </div>
            </div>
            {/* <div>
              <div
                className={`rounded-md border text-center border-[#0b5db0] text-black hover:text-white dark:text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[16px] py-[8px] hover:bg-[#0b5db0] cursor-pointer ${
                  activeSection === "logs" ? "bg-[#0b5db0] text-white" : ""
                }`}
                onClick={() => handleSectionClick("logs")}
              >
                Logs
              </div>
            </div> */}
            {/* <div>
              <div
                className={`rounded-md border text-center border-[#0b5db0] text-black hover:text-white dark:text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[16px] py-[8px] hover:bg-[#0b5db0] cursor-pointer ${
                  activeSection === "topBuys" ? "bg-[#0b5db0] text-white" : ""
                }`}
                onClick={() => handleSectionClick("topBuys")}
              >
                Top Buys
              </div>
            </div> */}
            <div>
              <div
                className={`rounded-md border text-center border-[#0b5db0] text-white hover:text-white dark:text-white text-[12px] mb-[0px] mt-[12px] mx-5 px-[24px] py-[16px] hover:bg-[#0b5db0] cursor-pointer ${
                  activeSection === "unsold" ? "bg-[#0b5db0] text-white" : ""
                }`}
                onClick={() => handleSectionClick("unsold")}
              >
                Unsold
              </div>
            </div>
          </div>

          <Button
            onClick={() => {
              router.push("/winners");
            }}
            className="mt-10"
          >
            Show Winners
          </Button>

          {activeSection === "logs" && <Logs />}
          {activeSection === "topBuys" && <TopBuy />}
          {activeSection === "unsold" && <UnSold />}

          {activeSection === "teamView" && (
            <>
              <div className="text-4xl mt-10 blackOps">Teams</div>
              <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full px-10">
                <TeamCard
                  id={"csk"}
                  bg1="#facc15"
                  bg2="#dc2626"
                  border="#dc2626"
                />

                <TeamCard
                  id={"dc"}
                  bg1="#0277bb"
                  bg2="#154598"
                  border="#154598"
                />
                <TeamCard
                  id={"dc_hyd"}
                  bg1="#dfdedf"
                  bg2="#475b78"
                  border="#475b78"
                />
                <TeamCard
                  id={"dd"}
                  bg1="#FF4C26"
                  bg2="#D72600"
                  border="#D72600"
                />
                <TeamCard
                  id={"gl"}
                  bg1="#facc15"
                  bg2="#dc2626"
                  border="#dc2626"
                />

                <TeamCard
                  id={"gt"}
                  bg1="#1b1d1d"
                  bg2="#0a476f"
                  border="#0a476f"
                />
                <TeamCard
                  id={"kkr"}
                  bg1="#3c215d"
                  bg2="#53278d"
                  border="#53278d"
                />

                <TeamCard
                  id={"lsg"}
                  bg1="#dc2626"
                  bg2="#facc15"
                  border="#facc15"
                />
                <TeamCard
                  id={"mi"}
                  bg1="#0277bb"
                  bg2="#154598"
                  border="#154598"
                />
                <TeamCard
                  id={"pk"}
                  bg1="#d61a20"
                  bg2="#82161a"
                  border="#82161a"
                />
                <TeamCard
                  id={"pwi"}
                  bg1="#DADADA"
                  bg2="#8C8C8E"
                  border="#8C8C8E"
                />
                <TeamCard
                  id={"rcb"}
                  bg1="#696969"
                  bg2="#1c1c1c"
                  border="#1c1c1c"
                />
                <TeamCard
                  id={"rps"}
                  bg1="#c05899"
                  bg2="#dca13e"
                  border="#dca13e"
                />
                <TeamCard
                  id={"kt"}
                  bg1="#3c215d"
                  bg2="#53278d"
                  border="#53278d"
                />

                <TeamCard
                  id={"rr"}
                  bg1="#e71b84"
                  bg2="#031c46"
                  border="#031c46"
                />
                <TeamCard
                  id={"srh"}
                  bg1="#f26421"
                  bg2="#e61935"
                  border="#e61935"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
