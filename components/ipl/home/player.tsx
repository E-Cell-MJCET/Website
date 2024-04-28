import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface Player {
  id: string;
  name: string;
  base: number;
  rating: number;
  type: string;
  indian: string;
  status: string;
  image: string;
  price: string;
  team: string;
}

const Player = ({ player }: { player: Player }) => {
  return (
    <Card className="w-[350px] mt-10">
      <CardHeader>
        <CardTitle>{player.name}</CardTitle>
        <CardDescription>
          {player.type} | {player.indian === "Yes" ? "Indian" : "Foreign"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            {/* <Label>Rating: {[player.rating]}</Label> */}
            <Label>Sold for: {[player.price]} crore</Label>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Label>Base Price: {[player.base]} crore</Label>
      </CardFooter>
    </Card>
  );
};

export default Player;
