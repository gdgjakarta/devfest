"use client";

import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate = new Date("2025-11-30T00:00:00").getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-5xl space-y-8">
        <div className="text-center space-y-4 flex flex-col items-center">
          <h2 className="w-5/6 md:w-fit p-4 rounded-xl border border-zinc-800 bg-sky-200 relative before:absolute before:w-7 before:h-full before:border before:border-zinc-800 before:-left-7 before:top-0 before:rounded-xl before:bg-sky-400 hover:before:h-2/3 before:transition-all after:absolute after:w-7 after:h-full after:border after:border-zinc-800 after:-right-7 after:bottom-0 after:rounded-xl after:bg-sky-400 hover:after:h-2/3 after:transition-all hover:px-8 transition-all">
            The biggest tech community & event in Jakarta
          </h2>
          <h3>We&apos;re almost ready!</h3>
          <p>November 30, 2025</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map(({ label, value }) => (
            <div
              key={label}
              className="relative overflow-hidden border-2 border-border bg-white p-6 md:p-8 transition-all duration-300 hover:scale-105 rounded-full"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative z-10 text-center space-y-2">
                <div className="text-5xl md:text-7xl font-bold tabular-nums text-zinc-800">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base font-medium uppercase tracking-wider">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full p-4 md:p-8 grid place-content-center">
          <PrimaryButton destination="#"> Secure your seat</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
