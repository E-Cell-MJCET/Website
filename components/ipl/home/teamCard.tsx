import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Team {
  id: string;
  name: string;
  balance: number;
  rating: number;
  bought: number;
  logo: string;
  players: Array<string>;
}

const TeamCard = ({
  id,
  bg1,
  bg2,
  border,
}: {
  id: string;
  bg1: string;
  bg2: string;
  border: string;
}) => {
  const router = useRouter();
  const [team, setTeam] = useState<Team | null>(null);
  const gradientStyle = {
    background: `linear-gradient(to right, ${bg1}, ${bg2})`,
    border: `2px solid ${border}`,
  };
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        // Construct the document reference
        const teamDocRef = doc(db, "teams", id);

        // Fetch the document snapshot
        const docSnap = await getDoc(teamDocRef);

        if (docSnap.exists()) {
          // Extract team data from the document snapshot
          const teamData = docSnap.data() as Team;
          setTeam(teamData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, [id]);
  return (
    <div
      className={` rounded-xl mt-10 p-4 cursor-pointer w-full`}
      onClick={() => {
        router.push(`/team/${team?.id}`);
      }}
      style={gradientStyle}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <div>
          <Image
            src={team?.logo || "/path/to/default/image.png"}
            alt=""
            width={1000}
            height={1000}
            className="h-20 w-20 object-contain bg-white rounded-full p-2"
          />
        </div>
        {/* <div className="text-4xl blackOps text-ecell-blue-100">1</div> */}
        <div className="header text-2xl">{team?.name}</div>
        <div className="header text-xl">Funds Remaining</div>
        <div className="header text-2xl">₹{team?.balance} Cr</div>
      </div>
    </div>
  );
};

export default TeamCard;
