import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState("");

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
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
    <form onSubmit={submit} class="search-form">
      <div class="input-group mb-3 search">
        <div class="input-group">
          <input
            type="search"
            class="form-control"
            placeholder=" enter the city"
            autofocus="on"
            autocomplete="off"
            aria-label="Dollar amount (with dot and two decimal places)"
            id="search-text-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" class="input-group-text" />
          <span id="current-location" class="input-group-text">
            <i class="fa-solid fa-location-crosshairs"></i>
          </span>
        </div>
      </div>
    </form>
  );
}
