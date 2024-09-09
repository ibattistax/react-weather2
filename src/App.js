import React from "react";
import Weather from "./Weather";
import PageFooter from "./PageFooter";
import Logo1 from "./logo1.jpg";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather defaultCity="LONDON" />
      </div>
      <PageFooter />
    </div>
  );
}
