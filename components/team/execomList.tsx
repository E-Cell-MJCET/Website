import React from "react";
import Execom from "./execom";
import execomData from "../../data/utils/execomData";
const ExecomList = () => {
  return (
    <div className="flex justify-center  h-screen bg-[#000]">
      <div className="w-[95%]">
        <div className="justify-center flex flex-wrap p-[20px]">
          {execomData.map((data, index) => (
            <Execom key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecomList;
