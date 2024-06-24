// src/components/weatherComponents/CurrentWeather.tsx

import React from "react";

interface CurrentConditions {
  temp: number;
  feelslike: number;
  conditions: string;
  icon: string;
  windspeed: number;
  humidity: number;
  sunrise: string;
  sunset: string;
}

interface Hour {
  datetime: string;
  temp: number;
  icon: string;
}

interface CurrentWeatherProps {
  resolvedAddress: string;
  currentConditions: CurrentConditions;
  hourlyForecast: Hour[];
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ resolvedAddress, currentConditions, hourlyForecast }) => {
  return (
    <div className="current-weather ios-weather-widget">
      <h2>{resolvedAddress}</h2>
      <div className="temperature">{currentConditions.temp}°</div>
      <div className="conditions">
        <img src={`icons/${currentConditions.icon}.png`} alt={currentConditions.icon} />
        <p>{currentConditions.conditions}</p>
      </div>
      <div className="additional-info">
        <p>Feels like: {currentConditions.feelslike}°</p>
        <p>Wind: {currentConditions.windspeed} km/h</p>
        <p>Humidity: {currentConditions.humidity}%</p>
      </div>
      <div className="hourly-forecast">
        {hourlyForecast.map((hour, index) => (
          <div key={index} className="hour">
            <p>{hour.datetime}</p>
            <p>{hour.temp}°</p>
            <img src={`icons/${hour.icon}.png`} alt={hour.icon} />
          </div>
        ))}
      </div>
      <div className="sunrise-sunset">
        <p>Sunrise: {currentConditions.sunrise}</p>
        <p>Sunset: {currentConditions.sunset}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
