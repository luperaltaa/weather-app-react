import React from "react";

export default function Search() {
  return (
    <form class="search-form">
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
