import React from "react";

function Phases({ title, desc }: { title: String; desc: String }) {
  return (
    <>
      <div className=" bg-[#cd3e35] p-6 m-4 rounded-lg hover:bg-[#4a1c40] hover:shadow-2xl">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <h2 className="text-lg bernoru text-white font-bold title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base poppins">{desc}</p>
      </div>
    </>
  );
}

export default Phases;