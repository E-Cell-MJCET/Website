import React, { useEffect, useState } from "react";

import {
  getFirestore,
  onSnapshot,
  query,
  collection,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "@/firebase";
import PlayerDataTable from "./playerTable";

interface Player {
  id: string;
  name: string;
  base: number;
  rating: number;
  type: string;
  indian: boolean;
  status: string;
  image: string;
}

const PlayerMain = () => {
  const [playerData, setPlayerData] = useState<Player[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "players")),
      (snapshot: QuerySnapshot) => {
        const playerData: Player[] = [];
        snapshot.forEach((doc) => {
          const player = doc.data();
          playerData.push({
            id: doc.id,
            name: player.name,
            base: player.base,
            rating: player.rating,
            type: player.type,
            indian: player.indian,
            status: player.status,
            image: player.image,
          });
        });
        setPlayerData(playerData);
      }
    );

    console.log(playerData);

    return () => unsubscribe();
  }, [db]);

  return (
    <div>
      <div className="pt-40 px-20">
        <PlayerDataTable data={playerData} />
      </div>
    </div>
  );
};

export default PlayerMain;
