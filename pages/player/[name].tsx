import { db } from "@/firebase";
import { Select } from "@mui/material";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@radix-ui/react-select";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
const PlayerName = () => {
  const router = useRouter();

  const playerid = router.query.name;

  const [playerData, setPlayerData] = useState<Player>();

  useEffect(() => {
    if (typeof playerid === "string") {
      // Check if playerid is a string
      const getDocument = async () => {
        const docRef = doc(db, "players", playerid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPlayerData(docSnap.data() as Player);
          console.log(docSnap.data());
        } else {
          console.log("No such document!");
        }
      };

      getDocument();
    }
  }, []);

  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <h1>{playerData?.name}</h1>
        <h1>{playerData?.rating}</h1>
        <h1>{playerData?.base}</h1>
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a activity" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Activity</SelectLabel>
              <SelectItem value="notsold">Not sold</SelectItem>
              <SelectItem value="aucion">Auction</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PlayerName;
