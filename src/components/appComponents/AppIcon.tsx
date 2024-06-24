// src/components/AppIcon.tsx

import React from "react";

interface AppIconProps {
  appName: string;
  setOpenApp: (appName: string) => void;
  active: boolean;
}

const AppIcon: React.FC<AppIconProps> = ({ appName, setOpenApp, active }) => {
  return (
    <button onClick={() => setOpenApp(appName)} className={`app-icon ${active ? "active" : ""}`}>
      {appName}
    </button>
  );
};

export default AppIcon;
