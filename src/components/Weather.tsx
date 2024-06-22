// src/components/Weather.tsx
import React, { useEffect, useState } from 'react';
import { fetchTwoWeekWeatherData } from '../api/weatherApi';

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

  const getWeatherData = async () => {
    try {
      const data = await fetchTwoWeekWeatherData();
      setWeatherData(data);
    } catch (err) {
      setError("Failed to fetch weather data");
    }
  };

  useEffect(() => {
    getWeatherData();
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
