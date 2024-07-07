import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import moment from "moment";
// import moment from "moment-timezone";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "Saturday",
      time: moment().format("dddd [|] h:mm A"),
      description: response.data.condition.description,
      precipitation: "--",
      humidity: response.data.temperature.humidity,
      windspeed: response.data.wind.speed,
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon_url,
      city: response.data.city,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="form-input"
            id="form-input"
            onChange={handleCityChange}
          />
          <input
            type="submit"
            value="Search"
            className="form-button"
            id="form-button"
          />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
