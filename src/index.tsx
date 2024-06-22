import React from "react";
import ReactDOM from "react-dom";

import Clock from './Clock.jsx';

const App = () => {
  return (<Clock/>)
};

const rootElement = document.getElementById("app");
if (rootElement) {
  // Temporarily cast ReactDOM to any to bypass TypeScript error
  (ReactDOM as any).createRoot(rootElement).render(<App />);
}
