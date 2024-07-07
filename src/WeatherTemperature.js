import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="weather-app-temperature-value">
          {Math.round(props.celsius)}
        </div>
        <div className="weather-app-units">
          <span className="celsiusTemp">
            <strong>ºC </strong>
          </span>
          |{" "}
          <span className="fahrenheitTemp">
            <a onClick={showFahrenheit}>ºF</a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="weather-app-temperature-value">
          {Math.round(fahrenheit())}
        </div>
        <div className="weather-app-units">
          <span className="celsiusTemp">
            <a onClick={showCelsius}>ºC </a>
          </span>
          |{" "}
          <span className="fahrenheitTemp">
            <strong>ºF</strong>
          </span>
        </div>
      </div>
    );
  }
}
