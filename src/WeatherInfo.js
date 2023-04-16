import React from "react";

export default function WeatherInfo(props) {
  function resolveDayName(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function showForecast() {
    if (!props.weather.forecast) return null;
    let forecastColumns = props.weather.forecast.map((dayForecast, index) => {
      if (index > 5) return null;
      console.log(dayForecast);
      return (
        <div className="col forecast-col">
          {resolveDayName(dayForecast.dt)} <br />
          <img
            className="forecast-icon"
            src={`http://openweathermap.org/img/wn/${dayForecast.weather[0].icon}.png`}
            alt=""
          />
          <br />
          <div className="degrees">
            {Math.round(dayForecast.temp.min)}°{" "}
            <strong> {Math.round(dayForecast.temp.max)}°</strong>
          </div>
        </div>
      );
    });
    return (
      <div id="forecast" className="row">
        {forecastColumns}
      </div>
    );
  }
  return (
    <div>
      <ul>
        <li id="time">Time: {props.weather.time ?? "--"}</li>
        <li id="humidity">
          Humidity: {Math.round(props.weather.humidity ?? 0)}
        </li>
        <li id="wind">Wind: {Math.round(props.weather.wind ?? 0)}</li>
      </ul>
      {showForecast()}
    </div>
  );
}
