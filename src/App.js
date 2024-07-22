import React from "react";
import Weather from "./Weather";
import PageFooter from "./PageFooter";
import Logo1 from "./logo1.jpg";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="logo-icon-container">
        <img
          src={Logo1}
          alt="GirlWeather Logo"
          width={400}
          className="d-block mx-auto img-fluid w-50"
        />
      </div>
      <div className="weather-app">
        <Weather defaultCity="LONDON" />
      </div>
      <PageFooter />
    </div>
  );
}
