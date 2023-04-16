import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState("London");

  function submit(event) {
    event.preventDefault();
    function showTemperature(response) {
      let now = new Date();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = days[now.getDay()];
      let hours = now.getHours();
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let minutes = now.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      let information = {
        time: `${day}  ${hours}:${minutes}`,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        cityname: response.data.name,
      };
      props.setWeather(information);
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2980ff43226d67e53abfcdb6d457dcc8&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <form onSubmit={submit} className="search-form">
      <div className="input-group mb-3 search">
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder=" enter the city"
            autoFocus="on"
            autoComplete="off"
            aria-label="Dollar amount (with dot and two decimal places)"
            id="search-text-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="input-group-text" />
          <span id="current-location" className="input-group-text">
            <i className="fa-solid fa-location-crosshairs"></i>
          </span>
        </div>
      </div>
    </form>
  );
}
