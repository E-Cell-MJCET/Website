import { db } from "@/firebase";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  doc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
} from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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

interface Team {
  id: string;
  name: string;
  balance: number;
  rating: number;
  bought: number;
  image: string;
  players: Array<string>;
}
const PlayerName = () => {
  const router = useRouter();

  const playerid = router.query.name;

  const [playerData, setPlayerData] = useState<Player>();

  const [activity, setActivity] = useState<string>();

  const [price, setPrice] = useState<number>();

  const [team, setTeam] = useState<string>();

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

  const initiateSale = async () => {
    if (typeof playerid === "string" && team && price && playerData?.rating) {
      const docRef = doc(db, "players", playerid);
      await updateDoc(docRef, {
        status: activity,
        price: price,
        team: team,
      });

      const teamRef = doc(db, "teams", team);
      await updateDoc(teamRef, {
        balance: increment(-price),
        players: arrayUnion(playerid),
        bought: increment(1),
        rating: increment(playerData?.rating),
      });

      router.back();
    }
  };

  const updateState = async () => {
    if (typeof playerid === "string") {
      const docRef = doc(db, "players", playerid);
      await updateDoc(docRef, {
        status: activity,
      });
      router.back();
    }
  };

  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Player Details</CardTitle>
          <CardDescription>Edit and View Player Data</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={playerData?.name} disabled />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Base Price</Label>
                <Input id="name" value={playerData?.base} disabled />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Rating</Label>
                <Input id="name" value={playerData?.rating} disabled />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="activity">Activity</Label>
                <Select
                  onValueChange={(value) => {
                    setActivity(value);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a activity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Activity</SelectLabel>
                      <SelectItem value="not sold">Not sold</SelectItem>
                      <SelectItem value="auction">Auction</SelectItem>
                      <SelectItem value="sold">Sold</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {activity === "sold" && (
                  <div className="space-y-5 pt-5">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Sold Price</Label>
                      <Input
                        id="sold"
                        value={price}
                        onChange={(e) => {
                          setPrice(parseFloat(e.target.value));
                        }}
                      />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="activity">Team Name</Label>
                      <Select
                        onValueChange={(value) => {
                          setTeam(value);
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select team" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Team Name</SelectLabel>
                            <SelectItem value="csk">CSK</SelectItem>
                            <SelectItem value="mi">MI</SelectItem>
                            <SelectItem value="gt">GT</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          {activity === "sold" ? (
            <Button onClick={initiateSale}>Sell</Button>
          ) : (
            <Button onClick={updateState}>Update</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default PlayerName;
