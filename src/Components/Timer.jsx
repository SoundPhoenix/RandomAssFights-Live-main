import React, { useState, useEffect, useCallback } from "react";

function CountdownTimer({ targetDate }) {
  const calculateTimePassed = useCallback(() => {
    const now = new Date();
    const targetDateObject = new Date(targetDate);
    const timeDifference = now - targetDateObject;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);

    return {
      months: months % 12,
      weeks: weeks % 4,
      days: days % 7,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };
  }, [targetDate]);

  const [countup, setCountup] = useState(calculateTimePassed);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountup(calculateTimePassed);
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimePassed]);

  return (
    <div className="bg-nav-black p-[17px] text-center font-bold text-white font-abril-fatface font-rubik">
      {`The last fight was: 
        ${countup.months > 0 ? `${countup.months} months,` : ""}
        ${countup.weeks > 0 ? `${countup.weeks} weeks,` : ""} 
        ${countup.days > 0 ? `${countup.days} days,` : ""} 
        ${countup.hours > 0 ? `${countup.hours} hours,` : ""} 
        ${countup.minutes > 0 ? `${countup.minutes} minutes,` : ""} 
        ${countup.seconds} seconds ago`}
    </div>
  );
}

export default CountdownTimer;
//Code made by Josh Severo me@joshsevero.dev