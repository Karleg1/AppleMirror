// src/components/Home.tsx

import React, { useState, useEffect } from "react";

import App1 from "./appComponents/App1";
import App2 from "./appComponents/App2";
import Clock from "./Clock";
import SmallClock from "./SmallClock";
import AppIcon from "./appComponents/AppIcon";

const Home: React.FC = () => {
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [showTime, setShowTime] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleAppIconClick = (appName: string) => {
    setOpenApp(appName);
  };

  useEffect(() => {
    console.log(`Current open app: ${openApp}`);
    if (openApp) {
      setShowContent(true);
      setShowTime(false);
    } else {
      setShowContent(false);
      setShowTime(true);
    }
  }, [openApp]);

  return (
    <div className="home">
      {showContent && <SmallClock />}
      <div className="main-container">
        <div className="time-date" style={{ display: showTime ? "flex" : "none" }}>
          <Clock />
        </div>
        <div className="app-content" style={{ display: showContent ? "flex" : "none" }}>
          {openApp === "App1" && <App1 />}
          {openApp === "App2" && <App2 />}
        </div>
      </div>
      <button type="button" className="back-button" onClick={() => setOpenApp(null)}>
        Back
      </button>
      <div className="app-icons-container">
        <AppIcon appName="App1" setOpenApp={handleAppIconClick} active={openApp === "App1"} />
        <AppIcon appName="App2" setOpenApp={handleAppIconClick} active={openApp === "App2"} />
        <AppIcon appName="App3" setOpenApp={handleAppIconClick} active={openApp === "App3"} />
        <AppIcon appName="App4" setOpenApp={handleAppIconClick} active={openApp === "App4"} />
      </div>
    </div>
  );
};

export default Home;
