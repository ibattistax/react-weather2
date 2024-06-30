import React from "react";
import Header from "./Header";
import CurrentTemperature from "./CurrentTemperature";
import WeatherForecast from "./WeatherForecast";
import PageFooter from "./PageFooter";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Header />
        <CurrentTemperature defaultCity="London" />
        <WeatherForecast />
      </div>
      <PageFooter />
    </div>
  );
}
