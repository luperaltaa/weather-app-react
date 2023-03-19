import "./styles.css";
import React from "react";

import Search from "./Search";

import WeatherInfo from "./WeatherInfo";

export default function App() {
  return (
    <div class="container">
      <div class="container-wrapper">
        <div class="float-end">
          <img
            class="icon"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
          />
          <h2 class="temperature">--</h2>
          <span>
            <a id="celciusLink" class="selected" href="#">
              °C
            </a>{" "}
            |
            <a id="fahrenheitLink" href="#">
              °F
            </a>
          </span>
        </div>
        <Search />

        <h1 class="cityname">--</h1>
        <WeatherInfo />
        <div id="forecast" class="row"></div>
      </div>
      <div>
        <a href="https://github.com/luperaltaa/weatherapp">Open-source code</a>
        by Lu Peralta
      </div>
    </div>
  );
}
