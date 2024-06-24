import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "mobx-react";
import "./styles/index.scss";
import "./styles/ScreenSaverStyles.scss";
import "./styles/WeatherStyles.scss";
import App from "./App";
import store from "./stores/store"; // Import the MobX store

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find root element");
}
