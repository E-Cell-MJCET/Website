import Image from "next/image";
import React from "react";

const PageEp = () => {
  const eplogo = "/assets/ep/logo/2.png";
  const ecelllogo = "/assets/ewnlt.png";
  const MJlogo = "/assets/mj.webp";

  return (
    <div className="w-full">
      <div className="flex justify-center  object-cover object-center">
        <div className="w-[95%]">
          <div className="flex flex-row justify-between">
            <div className="w-36 h-36 relative overflow-hidden m-2">
              <Image
                src={eplogo}
                layout="fill"
                objectFit="cover"
                alt="Icon 1"
              />
            </div>
            <div className="w-32 h-32 relative overflow-hidden m-2">
              <Image
                src={MJlogo}
                layout="fill"
                objectFit="cover"
                alt="Icon 2"
              />
            </div>
            <div className="w-32 h-32 relative overflow-hidden m-2">
              <Image
                src={ecelllogo}
                layout="fill"
                objectFit="cover"
                alt="Icon 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageEp;
