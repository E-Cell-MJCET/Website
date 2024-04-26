import React from "react";

const Money = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="">
        <div className="flex items-center flex-col gap-2">
          <div className="header text-2xl text-white">Your Budget is </div>
          <div className="blackOps text-[100px] text-ecell-blue-100 font-semibold">
            100 <span className="text-6xl">Cr*</span>
          </div>
        </div>
        <div className="flex items-center flex-col gap-2 mt-10">
          <div className="header text-2xl text-white">Players You Bought </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="blackOps text-lg text-ecell-blue-100 font-semibold px-6 py-2 rounded-lg border-2 border-ecell-red-100 flex flex-col gap-3">
              <div>Name: M S Dhoni</div>
              <div>Rating: 10</div>
              <div>Bought for: 20 cr</div>
            </div>
            <div className="blackOps text-lg text-ecell-blue-100 font-semibold px-6 py-2 rounded-lg border-2 border-ecell-red-100 flex flex-col gap-3">
              <div>Name: M S Dhoni</div>
              <div>Rating: 10</div>
              <div>Bought for: 20 cr</div>
            </div>
            <div className="blackOps text-lg text-ecell-blue-100 font-semibold px-6 py-2 rounded-lg border-2 border-ecell-red-100 flex flex-col gap-3">
              <div>Name: M S Dhoni</div>
              <div>Rating: 10</div>
              <div>Bought for: 20 cr</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Money;
