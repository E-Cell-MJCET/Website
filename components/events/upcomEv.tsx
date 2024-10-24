import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Calendar from "@mui/icons-material/CalendarMonthRounded";
import Location from "@mui/icons-material/LocationOn";

interface UpcomEvProps {
  title: string;
  desc: string | ReactNode;
  image: any;
  link: string;
  date: string;
  venue: string;
}

const UpcomEv: React.FC<UpcomEvProps> = ({
  title,
  desc,
  date,
  image,
  link,
  venue,
}) => {
  return (
    <div className="mb-6 w-4/5">
      <Link href={link} target="_blank">
        <div className="group flex h-full cursor-pointer justify-center rounded-xl border-0 px-4 py-5 shadow-lg shadow-gray-900 transition-all duration-300 hover:border-ecell-red-100 lg:border lg:border-ecell-blue-100 lg:bg-black lg:shadow-none">
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
      </Link>
    </div>
  );
};

export default UpcomEv;
