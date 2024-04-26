import Image from "next/image";
import React from "react";

const TeamCard = () => {
  return (
    <div>
      <div className="border-ecell-red-100 border-2 rounded-xl mt-10 p-4">
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <Image
              src={"../../../assets/ipl/csk.png"}
              alt=""
              width={1000}
              height={1000}
              className="h-28 w-28"
            />
          </div>
          <div className="text-4xl blackOps text-ecell-blue-100">1</div>
          <div className="header text-xl">Chennai Super Kings</div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
