import React from "react";
import Weather from "./Weather";
import PageFooter from "./PageFooter";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather defaultCity="New York" />
      </div>
      <PageFooter />
    </div>
  );
}
