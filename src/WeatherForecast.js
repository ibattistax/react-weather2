import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
    setForecastData(response.data.daily);
  }
  function search() {
    const apiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index !== 0 && index < 6) {
              return (
                <div className="col-sm" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
