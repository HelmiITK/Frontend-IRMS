import { useEffect, useState } from "react";

const LiveClockComponent = () => {
  // Time
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: Date) => {
    let hours = time.getHours();
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // untuk menangani jam 0

    // Format hour with 2 digits for display
    const formattedHours = String(hours).padStart(2, "0");

    return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="text-2xl text-start flex justify-center py-2 px-7 font-semibold tracking-widest text-primary border border-slate-200 rounded-lg  drop-shadow-lg shadow-sm">
      <div>{formatTime(time)}</div>
    </div>
  );
};

export default LiveClockComponent;
