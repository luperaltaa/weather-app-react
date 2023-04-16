import React, { useState } from "react";
import "./styles.css";
export default function DegreeUnit(props) {
  let [unit, setUnit] = useState("c");

  function setCelcius() {
    setUnit("c");
    props.setUnit("c");
  }
  function setFahrenheit() {
    setUnit("f");
    props.setUnit("f");
  }
  return (
    <span>
      <button
        id="celciusLink"
        className={`link-button ${unit === "c" ? "selected" : null}`}
        onClick={setCelcius}
      >
        °C
      </button>{" "}
      |
      <button
        id="fahrenheitLink"
        className={`link-button ${unit === "f" ? "selected" : null}`}
        onClick={setFahrenheit}
      >
        °F
      </button>
    </span>
  );
}
