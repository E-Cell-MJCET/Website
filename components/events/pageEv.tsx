import React from "react";
import PrevEv from "./prevEv";

const PageEv = () => {
  const GameOfInvestersImagePath = '/assets/Game-of-Investers.webp';
  const AlumniMeetPath = '/assets/Alumni-meet.webp';
  const DSAPath = '/assets/DSA.webp';
  const HackathonPath = '/assets/Hackakthon.webp'; 

  return (
    <div className="flex justify-center  h-screen bg-[#000]">
      <div className="w-[95%]">
        <div className="text-center text-[45px] text-white header mt-10 mb-14">
          <span className="blackOps uppercase">Events</span>
        </div>

        <div className="flex justify-center flex-col items-center">
          <div className="flex justify-center items-center mb-10">
            <div className="flex flex-col items-center justify-center">
              <div className="h-[3px] w-[260px] bg-[#c23c83] rounded-lg my-[2px]"></div>
              <div className="h-[3px] w-[320px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
            </div>

            <div className="text-center poiret text-[30px] font-bold opacity-100 z-30 bg-black px-3 absolute">
              Previous Events
            </div>
          </div>
          
          <PrevEv
            image={AlumniMeetPath}
            title="Alumni meet"
            desc="We had our Alumni meet up, recently, with Mr Umair Mohammed which was a very productive and insightful meeting! 
            He gave us a brief overview of his past experience as Ex Chief Coordinator of E-Cell MJCET,his practical knowledge and insights of starting a business from scratch."
          />
          <PrevEv
          image={DSAPath}
            title="“The DSA Adventure”"
            desc="It was a huge success as a lot of participants of the event gained proficiency in Data Structures and Algorithms, the essential building block of coding.
             The Event “The DSA Adventure” was led by 3 main speakers Md.Mubeen Uddin, Madiha Waheed and Habeeb Ullah Tabrez. 
             The online workshop provided 7 Days of Interactive Learning and Fun. There were Hands on challenges and Daily Quizzes as well.
              “The DSA Adventures” took place from 18th of May and lasted till 24th May. The online      workshop timings were 3pm-4pm and the sessions were organized on Google Meet."
          />
          <PrevEv
          image={HackathonPath}
            title="HACKATHON"
            desc="Hack Revolution is a social coding competition conducted by the Smart India hackathon, consisting of 3-6 members in a team. It provides an exceptional opportunity to network with people from different backgrounds and gives a career boost to the students. It was a collaboration between CSI and E-Cell clubs of the MJCET. The duration was about 15 hours. Winners of the hackathon would qualify for the national-level Hackathon organized by the Govt. of India and All India Council for Technical Education."
          />
          <PrevEv
          image={GameOfInvestersImagePath}
            title="GAME OF INVESTORS"
            desc="Entrepreneurship -cell MJCET, has conducted a fun learning event called the Game of Investors, which exposes their fellow students to the biggest money circulation mediums of the world. The game was played in pairs and trios, The game included 10 rounds, of several companies to choose from and invest into, it was time sensitive and certain situations like the pandemic and wars severely had a huge impact on the way the stock market works were put into the game for the fun twists and losses. And at the end team with the greatest number of returns wins the game!"
          />
        </div>
        {/* <div> <UpcomEv /></div> */}
      </div>
    </div>
  );
};

export default PageEv;
