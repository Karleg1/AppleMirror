// src/components/Clock.tsx
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import store from "../stores/store";

const DateTime = observer(() => {
  const [hoursMinutes, setHoursMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      store.setTime(timeString);

      const [h, m, s] = timeString.split(":");
      const hoursMinutes = `${h}:${m}`;
      setHoursMinutes(hoursMinutes);
      setSeconds(s);

      store.setDate(now.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        <span className="hours-minutes">{hoursMinutes}</span>
        <span className="seconds">:{seconds}</span>
      </div>
      <div className="date">
        <p>Date: {store.currentDate}</p>
      </div>
    </div>
  );
});

export default DateTime;
