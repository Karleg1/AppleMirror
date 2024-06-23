// src/components/ScreenSaver.tsx
import React from "react";

import Clock from "./Clock";
import Display from "./KomfoventDisplay";
import Weather from "./Weather";

const ScreenSaver: React.FC = () => {
  return (
    <div className="screen-saver">
      <div className="time-date-container">
        <Clock />
        <Display />
      </div>
      <div className="weather-container">
        <Weather />
      </div>
    </div>
  );
};

export default ScreenSaver;
