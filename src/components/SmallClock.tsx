import React from "react";
import { observer } from "mobx-react-lite";
import store from "../stores/store";

const SmallClock: React.FC = observer(() => {
  const formatDate = (dateString: string) => {
    const [weekday, rest] = dateString.split(", ");
    const shortenedWeekday = weekday.charAt(0).toUpperCase();
    return `${shortenedWeekday}, ${rest}`;
  };

  return (
    <div className="small-clock">
      <div className="time">{store.currentTime}</div>
      <div className="date">{formatDate(store.currentDate)}</div>
    </div>
  );
});

export default SmallClock;
