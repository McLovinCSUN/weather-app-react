import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weahter">
      <div class="info">
        <div id="city">
          <h1 id="currentCity">Los Angeles</h1>
          <p class="countries">,US</p>
          <div class="countries" id="country"></div>
        </div>
        <div id="date">Friday 08/27/2020</div>
        <small>
          <br />
          <button id="currentLocation" class="button">
            Current Location
          </button>
        </small>
      </div>
      <br />
      <div class="row">
        <div class="col">
          <div class="colOne">
            <img src="" alt="" id="icon" />
            <span id="temp"></span>
            <p id="description"></p>
          </div>
          <div id="degree" class="weatherTemp">
            80
            <a herf="#" id="fernLink" class="active">
              ℉
            </a>{" "}
            |
            <a herf="#" id="celLink">
              ℃
            </a>
          </div>
          <div class="colTwo">
            <div>
              Humidity: <span id="humidity">10</span>%
            </div>
            <br />
            <div>
              Wind: 4<span id="wind"></span>
              <small> km/hr</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
