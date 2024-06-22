// src/components/ScreenSaver.tsx
import React, { createContext, useEffect, useState } from "react";

import DateTime from "./Clock";
import Display from "./KomfoventDisplay";
import Weather from "./Weather";

import scheduleDailyFetch from "../api/scheduler";
import { fetchTwoWeekWeatherData } from "../api/weatherApi";

interface WeatherContextProps {
  weatherData: any;
}

export const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

const ScreenSaver: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const updateWeatherData = async () => {
      const data = await fetchTwoWeekWeatherData();
      setWeatherData(data);
    };

    // Schedule daily fetch
    const job = scheduleDailyFetch(updateWeatherData);

    // Cleanup function to cancel job if component unmounts
    return () => {
      job.cancel(); // Cancel the scheduled job on component unmount
    };
  }, []);

  return (
    <div className="screen-saver">
      <div className="time-date-container">
        <DateTime />
        <Display />
      </div>
      <WeatherContext.Provider value={{ weatherData }}>
        <div className="weather-container">
          <Weather />
        </div>
      </WeatherContext.Provider>
    </div>
  );
};

export default ScreenSaver;
