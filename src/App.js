import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />

        <footer>
          Open-sourced by{" "}
          <a
            href="https://www.linkedin.com/in/maria-martinez-8810081a2/"
            target="noopener noreferrer"
          >
            <strong>Maria Martinez</strong>
          </a>{" "}
          on{" "}
          <a
            href="https://github.com/McLovinCSUN/weather-app-react"
            target="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://quirky-dijkstra-7f195b.netlify.app/"
            target="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
