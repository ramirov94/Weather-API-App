import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Router } from "@reach/router";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-text">
          <h1>Open Weather API</h1>
        </span>
      </nav>
      <div className="container">
        <button type="button" className="btn btn-link">
          <Link to="/coachella">Coachella</Link>
        </button>
        <button type="button" className="btn btn-link">
          <Link to="/indio">Indio</Link>
        </button>
        <button type="button" className="btn btn-link">
          <Link to="/rome">Rome</Link>
        </button>
        <button type="button" className="btn btn-link">
          <Link to="/amsterdam">Amsterdam</Link>
        </button>

        <Router>
          <Weather path="/:city" />
        </Router>
        {/* {weather.name ? (
        <>
          <h4>{weather.name}</h4>
          <p>Current Temp: {weather.main.temp}</p>
        </>
      ) : null} */}
      </div>
    </>
  );
}

export default App;

//FIRST WAY TO USE FETCH (Converting Promise to Json) - NON AXIOS METHOD

// function App() {
//   const [weather, setWeather] = useState({});
//   useEffect(() => {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=Coachella&units=Imperial&appid=f0db06fdca411e1a26130cd319b4cfab"
//     )
//       .then((res) => {
//         console.log("First Response: ", res);
//         return res.json();
//       })
//       .then((secondResponse) => setWeather(secondResponse));
//   }, []);
//   return (
//     <div className="App">
//       <h1>Open Weather API</h1>
//       {weather.name ? (
//         <>
//           <h4>{weather.name}</h4>
//           <p>Current Temp: {weather.main.temp}</p>
//         </>
//       ) : null}
//     </div>
//   );
// }
