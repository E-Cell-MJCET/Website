import React, { useEffect, useState } from "react";

import {
  getFirestore,
  onSnapshot,
  query,
  collection,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "@/firebase";
import LeaderBoardTable from "./leaderBoardTable";

interface Team {
  id: string;
  name: string;
  balance: number;
  rating: number;
  bought: number;
  image: string;
  players: Array<string>;
}

const LeaderBoardMain = () => {
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
        <LeaderBoardTable data={teamData} />
      </div>
    </div>
  );
};

export default LeaderBoardMain;
