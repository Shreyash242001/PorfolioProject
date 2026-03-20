import { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="hidden md:flex items-center gap-0.5 font-mono-code text-xs tracking-wider select-none">
      <span className="live-clock-digit">{hours}</span>
      <span className="live-clock-colon">:</span>
      <span className="live-clock-digit">{minutes}</span>
      <span className="live-clock-colon">:</span>
      <span className="live-clock-digit">{seconds}</span>
    </div>
  );
};

export default LiveClock;
