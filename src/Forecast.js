import React from "react";
import "./Forecast.css";
import github from "./images/github.png"; // gives image path
import linkedin from "./images/linkedin.png"; // gives image path
import instagram from "./images/instagram.png"; // gives image path
export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="container" id="bottomContainer">
        <div class="col" id="forecast"></div>
      </div>
      <br />
      <div class="code">
        <a
          class="underline"
          href="https://github.com/McLovinCSUN/JS-Vanilla-finalProject-SheCodes"
          target="noopener noreferrer"
        >
          Open-Source Code
        </a>
        By Maria Martinez
      </div>
      <br />
      <div class="socialMedia">
        <a
          class="underline"
          href="https://github.com/McLovinCSUN "
          rel="noopener noreferrer"
        >
          <img src={github} width="45" heigth="45" alt="GitHub-logo" />
        </a>
        <a
          class="underline"
          href="https://www.linkedin.com/in/maria-martinez-8810081a2/ "
          rel="noopener noreferrer"
        >
          <img src={linkedin} width="50" heigth="50" alt="LinkedIn-logo" />
        </a>
        <a
          class="underline"
          href="https://www.instagram.com/maria_learning2code/?hl=en "
          rel="noopener noreferrer"
        >
          <img src={instagram} width="54" heigth="54" alt="Instagram-logo" />
        </a>
      </div>
    </div>
  );
}
