import React, { useEffect, useState } from "react";
import { db } from "@/firebase";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

interface Team {
  id: string;
  name: string;
  balance: number;
  rating: number;
  bought: number;
  logo: string;
  players: string[];
}

interface Player {
  id: string;
  name: string;
  rating: number;
  type: string;
  indian: string;
  base: number;
  price: number;
  team: string;
  logo: string;

  // Add more properties as needed
}

const Money: React.FC<{ teamId: string }> = ({ teamId }) => {
  const [teamData, setTeamData] = useState<Team | null>(null);
  const [playersData, setPlayersData] = useState<Player[]>([]);

  useEffect(() => {
    const teamDocRef = doc(db, "teams", teamId);

    // Listen for changes to the team document
    const unsubscribeTeam = onSnapshot(teamDocRef, (doc_) => {
      if (doc_.exists()) {
        const teamData: Team = {
          id: doc_.id,
          name: doc_.data().name,
          balance: doc_.data().balance,
          rating: doc_.data().rating,
          bought: doc_.data().bought,
          logo: doc_.data().logo,
          players: doc_.data().players,
        };
        setTeamData(teamData);
        // Fetch player data for each player ID
        const fetchPlayersData = async () => {
          const playersPromises = teamData.players.map(async (playerId) => {
            const playerDocRef = doc(db, "players", playerId);
            const playerDocSnapshot = await getDoc(playerDocRef);
            if (playerDocSnapshot.exists()) {
              const playerData: Player = {
                id: playerId,
                name: playerDocSnapshot.data().name,
                rating: playerDocSnapshot.data().rating,
                type: playerDocSnapshot.data().type,
                indian: playerDocSnapshot.data().indian,
                base: playerDocSnapshot.data().base,
                price: playerDocSnapshot.data().price,
                team: playerDocSnapshot.data().team,
                logo: playerDocSnapshot.data().logo,
                // Add more properties as needed
              };
              return playerData;
            } else {
              console.log(`Player with ID ${playerId} does not exist`);
              return null;
            }
          });
          const playersData = await Promise.all(playersPromises);
          setPlayersData(
            playersData.filter((player) => player !== null) as Player[]
          );
        };
        fetchPlayersData();
      } else {
        console.log("Document no longer exists!");
        // You might want to handle this case, such as redirecting the user or showing a message
      }
    });

    // Make sure to unsubscribe from the team document snapshot listener when the component unmounts
    return () => unsubscribeTeam();
  }, [teamId]);

  return (
    <div className="flex justify-center pt-10 bg-slate-950 h-screen">
      <div className="">
        {teamData && (
          <>
            <div className="flex items-center flex-col gap-2">
              <Image
                src={teamData.logo}
                alt=""
                width={1000}
                height={1000}
                className="h-52 w-52 object-contain"
              />
              {/* <div className="header text-2xl text-white">Budget left </div>
              <div className="blackOps text-[100px] text-ecell-blue-100 font-semibold">
                {teamData.balance}
                <span className="text-6xl">Cr*</span>
              </div> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle className="text-3xl">Budget left</CardTitle>
                    <CardDescription>
                      Budget left for {teamData.name} to spend
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h1 className="text-3xl font-medium leading-none">
                      {teamData.balance}
                      <span className="text-3xl">Cr*</span>
                    </h1>
                  </CardContent>
                </Card>
                {/* <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle className="text-3xl">Team Rating</CardTitle>
                    <CardDescription>
                      The score of the team so far*
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h1 className="text-3xl font-medium leading-none">
                      {teamData.rating}
                    </h1>
                  </CardContent>
                </Card> */}
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle className="text-3xl">Players</CardTitle>
                    <CardDescription>
                      Total no of players bought
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h1 className="text-3xl font-medium leading-none">
                      {teamData.bought}
                    </h1>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center flex-col gap-2 mt-10">
              <div className="header text-2xl text-white">Players Bought </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {playersData.map((player) => (
                  // <div
                  //   key={player.id}
                  //   className="blackOps text-lg text-ecell-blue-100 font-semibold px-6 py-2 rounded-lg border-2 border-ecell-red-100 flex flex-col gap-3"
                  // >
                  //   <div>Name: {player.name}</div>
                  //   <div>Type: {player.type}</div>
                  //   <div>Rating: {player.rating}</div>
                  //   <div>Price: {player.price} Crores</div>

                  //   {/* Add more player data here */}
                  // </div>
                  <Card className="w-[350px]">
                    <CardHeader>
                      <CardTitle>{player.name}</CardTitle>
                      <CardDescription>
                        {player.type} |{" "}
                        {player.indian === "Yes" ? "Indian" : "Foreign"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label>Rating: {[player.rating]}</Label>
                          <Label>Sold for: {[player.price]} crore</Label>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Label>Base Price: {[player.base]} crore</Label>
                      <Label>Sold to: {[player.team]}</Label>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Money;
