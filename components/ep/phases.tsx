import React from "react";
import ReadMoreButton from "./readMoreBtn";

function Phases({ title, desc }: { title: String; desc: String }) {
  return (
    <>
      <div className=" bg-[#cd3e35] p-6 m-4 rounded-lg hover:bg-[#4a1c40] hover:shadow-2xl">
        <h2 className="text-lg helvetica text-white font-bold title-font mb-2">
          {title}
        </h2>
        <div className="lg:block hidden">
          <ReadMoreButton text={desc} maxlength={100} />
        </div>

        <div className="lg:hidden block">
          <p className="leading-relaxed text-base poppins">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default Phases;
