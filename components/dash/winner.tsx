import React from "react";
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

const Winner = () => {
  return (
    <div className=" relative flex items-center justify-center flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Animation /> 
      </div>
      <div  className="flex items-center justify-center flex-col relative z-10">
      <h1 className=" m-[54px]  text-center text-5xl">RESULTS</h1>
      <div className="m-12 w-[600px] shadow-2xl">
        <Card className=" space-y-2 w-[700px] shadow-[#fde047] shadow-xl">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center m-1">Winner</h1>
            </CardTitle>
            <CardDescription className="flex justify-center items-center gap-x-16 mt-8">
              <div className="relative h-[170px] w-[170px]">
                <Image
                  className="rounded-full h-[150px] w-[150px] mt-2 absolute top-1 left-3"
                  src={abid}
                  width={70}
                  height={70}
                  alt=""
                />
                <div className="absolute h-[60px] w-[60px] rounded-full bg-purple bottom-1 right-1 bg-[#fde047] flex items-center justify-center">
                  <h1 className=" font-bold text-xl text-black" >1</h1>
                </div>
              </div>
              <h2 className="font-semibold text-2xl">Team Name</h2>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" m-2 flex align-items justify-between">
              <h1 className="text-xl">Ratings : 4.5</h1>
              <h2 className="text-xl">Remaining Amount : 70Cr</h2>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="m-12 flex items-center justify-between space-x-20 ">
        <Card className="space-y-2 shadow-slate-500 shadow-xl w-[700px]">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center m-1 ">1st Runner-Up</h1>
            </CardTitle>
            <CardDescription className="flex justify-center items-center gap-x-16 mt-8">
              <div className="relative h-[170px] w-[170px]">
                <Image
                  className="rounded-full h-[150px] w-[150px]  mt-2 absolute top-1 left-3"
                  src={abid}
                  width={70}
                  height={70}
                  alt=""
                />
                <div className="absolute h-[60px] w-[60px] rounded-full bg-purple bottom-1 right-1 bg-slate-100 flex items-center justify-center">
                  <h1 className=" font-bold text-xl text-black" >2</h1>
                </div>
              </div>
              <h2 className="font-semibold text-2xl">Team Name</h2>
            </CardDescription>
          </CardHeader>
          <CardContent>
          <div className=" m-2 flex align-items justify-between">
              <h1 className="text-xl">Ratings : 4.5</h1>
              <h2 className="text-xl">Remaining Amount : 70Cr</h2>
            </div>
          </CardContent>
        </Card>
        <Card className="space-y-2 w-[700px]  shadow-[#cd7F32] shadow-xl">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center m-1 ">2nd Runner-Up</h1>
            </CardTitle>
            <CardDescription className="flex justify-center items-center gap-x-16 mt-8">
              <div className="relative h-[170px] w-[170px]">
                <Image
                  className="rounded-full h-[150px] w-[150px]  mt-2 absolute top-1 left-3"
                  src={abid}
                  width={70}
                  height={70}
                  alt=""
                />
                <div className="absolute h-[60px] w-[60px] rounded-full bg-purple bottom-1 right-1 bg-[#cd7F32] flex items-center justify-center">
                  <h1 className=" font-bold text-xl text-black" >3</h1>
                </div>
              </div>
              <h2 className="font-semibold text-2xl">Team Name</h2>
            </CardDescription>
          </CardHeader>
          <CardContent>
          <div className=" m-2 flex align-items justify-between">
              <h1 className="text-xl">Ratings : 4.5</h1>
              <h2 className="text-xl">Remaining Amount : 70Cr</h2>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>

  );
};

export default Winner;
