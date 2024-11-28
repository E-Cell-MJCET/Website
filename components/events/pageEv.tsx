import React from "react";

import PrevEv from "./prevEv";

const PageEv = () => {
  const HackRev2 = "/assets/upcoming-events/hackrev.jpeg";
  const ipl = "/assets/upcoming-events/ipl.webp";
  const Flutter = "/assets/upcoming-events/flutter.jpeg";
  const BOB = "/assets/upcoming-events/bob.webp";
  const DataForge = "/assets/upcoming-events/dataforge.jpeg";
  const byob = "/assets/upcoming-events/byob.png";
  const stack = "/assets/upcoming-events/stack.jpg";
  const goi = "/assets/upcoming-events/goi.jpg";
  const mayhem = "/assets/upcoming-events/market-mayhem.png";
  const btb = "/assets/upcoming-events/beyond-the-bench1.jpg";
  const MARKET_MAYHEM_desc = `Round 1. Guess the Price: Estimate the prices of various products, Round 2. Guess the Brand Using Emojis: Identify brands based on emoji clues.
  Round 3. Debate: Teams engage in a marketing-related debate, Round 4. Surprise Round: A mystery challenge revealed on the spot.
  Participants: Duo: ₹60, Teams of up to 4 members: ₹100, Free for E-cell members`;

  const formatDescription = (desc: string): JSX.Element[] => {
    return desc.split('\n').map((line, index) => {
      return (
        <div key={index} className="flex flex-wrap">
          {line.split(', ').map((item, idx) => (
            <span key={idx} className="mr-2">{item}</span>
          ))}
        </div>
      );
    });
  };

  return (
    <div className="flex h-auto justify-center bg-black pt-32">
      <div className="w-[95%]">
        <div className="mb-14 mt-10 text-center text-[45px] text-white">
          <span className="font-staatliches">Events</span>
        </div>
        {/* Upcoming Events Section */}
        <div className="flex flex-col items-center justify-center bg-black">
          <div className="mb-10 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="my-[2px] h-[3px] w-[260px] rounded-lg bg-ecell-red-100"></div>
              <div className="mt-[2px] h-[3px] w-[320px] rounded-lg bg-ecell-red-100"></div>
            </div>
            <div className="absolute bg-black px-3 text-center text-[30px] font-bold text-white opacity-100">
              Upcoming Events
            </div>
          </div>
          <a href="https://ecellmjcet.com/BeyondTheBench" target="_blank" rel="noopener noreferrer">
            <PrevEv
              title="Beyond The Bench"
              desc="Get ready to ignite your passion for sports at BEYOND THE BENCH, an exciting event by E-Cell that blends the thrill of sports with creative challenges and engaging activities. Whether you're a die-hard fan or just curious to explore, this is your chance to dive into trivia, surprises, and unforgettable moments while connecting with fellow enthusiasts. Don't miss out on the perfect mix of strategy, fun, and teamwork."
              image={btb}
              date="3rd December 2024"
              venue="Seminar Hall(4th Block), MJCET"
            />
          </a>
        </div>
        {/* Previous Events Section */}
        <div className="mt-20 flex flex-col items-center justify-center bg-black">
          <div className="mb-10 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="my-[2px] h-[3px] w-[260px] rounded-lg bg-ecell-red-100"></div>
              <div className="mt-[2px] h-[3px] w-[320px] rounded-lg bg-ecell-red-100"></div>
            </div>
            <div className="absolute bg-black px-3 text-center text-[30px] font-bold text-white opacity-100">
              Previous Events
            </div>
          </div>
          <PrevEv
            title="Market Mayhem"
            desc={formatDescription(MARKET_MAYHEM_desc)}
            image={mayhem}
            date="29th October 2024, 1:45 PM Onwards"
            venue="Gulam Ahmed Hall, MJCET"
          />
          <PrevEv
            title="Game Of Investors"
            desc="Join the Ultimate Investment Challenge! Dive into the world of strategic investing with E-Cell’s “Game of Investors.” Discover the excitement of competitive finance as you invest in dynamic companies and make strategic decisions over 10 thrilling rounds. Boost your chances of winning fantastic rewards and the title of Best Investor!"
            image={goi}
            date="11th July 2024"
            venue="Gulam Ahmed Hall, MJCET"
          />
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
            desc=" A Web Development Adventure, our first pre-hackathon workshop! Dive into the world of web development over two days with guest speaker Syed Zohaib, Software Engineer at Apple, Hyderabad. Learn HTML, CSS, JavaScript, and Vue.js basics while building a web page and web app. Ready to kickstart your journey as a web developer? Join us!"
            date="10th & 11th November 2023"
            venue="CIC Lab, Block 2"
          />
        </div>
      </div>
    </div>
  );
};

export default PageEv;
