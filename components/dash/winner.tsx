import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import abid from "@/public/assets/execom/abid.webp";
import Animation from "./animation";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/firebase";

interface Winner {
  id: string;
  name: string;
  balance: number;
  rating: number;
  logo: string;
}

const Winner = () => {
  const [winners, setWinners] = useState<Winner[]>([]);

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const winnersCollectionRef = collection(db, "teams");
        const winnersQuery = query(
          winnersCollectionRef,
          orderBy("rating", "desc"),
          limit(3)
        );
        const unsubscribe = onSnapshot(winnersQuery, (snapshot) => {
          const winnersData: Winner[] = [];
          snapshot.forEach((doc) => {
            const winner = doc.data();
            winnersData.push({
              id: doc.id,
              name: winner.name,
              rating: winner.rating,
              balance: winner.balance,
              logo: winner.logo,
            });
          });
          setWinners(winnersData);
        });
        return unsubscribe;
      } catch (error) {
        console.error("Error fetching winners:", error);
      }
    };

    fetchWinners();
  }, []);

  return (
    <div>
      <div className=" relative  items-center justify-center flex-col overflow-hidden flex">
        <div className="absolute top-0 left-0 w-full h-full">
          <Animation />
        </div>
        <div className="flex items-center justify-center flex-col relative z-10">
          <h1 className=" m-[54px]  text-center text-5xl blackOps pt-16">
            RESULTS
          </h1>
          {winners.length > 0 && (
            <div className="m-8 xl:m-12 flex items-center justify-center xl:w-[700px] shadow-2xl">
              <Card className="w-[80%]  md:w-[90%] xl:w-[700px] shadow-[#fde047] shadow-xl">
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-center m-1">Winner</h1>
                  </CardTitle>
                  <CardDescription className="flex justify-center items-center gap-x-16 mt-8">
                    <div className="relative h-[170px] w-[170px]">
                      <Image
                        className="rounded-full h-[150px] w-[150px] mt-2 absolute top-1 left-3 object-contain"
                        src={winners[0].logo}
                        width={70}
                        height={70}
                        alt=""
                      />
                      <div className="absolute h-[60px] w-[60px] rounded-full bg-purple bottom-1 right-1 bg-[#fde047] flex items-center justify-center">
                        <h1 className=" font-bold text-xl text-black">1</h1>
                      </div>
                    </div>
                    <h2 className="font-semibold text-2xl">
                      {winners[0].name}
                    </h2>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className=" m-2 flex align-items justify-between">
                    <h1 className="text-xl">Ratings : {winners[0].rating}</h1>
                    <h2 className="text-xl">
                      Remaining Amount : {winners[0].balance}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          <div className="m-8 xl:m-12 flex flex-col xl:flex-row xl:space-x-20 items-center justify-between  ">
            {winners.length >= 2 && (
              <Card className="mb-8 xl:mb-0 w-[80%] shadow-slate-500 shadow-xl xl:w-[700px]">
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-center m-1 ">1st Runner-Up</h1>
                  </CardTitle>
                  <CardDescription className="flex justify-center items-center gap-x-16 mt-8">
                    <div className="relative h-[170px] w-[170px]">
                      <Image
                        className="rounded-full h-[150px] w-[150px]  mt-2 absolute top-1 left-3 object-contain"
                        src={winners[1].logo}
                        width={70}
                        height={70}
                        alt=""
                      />
                      <div className="absolute h-[60px] w-[60px] rounded-full bg-purple bottom-1 right-1 bg-slate-100 flex items-center justify-center">
                        <h1 className=" font-bold text-xl text-black">2</h1>
                      </div>
                    </div>
                    <h2 className="font-semibold text-2xl">
                      {winners[1].name}
                    </h2>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className=" m-2 flex align-items justify-between">
                    <h1 className="text-xl">Ratings : {winners[1].rating}</h1>
                    <h2 className="text-xl">
                      Remaining Amount : {winners[1].balance}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            )}
            {winners.length >= 3 && (
              <Card className="w-[80%]  xl:w-[700px]   shadow-[#cd7F32] shadow-xl">
                <CardHeader>
                  <CardTitle>
                    <h1 className="text-center m-1 ">2nd Runner-Up</h1>
                  </CardTitle>
                  <CardDescription className="flex justify-center items-center gap-x-16 mt-8">
                    <div className="relative h-[170px] w-[170px]">
                      <Image
                        className="rounded-full h-[150px] w-[150px]  mt-2 absolute top-1 left-3 object-contain"
                        src={winners[2].logo}
                        width={70}
                        height={70}
                        alt=""
                      />
                      <div className="absolute h-[60px] w-[60px] rounded-full bg-purple bottom-1 right-1 bg-[#cd7F32] flex items-center justify-center">
                        <h1 className=" font-bold text-xl text-black">3</h1>
                      </div>
                    </div>
                    <h2 className="font-semibold text-2xl">
                      {winners[2].name}
                    </h2>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className=" m-2 flex align-items justify-between">
                    <h1 className="text-xl">Ratings : {winners[2].rating}</h1>
                    <h2 className="text-xl">
                      Remaining Amount : {winners[2].balance}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winner;
