import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let time = [
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];
  let date = days[props.date.getDay()];
  let hours = time[props.date.getHours()];
  let minutes = props.date.getMinutes();
  let amPm = "";

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (hours <= 11 || hours === 24) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }

  return (
    <div>
      {date} {hours}:{minutes} {amPm}
    </div>
  );
}
