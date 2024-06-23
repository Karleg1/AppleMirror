// src/components/Home.tsx

import React, { useState } from "react";
import App1 from "./appIcons/App1";
import App2 from "./appIcons/App2";

const Home: React.FC = () => {
  const [openApp, setOpenApp] = useState<string | null>(null);

  return (
    <div className="home">
      <div className="header"></div>
      <div className="main-container">
        <div className="time-date">
          <h1>11:30</h1>
          <p>Mon 11/06/2024</p>
        </div>
        <div className="weather-container">
          <h1>Weather 24 C</h1>
        </div>
        <div className="app-content">
          {openApp === "App1" && <App1 />}
          {openApp === "App2" && <App2 />}
        </div>
      </div>
      <div className="app-icons-container">
        <button onClick={() => setOpenApp("App1")} className="app-icon">
          App 1
        </button>
        <button onClick={() => setOpenApp("App2")} className="app-icon">
          App 2
        </button>
      </div>
    </div>
  );
};

export default Home;
