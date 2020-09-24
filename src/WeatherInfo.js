import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import { Cat } from "react-kawaii";

export default function WeatherInfo(props) {
  let moods = Math.round(props.data.temperature);

  let catMood = "";
  if (moods > 32) {
    catMood = "ko";
  } else if (moods <= 32 && moods >= 26) {
    catMood = "happy";
  } else if (moods <= 26 && moods >= 21) {
    catMood = "lovestruck";
  } else if (moods <= 21 && moods >= 15) {
    catMood = "blissful";
  } else {
    catMood = "shocked";
  }

  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="float-right">
            <Cat size={200} mood={catMood} color="pink" />;
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
