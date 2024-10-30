import { Calendar } from "lucide-react";
import Location from "@mui/icons-material/LocationOn";
import Image from "next/image";
import React, { ReactNode } from "react";

interface PrevEvProps {
  title: string;
  desc: string | ReactNode;
  image: any;
  date: string;
  venue: string;
}

const PrevEv: React.FC<PrevEvProps> = ({ title, desc, image, date, venue }) => {
  return (
    <div className="mb-6 w-4/5 bg-black">
      <div className="group flex h-full cursor-text justify-center rounded-xl border-0 px-4 py-5 shadow-lg shadow-gray-900 transition-all duration-300 hover:border-ecell-red-100 lg:border lg:border-ecell-blue-100 lg:bg-black lg:shadow-none ">
        <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-center ">
          <div className="relative hidden h-[150px] w-[220px] lg:block">
            <Image
              src={image}
              width={100}
              height={100}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="mt-4 flex flex-col items-center justify-center text-center lg:mt-0 lg:w-[70%] lg:px-5">
            <div className="mb-5 text-[24px] text-white ">{title}</div>
            <div className="flex h-[150px] w-[220px] items-center justify-center lg:hidden">
              <Image
                src={image}
                width={100}
                height={100}
                alt=""
                className="rounded-lg text-center"
              />
            </div>
            <div className="my-5 flex flex-row lg:mt-0">
              <Calendar className="h-5 w-5" />
              <div className="text-sm  text-white "> : {date}</div>
            </div>
            <div className="mb-5 flex flex-row">
              <Location className="h-5 w-5" />
              <div className="text-sm  text-white "> : {venue}</div>
            </div>
            <div className="mt-5 text-sm tracking-tight text-white lg:mt-0">
              {desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevEv;
