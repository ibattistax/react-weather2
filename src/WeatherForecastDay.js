import React from "react";

export default function WeatherForecastDay(props) {
  function maximum() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}˚`;
  }
  function minimum() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}˚`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }
  return (
    <div>
      <div className="forecast-date">{day()}</div>
      <div className="forecast-icon-container">
        <img
          src={props.data.condition.icon_url}
          className="forecast-icon"
          alt=""
        />
      </div>
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maximum()}</span>{" "}
        <span className="forecast-temperature-min">{minimum()}</span>
      </div>
    </div>
  );
}
