import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  return (
    <div className="WeatherTemperature">
      <div className="weather-app-temperature-value">
        {Math.round(props.celsius)}
      </div>
      <div className="weather-app-units">
        <span className="celsiusTemp">ºC </span>|{" "}
        <span className="fahrenheitTemp">ºF</span>
      </div>
    </div>
  );
}
