import React from "react";
import ReactDOM from "react-dom/client";
import ProWeatherApp from "./ProWeatherApp";
import { registerSW } from "./pwa/register-sw";
import "./index.css";

registerSW();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProWeatherApp />
  </React.StrictMode>
);
