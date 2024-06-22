// src/api/scheduler.ts
import schedule from "node-schedule";
import { fetchTwoWeekWeatherData } from "./weatherApi";

const scheduleDailyFetch = (callback: (data: any) => void) => {
  // Schedule task to run every day at 1:00 AM
  const job = schedule.scheduleJob("0 1 * * *", async () => {
    try {
      const data = await fetchTwoWeekWeatherData();
      callback(data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  });

  // Optionally, return the job instance if you need to manipulate it later
  return job;
};

export default scheduleDailyFetch;
