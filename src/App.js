import React from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="container" id="topContainer">
          <Search />
          <Weather />
        </div>
        <br />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
