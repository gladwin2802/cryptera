import React, { useState, useEffect } from "react";
const COUNTDOWN_TARGET = new Date("2025-02-21T09:00:00");
const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const secs = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, mins, secs };
};
const CountDownHome = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
  useEffect(() => {
      const timer = setInterval(() => {
          setTimeLeft(getTimeLeft());
      }, 1000);

      return () => {
          clearInterval(timer);
      };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center sm:-ml-12 py-10 -mt-12 ">
            <div className="flex flex-row justify-center gap-2">
                {Object.entries(timeLeft).map(([label, value]) => (
                    <div key={label} className="flex flex-col items-center ml-[0.5] sm:w-12 ">
                        <div className="text-xl sm:text-2xl flex items-center justify-center bg-gradient-to-r from-[#05FFA3] to-[#06BED8] text-white rounded-xl w-10 h-10 sm:w-12 sm:h-12 shadow-lg">
                            <span>{value}</span>
                        </div>
                        <span className="mt-2 text-sm sm:text-md font-light tracking-widest">{label}</span>
                    </div>
                ))}
            </div>
        </div>
  )
}
export default CountDownHome;
