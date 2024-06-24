// src/components/weatherComponents/ForecastWeather.tsx

import React from "react";

interface Day {
  datetime: string;
  tempmax: number;
  tempmin: number;
  conditions: string;
  icon: string;
  precipprob: number;
}

interface ForecastWeatherProps {
  dailyForecast: Day[];
}

const ForecastWeather: React.FC<ForecastWeatherProps> = ({ dailyForecast }) => {
  return (
    <div className="forecast-weather">
      {dailyForecast.map((day, index) => (
        <div key={index} className="day">
          <p>{day.datetime}</p>
          <p>
            {day.tempmax}° / {day.tempmin}°
          </p>
          <p>{day.conditions}</p>
          <p>{day.precipprob}% chance of precipitation</p>
          <img src={`icons/${day.icon}.png`} alt={day.icon} />
        </div>
      ))}
    </div>
  );
};

export default ForecastWeather;
