import "./styles.css";
import React, { useState } from "react";

import Search from "./Search";

import WeatherInfo from "./WeatherInfo";

export default function App() {
  let [weather, setWeather] = useState({});
  return (
    <div class="container">
      <div class="container-wrapper">
        <div class="float-end">
          <img class="icon" src={weather.icon} alt="" />
          <h2 class="temperature">{Math.round(weather.temperature)}</h2>
          <span>
            {/* <a id="celciusLink" class="selected" href="">
              °C
            </a>{" "}
            |
            <a id="fahrenheitLink" href="#">
              °F
            </a> */}
          </span>
        </div>
        <Search setWeather={setWeather} />

        <h1 class="cityname">{weather.cityname}</h1>
        <WeatherInfo weather={weather} />
        <div id="forecast" class="row"></div>
      </div>
      <div>
        <a href="https://github.com/luperaltaa/weatherapp">Open-source code</a>
        by Lu Peralta
      </div>
    </div>
  );
}
