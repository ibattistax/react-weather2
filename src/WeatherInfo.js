import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weather-app-data">
      <div>
        <h1 className="weather-app-city" id="city">
          {props.data.city}
        </h1>
        <p className="weather-app-details">
          <span id="time">{props.data.time}</span> |{" "}
          <span id="description" className="text-capitalize">
            {props.data.description}
          </span>
          <br />
          <br />
          <strong>Humidity </strong>
          <span id="humidity">{props.data.humidity}%</span>
          <br />
          <strong>Wind</strong>
          <span id="wind-speed"> {props.data.windspeed} m/s</span>
        </p>
      </div>
      <div className="weather-app-temperature">
        <div id="icon">
          <img src={props.data.icon} className="weather-app-icon" alt="" />
        </div>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
    </div>
  );
}
