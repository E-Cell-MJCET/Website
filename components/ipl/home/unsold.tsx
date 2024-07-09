import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import Player from "./player";
// Import the initialized Firebase Firestore instance

interface PlayerTypes {
  id: string;
  name: string;
  base: number;
  rating: number;
  type: string;
  indian: boolean;
  status: string;
  image: string;
  price: string;
  team: string;
}

const UnSold = () => {
  // Define state to store player data
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    // Create a query to fetch players where status is "Not Sold"
    const playersQuery = query(
      collection(db, "players"),
      where("status", "==", "Not Sold")
    );

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(playersQuery, (snapshot) => {
      const updatedPlayerData: any = [];
      snapshot.forEach((doc) => {
        const player = doc.data();
        updatedPlayerData.push({
          id: doc.id,
          name: player.name,
          base: player.base,
          rating: player.rating,
          type: player.type,
          indian: player.indian,
          status: player.status,
          image: player.image,
          team: player.team,
        });
      });
      // Update player data state with the retrieved players
      setPlayerData(updatedPlayerData);
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* Map over playerData to render each player */}
      {playerData.map((player) => (
        <div className="flex flex-wrap">
          <Player player={player} />
        </div>
      ))}
    </div>
  );
};

export default UnSold;
