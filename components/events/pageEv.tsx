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
  const byob = "/assets/upcoming-events/byob.png";
  const stack = "/assets/upcoming-events/stack.jpg";

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
              <div className="h-[3px] w-[260px] bg-ecell-red-100 rounded-lg my-[2px]"></div>
              <div className="h-[3px] w-[320px] bg-ecell-red-100 rounded-lg mt-[2px]"></div>
            </div>

            <div className="text-center poiret text-white text-[30px] font-bold opacity-100  bg-black px-3 absolute">
              Upcoming Events
            </div>
          </div>
          <p className="text-xl md:text-3xl font-bold mt-10 text-center">
            Something great is cooking up :) Stay tuned!!
          </p>

          <div className="flex justify-center flex-col items-center mt-20 bg-black">
            <div className="flex justify-center items-center mb-10 ">
              <div className="flex flex-col items-center justify-center">
                <div className="h-[3px] w-[260px] bg-ecell-red-100 rounded-lg my-[2px]"></div>
                <div className="h-[3px] w-[320px] bg-ecell-red-100 rounded-lg mt-[2px]"></div>
              </div>

              <div className="text-center poiret text-[30px] font-bold opacity-100 text-white bg-black px-3 absolute">
                Previous Events
              </div>
            </div>

            <PrevEv
              title="Build your own business"
              desc="Learn how to kick off your own business"
              image={byob}
            />
            <PrevEv
              image={HackRev2}
              title="Hack Revolution 2023 2.0"
              desc="Hack Revolution is a social coding competition powered by ACES, consisting of 4-6 members in a team. It provides an exceptional opportunity to network with people from different backgrounds and gives a career boost to the students. It is a collaboration between CSI and E-Cell clubs of the MJCET. The duration is about 15 hours. Winners of the hackathon would qualify for a price pool of Rs. 3,00,000 and Internship oppurtunity at ACES."
            />

            <PrevEv
              image={DataForge}
              title="DataForge Fusion"
              desc="
           
            DataForge Fusion: Data Engineering & Analysis Workshop.
            
            Delve deep into the dynamic world of data and unravel the secrets of data analysis with our guest speaker:
            Imaduddin Mohammed
            Senior Cloud Engineer @ PwC Australia
            
            Embarked on a journey into the dynamic world of data as we bring you an engaging pre-hackathon workshop that explores the intricacies of Data Engineering and Analysis.
            
            
            Unlocked the power of Data Engineering and Analysis with hands-on sessions!
            
           Dove into practical experiences with cutting-edge tools and techniques in the realm of data.
          
            
            
            "
            />

            <PrevEv
              image={Flutter}
              title="FLUTTER FIESTA"
              desc="A journey into App Development with Flutter

            
            An interactive workshop on App Development to delve deeper into the expansive realm of technology.
            
            This event centers around Flutter, the cutting-edge technology in mobile app development. By the end of the workshop, audience have crafted their inaugural Flutter app!
            
            
            
            Gained practical experience with one of the most widely used and coolest technologies in mobile app development.
            
            Increased audience chance to win *Hackathon* which has a prize pool of *₹3,00,000*
            
            "
            />

            <PrevEv
              image={stack}
              title="Stack Sprint"
              desc="Our first pre hackathon workshop
StackSprint: A Web Development Adventure

Do you wish to become a Web Developer but don’t know where to start?

A two-day hands-on workshop on Web Development and dive deeper into the topics with our guest speaker:
Syed Zohaib
Software Engineer @ Apple, Hyderabad
Chief Coordinator, CSI 2018

Audience were introduced to HTML and CSS by building a basic web page.
And also, introduction to JavaScript and Vue.js with fundamentals of building a web app."
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
