// src/api/weatherApi.ts

import axios from "axios";

const API_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tallinn?unitGroup=metric&key=CEKV9GRTCJRZC8UU53KNKT8DL&contentType=json';

const mockWeatherData = {
  resolvedAddress: "Tallinn, Estonia",
  currentConditions: {
    temp: 22,
    feelslike: 23,
    conditions: "Cloudy",
  },
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
