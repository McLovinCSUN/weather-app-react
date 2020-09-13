import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  function handleresponse(response) {
    console.log(response.data);
    alert(`the wheather in Los Angeles is ${response.data.list[0].main.temp}`);
  }
  let apiKey = "4c362e7f4f84ef4ab0ee164594102485";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Los Angeles&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleresponse);
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
