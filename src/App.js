import "./styles.css";
import React, { useState } from "react";

import Search from "./Search";
import DegreeUnit from "./DegreeUnit";
import WeatherInfo from "./WeatherInfo";

export default function App() {
  let [weather, setWeather] = useState({});
  let [unit, setUnit] = useState("c");

  function getTemperature() {
    if (!weather.temperature) return 0;
    if (unit === "c") {
      return weather.temperature;
    } else {
      return (weather.temperature * 9) / 5 + 32;
    }
  }

  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="float-end">
          <img className="icon" src={weather.icon ?? ""} alt="" />
          <h2 className="temperature">{Math.round(getTemperature())}</h2>
          <DegreeUnit setUnit={setUnit} />
        </div>
        <Search setWeather={setWeather} />

        <h1 className="cityname">{weather.cityname}</h1>
        <WeatherInfo weather={weather} />
      </div>
      <div>
        <a href="https://github.com/luperaltaa/weatherapp">Open-source code</a>
        by Lu Peralta
      </div>
    </div>
  );
}
