import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "12/22/2023";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  const intervalRef = useRef(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="bg-[#031c35] mx-[20px] lg:mt-[100px]">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
          Time left to register!
        </h2>
      </div>
      <div className="w-full max-w-5xl mx-auto flex items-center bg-white rounded">
        <CountdownItem num={remaining.days} text="days" />
        <CountdownItem num={remaining.hours} text="hours" />
        <CountdownItem num={remaining.minutes} text="minutes" />
        <CountdownItem num={remaining.seconds} text="seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }) => {
  return (
    <div className="poppins w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center border-r-[1px] border-slate-200">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-black font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base font-light text-slate-500">
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;
