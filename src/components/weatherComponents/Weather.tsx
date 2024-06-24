// src/components/weatherComponents/Weather.tsx

import React, { useEffect, useState } from "react";
import { fetchTwoWeekWeatherData } from "../../api/WeatherApi";
import scheduleDailyFetch from "../../api/Scheduler";

import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

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

interface Day {
  datetime: string;
  tempmax: number;
  tempmin: number;
  conditions: string;
  icon: string;
  precipprob: number;
  hours: Hour[];
}

interface WeatherData {
  resolvedAddress: string;
  currentConditions: CurrentConditions;
  days: Day[];
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
      console.log("No weather data, calling fetchWeatherData");
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

  const { resolvedAddress, currentConditions, days } = weatherData;
  const hourlyForecast = days[0].hours.slice(0, 6); // First 6 hours for current day
  const dailyForecast = days.slice(1, 11); // Next 10 days

  return (
    <div>
      <CurrentWeather
        resolvedAddress={resolvedAddress}
        currentConditions={currentConditions}
        hourlyForecast={hourlyForecast}
      />
      <ForecastWeather dailyForecast={dailyForecast} />
    </div>
  );
};

export default Weather;
