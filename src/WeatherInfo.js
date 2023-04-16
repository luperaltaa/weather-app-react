import React from "react";

export default function WeatherInfo(props) {
  return (
    <ul>
      <li id="time">Time: {props.weather.time ?? "--"}</li>
      <li id="humidity">Humidity: {Math.round(props.weather.humidity ?? 0)}</li>
      <li id="wind">Wind: {Math.round(props.weather.wind ?? 0)}</li>
    </ul>
  );
}
