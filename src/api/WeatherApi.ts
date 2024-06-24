// src/api/weatherApi.ts

import axios from "axios";

const API_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tallinn?unitGroup=metric&key=CEKV9GRTCJRZC8UU53KNKT8DL&contentType=json';

const mockWeatherData = {
  resolvedAddress: "Tallinn, Estonia",
  currentConditions: {
    temp: 22,
    feelslike: 23,
    conditions: "Cloudy",
    icon: "cloudy",
    windspeed: 15,
    humidity: 60,
    sunrise: "04:04",
    sunset: "22:43",
  },
  days: [
    {
      datetime: "2024-06-23",
      tempmax: 22,
      tempmin: 15,
      conditions: "Partially cloudy",
      icon: "partly-cloudy-day",
      precipprob: 10,
      hours: [
        { datetime: "04:00", temp: 16, icon: "partly-cloudy-night" },
        { datetime: "06:00", temp: 18, icon: "partly-cloudy-day" },
        { datetime: "08:00", temp: 20, icon: "partly-cloudy-day" },
        { datetime: "10:00", temp: 21, icon: "partly-cloudy-day" },
        { datetime: "12:00", temp: 22, icon: "partly-cloudy-day" },
        { datetime: "14:00", temp: 23, icon: "partly-cloudy-day" },
      ],
    },
    {
      datetime: "2024-06-24",
      tempmax: 25,
      tempmin: 17,
      conditions: "Rain",
      icon: "rain",
      precipprob: 60,
      hours: [],
    },
    {
      datetime: "2024-06-25",
      tempmax: 24,
      tempmin: 16,
      conditions: "Rain",
      icon: "rain",
      precipprob: 60,
      hours: [],
    },
    {
      datetime: "2024-06-26",
      tempmax: 25,
      tempmin: 17,
      conditions: "Partially cloudy",
      icon: "partly-cloudy-day",
      precipprob: 40,
      hours: [],
    },
    {
      datetime: "2024-06-27",
      tempmax: 26,
      tempmin: 18,
      conditions: "Sunny",
      icon: "sunny",
      precipprob: 20,
      hours: [],
    },
    {
      datetime: "2024-06-28",
      tempmax: 28,
      tempmin: 19,
      conditions: "Sunny",
      icon: "sunny",
      precipprob: 10,
      hours: [],
    },
    {
      datetime: "2024-06-29",
      tempmax: 30,
      tempmin: 20,
      conditions: "Sunny",
      icon: "sunny",
      precipprob: 5,
      hours: [],
    },
    {
      datetime: "2024-06-30",
      tempmax: 29,
      tempmin: 21,
      conditions: "Rain",
      icon: "rain",
      precipprob: 70,
      hours: [],
    },
    {
      datetime: "2024-07-01",
      tempmax: 27,
      tempmin: 20,
      conditions: "Partially cloudy",
      icon: "partly-cloudy-day",
      precipprob: 50,
      hours: [],
    },
    {
      datetime: "2024-07-02",
      tempmax: 26,
      tempmin: 19,
      conditions: "Partially cloudy",
      icon: "partly-cloudy-day",
      precipprob: 30,
      hours: [],
    },
  ],
};

export const fetchTwoWeekWeatherData = async () => {
  // try {
  //   const response = await axios.get(API_URL);

  //   console.log("This is the weather response data", response.data);
  //   return response.data;
  // } catch (error) {
  //   console.error('Error fetching weather data', error);
  //   throw error;
  // }

  return mockWeatherData;
};
