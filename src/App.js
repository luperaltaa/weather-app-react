import "./styles.css";
import React, { useState } from "react";

import Search from "./Search";

import WeatherInfo from "./WeatherInfo";

export default function App() {
  let [weather, setWeather] = useState({});
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="float-end">
          <img className="icon" src={weather.icon ?? ""} alt="" />
          <h2 className="temperature">
            {Math.round(weather.temperature ?? 0)}
          </h2>
          <span>
            {/* <a id="celciusLink" className="selected" href="">
              °C
            </a>{" "}
            |
            <a id="fahrenheitLink" href="#">
              °F
            </a> */}
          </span>
        </div>
        <Search setWeather={setWeather} />

        <h1 className="cityname">{weather.cityname}</h1>
        <WeatherInfo weather={weather} />
        <div id="forecast" className="row"></div>
      </div>
      <div>
        <a href="https://github.com/luperaltaa/weatherapp">Open-source code</a>
        by Lu Peralta
      </div>
    </div>
  );
}
