// src/components/Weather.tsx

import React, { useEffect, useState } from "react";
import { fetchTwoWeekWeatherData } from "../api/WeatherApi";
import scheduleDailyFetch from "../api/Scheduler";

interface WeatherData {
  resolvedAddress: string;
  currentConditions: {
    temp: number;
    feelslike: number;
    conditions: string;
  };
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async () => {
    try {
      const data = await fetchTwoWeekWeatherData();
      setWeatherData(data);
    } catch (err) {
      setError("Failed to fetch weather data");
    }
  };

  useEffect(() => {
    // Fetch weather data initially
    if (!weatherData) {
      console.log("No weather data, calling getWeatherData");
      fetchWeatherData();
    }

    // Schedule daily fetch
    const job = scheduleDailyFetch(fetchWeatherData);

    // Cleanup function to cancel job if component unmounts
    return () => {
      job.cancel(); // Cancel the scheduled job on component unmount
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { resolvedAddress, currentConditions } = weatherData;
  return (
    <div>
      <h1>Weather in {resolvedAddress}</h1>
      <p>Temperature: {currentConditions.temp}°C</p>
      <p>Feels like: {currentConditions.feelslike}°C</p>
      <p>Conditions: {currentConditions.conditions}</p>
    </div>
  );
};

export default Weather;
