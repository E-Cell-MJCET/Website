import React, { useEffect, useState } from "react";

import {
  getFirestore,
  onSnapshot,
  query,
  collection,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "@/firebase";
import TeamDataTable from "./teamTable";

interface Team {
  id: string;
  name: string;
  balance: number;
  rating: number;
  bought: number;
  image: string;
  players: Array<string>;
}

const TeamMain = () => {
  const [teamData, setTeamData] = useState<Team[]>([]);

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
            image: team.image,
          });
        });
        setTeamData(teamData);
      }
    );

    console.log(teamData);

    return () => unsubscribe();
  }, [db]);

  return (
    <div>
      <div className="pt-40 px-20">
        <TeamDataTable data={teamData} />
      </div>
    </div>
  );
};

export default TeamMain;
