import { useState } from "react";

const ReadMoreButton = ({ text, maxlength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const ToggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const renderText = () => {
    if (showFullText) {
      return text.split("\n").map((line, index) => <p key={index}>{line}</p>);
    } else {
      return text
        .slice(0, maxlength)
        .split("\n")
        .map((line, index) => <p key={index}>{line}</p>);
    }
  };

  return (
    <div>
      {renderText()}
      <p className="leading-relaxed text-base poppins">{showFullText ? "" : "..."}</p>
      <button
        onClick={ToggleReadMore}
        className="underline text-[#031c35] mt-[20px]"
      >
        {showFullText ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreButton;
