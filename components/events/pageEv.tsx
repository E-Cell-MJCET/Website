import React from "react";
import PrevEv from "./prevEv";
import UpcomEv from "./upcomEv";

const PageEv = () => {
  const GameOfInvestersImagePath = "/assets/Game-of-Investers.webp";
  const AlumniMeetPath = "/assets/Alumni-meet.webp";
  const DSAPath = "/assets/DSA.webp";
  const HackathonPath = "/assets/Hackakthon.webp";
  const HackRev2 = "/assets/upcoming-events/hackrev.jpeg";
  const Flutter = "/assets/upcoming-events/flutter.jpeg";
  const BOB = "/assets/upcoming-events/bob.webp";
  const DataForge = "/assets/upcoming-events/dataforge.jpeg";
  const ep = "/assets/upcoming-events/3.png";

  return (
    <div className="flex justify-center  bg-black h-auto">
      <div className="w-[95%]">
        <div className="text-center text-[45px] text-white header mt-10 mb-14">
          <span className="blackOps uppercase">Events</span>
        </div>

        {/* <div> <UpcomEv /></div> */}
        <div className="flex justify-center flex-col items-center bg-black">
          <div className="flex justify-center items-center mb-10">
            <div className="flex flex-col items-center justify-center">
              <div className="h-[3px] w-[260px] bg-[#c23c83] rounded-lg my-[2px]"></div>
              <div className="h-[3px] w-[320px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
            </div>

            <div className="text-center poiret text-white text-[30px] font-bold opacity-100  bg-black px-3 absolute">
              Upcoming Events
            </div>
          </div>

          <p className="text-xl md:text-3xl font-bold mt-10">
            Something great is cooking up :) Stay tuned!!
          </p>

          <div className="flex justify-center flex-col items-center mt-20 bg-black">
            <div className="flex justify-center items-center mb-10 ">
              <div className="flex flex-col items-center justify-center">
                <div className="h-[3px] w-[260px] bg-[#c23c83] rounded-lg my-[2px]"></div>
                <div className="h-[3px] w-[320px] bg-[#c23c83] rounded-lg mt-[2px]"></div>
              </div>

              <div className="text-center poiret text-[30px] font-bold opacity-100 text-white bg-black px-3 absolute">
                Previous Events
              </div>
            </div>

            <PrevEv
              image={HackRev2}
              title="Hack Revolution 2023 2.0"
              desc="Hack Revolution is a social coding competition powered by ACES, consisting of 4-6 members in a team. It provides an exceptional opportunity to network with people from different backgrounds and gives a career boost to the students. It is a collaboration between CSI and E-Cell clubs of the MJCET. The duration is about 15 hours. Winners of the hackathon would qualify for a price pool of Rs. 3,00,000 and Internship oppurtunity at ACES."
            />

            <PrevEv
              image={DataForge}
              title="DataForge Fusion"
              desc="🚀 Calling all data enthusiasts! 📊

            CSI & E-Cell MJCET presents our latest venture,
            
            DataForge Fusion: Data Engineering & Analysis Workshop.
            
            Delve deep into the dynamic world of data and unravel the secrets of data analysis with our guest speaker:
            Imaduddin Mohammed
            Senior Cloud Engineer @ PwC Australia
            
            Embark on a journey into the dynamic world of data as we bring you an engaging pre-hackathon workshop that explores the intricacies of Data Engineering and Analysis.📈🧑‍💻
            
            Are you keen on mastering the skills required for effective Data Engineering? Eager to unravel the secrets of data analysis? Look no further!
            
            🖥️ Unlock the power of Data Engineering and Analysis with hands-on sessions!
            
            🖥️ Dive into practical experiences with cutting-edge tools and techniques in the realm of data.
            
            🖥️ Boost your chances to win the upcoming Hackathon with a generous prize pool of *₹3,00,000!*
            
            
            "
            />

            <PrevEv
              image={Flutter}
              title="FLUTTER FIESTA"
              desc="A journey into App Development with Flutter

            Are you aspiring to become an App Developer but unsure where to begin?🤔
            
            Join us for an interactive workshop on App Development to delve deeper into the expansive realm of technology.
            
            This event centers around Flutter, the cutting-edge technology in mobile app development. If you're eager to grasp the skills of creating an app using Flutter, this event is tailor-made for you. By the end of the workshop, you'll have crafted your inaugural Flutter app!
            
            Discover how to adeptly build apps using Flutter!
            
            Gain practical experience with one of the most widely used and coolest technologies in mobile app development.
            
            Increase your chance to win *Hackathon* which has a prize pool of *₹3,00,000*
            
            "
            />

            <PrevEv
              image={BOB}
              title="BATTLE OF BRANDS"
              desc="Introducing The Battle Of Brands 🏆
            A 3-round, fun and informative event. 📊
            
            - Round 1: PICTIONARY 🖌️
            Two teams compete at a time, racing to draw and identify brand logos. The quickest team advances!
            
            - Round 2: Battle of Facts? 📈
            Two teams engage in a fact-based showdown, defending their given brands. The winning team progresses!
            
            - Round 3: 🤫 SURPRISE ROUND 🎁
            
            The winners of this competition gets the cash prices!
            
            👉 The price pool stands was of ₹2000 💰
            
            ➡️ Entry: Assemble your team of 2 or 4 members.
            ➡️ Event venue: Ghulam Ahmed Hall
            ➡️ Date: November 16, 2023 📅
            ➡️ Timings: 1:45 pm - 4:00 pm 🕒
            "
            />
          </div>
          <PrevEv
            image={AlumniMeetPath}
            title="ALUMINI MEET"
            desc="We had our Alumni meet up, recently, with Mr Umair Mohammed which was a very productive and insightful meeting! 
            He gave us a brief overview of his past experience as Ex Chief Coordinator of E-Cell MJCET,his practical knowledge and insights of starting a business from scratch."
          />
          <PrevEv
            image={DSAPath}
            title="THE DSA"
            desc="It was a huge success as a lot of participants of the event gained proficiency in Data Structures and Algorithms, the essential building block of coding.
             The Event “The DSA Adventure” was led by 3 main speakers Md.Mubeen Uddin, Madiha Waheed and Habeeb Ullah Tabrez. 
             The online workshop provided 7 Days of Interactive Learning and Fun. There were Hands on challenges and Daily Quizzes as well.
              “The DSA Adventures” took place from 18th of May and lasted till 24th May. The online workshop timings were 3pm-4pm and the sessions were organized on Google Meet."
          />
          <PrevEv
            image={HackathonPath}
            title="HACK REVOLUTION 2023"
            desc="Hack Revolution is a social coding competition conducted by the Smart India hackathon, consisting of 3-6 members in a team. It provides an exceptional opportunity to network with people from different backgrounds and gives a career boost to the students. It was a collaboration between CSI and E-Cell clubs of the MJCET. The duration was about 15 hours. Winners of the hackathon would qualify for the national-level Hackathon organized by the Govt. of India and All India Council for Technical Education."
          />
          <PrevEv
            image={GameOfInvestersImagePath}
            title="GAME OF INVESTORS"
            desc="Entrepreneurship-Cell MJCET, has conducted a fun learning event called the Game of Investors, which exposes their fellow students to the biggest money circulation mediums of the world. The game was played in pairs and trios, The game included 10 rounds, of several companies to choose from and invest into, it was time sensitive and certain situations like the pandemic and wars severely had a huge impact on the way the stock market works were put into the game for the fun twists and losses. And at the end team with the greatest number of returns wins the game!"
          />
        </div>
      </div>
    </div>
  );
};

export default PageEv;
