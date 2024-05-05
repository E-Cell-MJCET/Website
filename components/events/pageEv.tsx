import React from "react";
import PrevEv from "./prevEv";
import UpcomEv from "./upcomEv";

const PageEv = () => {
  const GameOfInvestersImagePath = "/assets/Game-of-Investers.webp";
  const HackRev2 = "/assets/upcoming-events/hackrev.jpeg";
  const ipl = "/assets/upcoming-events/ipl.webp";
  const Flutter = "/assets/upcoming-events/flutter.jpeg";
  const BOB = "/assets/upcoming-events/bob.webp";
  const DataForge = "/assets/upcoming-events/dataforge.jpeg";
  const byob = "/assets/upcoming-events/byob.png";
  const stack = "/assets/upcoming-events/stack.jpg";

  return (
    <div className="flex justify-center  bg-black h-auto pt-32">
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
              title="IPL Auction 2024"
              desc="IPL auction 2024, yet again a fantastic event hosted by your very own Entrepreneurship Cell MJCET where more than 80+ students engaged in groups of up to 5 members each and with names of 16 teams of the Indian Premier League, the teams were been given a budget of 100cr each in which they were expected to build a team of 11 players later with which the winner was decided on the basis of the grand total of every individual player rating of the team. A very competitive and strong play delivered by every single team participated."
              image={ipl}
              date="27th April 2024"
              venue="Seminar Hall 4th Block"
            />

            <PrevEv
              title="Build your own business"
              desc="A 90-minute program packed with insights on brand building. From domain ownership to effective marketing strategies, we've got you covered. No coding expertise required!"
              image={byob}
              date="12th February 2024"
              venue="Room 5209"
            />
            <PrevEv
              image={HackRev2}
              title="Hack Revolution 2023 2.0"
              desc="Hack Revolution is a social coding competition powered by ACES, consisting of 4-6 members in a team. It provides an exceptional opportunity to network with people from different backgrounds and gives a career boost to the students. It is a collaboration between CSI and E-Cell clubs of the MJCET. The duration is about 15 hours. Winners of the hackathon would qualify for a price pool of Rs. 3,00,000 and Internship oppurtunity at ACES."
              date="17th December 2023"
              venue="Ghulam Ahemed Hall"
            />

            <PrevEv
              image={DataForge}
              title="DataForge Fusion"
              desc="Explore DataForge Fusion: a workshop on Data Engineering & Analysis. Join Imaduddin Mohammed, Senior Cloud Engineer at PwC Australia, as we delve into the depths of data analysis. Dive into hands-on sessions, unlocking the power of data engineering and analysis with practical experiences and cutting-edge tools."
              date="25th November 2023"
              venue="CIC Lab, Block 2"
            />

            <PrevEv
              image={Flutter}
              title="FLUTTER FIESTA"
              desc="An interactive workshop, dive into App Development with Flutter! Discover the latest in mobile app technology as you learn to create your own Flutter app. Gain hands-on experience and boost your chances of winning the Hackathon's ₹3,00,000 prize pool!"
              date="18th November 2023"
              venue="CIC Lab, Block 2"
            />

            <PrevEv
              image={BOB}
              title="Battle of Brands"
              desc="A thrilling 3-round event! Round 1 kicks off with PICTIONARY, where teams race to draw and guess brand logos. Round 2 features Battle of Facts, a showdown defending given brands. The surprise Round 3 offers cash prizes! Assemble your team of 2 or 4 for a chance to win from the ₹2000 prize pool."
              date="16th November 2023"
              venue="Seminar Hall 4th Block"
            />

            <PrevEv
              image={stack}
              title="Stack Sprint"
              desc=" A Web Development Adventure, our first pre-hackathon workshop! Dive into the world of web development over two days with guest speaker Syed Zohaib, Software Engineer at Apple, Hyderabad. Learn HTML, CSS, JavaScript, and Vue.js basics while building a web page and web app. Ready to kickstart your journey as a web developer? Join us!
              "
              date="10th & 11th November 2023"
              venue="CIC Lab, Block 2"
            />
          </div>

          <PrevEv
            image={GameOfInvestersImagePath}
            title="GAME OF INVESTORS"
            desc="Entrepreneurship-Cell MJCET, has conducted a fun learning event called the Game of Investors, which exposes their fellow students to the biggest money circulation mediums of the world. The game was played in pairs and trios, The game included 10 rounds, of several companies to choose from and invest into, it was time sensitive and certain situations like the pandemic and wars severely had a huge impact on the way the stock market works were put into the game for the fun twists and losses. And at the end team with the greatest number of returns wins the game!"
            date="April 27th 2024"
            venue="Seminar Hall 4th Block"
          />
        </div>
      </div>
    </div>
  );
};

export default PageEv;
