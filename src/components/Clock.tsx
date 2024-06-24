// src/components/Clock.tsx

import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import store from "../stores/store";

const DateTime = observer(() => {
  const [hoursMinutes, setHoursMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const capitalizeFirstWord = (string:string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-GB");
      store.setTime(timeString);

      const [h, m, s] = timeString.split(":");
      const hoursMinutes = `${h}:${m}`;
      setHoursMinutes(hoursMinutes);
      setSeconds(s);

      const formattedDate = now.toLocaleDateString("et-EE", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });

      store.setDate(capitalizeFirstWord(formattedDate));

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
        <p>{store.currentDate}</p>
      </div>
    </div>
  );
});

export default DateTime;
