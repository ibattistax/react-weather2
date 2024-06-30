import React, { useState } from "react";
import axios from "axios";
import "./CurrentTemperature.css";
import moment from "moment";

export default function CurrentTemperature() {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      date: "Saturday",
      time: moment().format("dddd [|] h:mm A"),
      description: response.data.condition.description,
      precipitation: "--",
      humidity: response.data.temperature.humidity,
      windspeed: response.data.wind.speed,
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon_url,
    });
  }

  function search() {
    const apiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="CurrentTemperature">
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city" id="city">
              London
            </h1>
            <p className="weather-app-details">
              <span id="time">{weather.time}</span> |{" "}
              <span id="description" className="text-capitalize">
                {weather.description}
              </span>
              <br />
              <br />
              <strong>Humidity </strong>
              <span id="humidity">{weather.humidity}%</span>
              <br />
              <strong>Wind</strong>
              <span id="wind-speed"> {weather.windspeed} m/s</span>
            </p>
          </div>
          <div className="weather-app-temperature">
            <div id="icon">
              <img src={weather.icon} class="weather-app-icon" alt="" />
            </div>
            <div className="weather-app-temperature-value" id="temperature">
              {Math.round(weather.temperature)}
            </div>
            <div className="weather-app-units">ºC | ºF</div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
