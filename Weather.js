import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = (props) => {
  const [weather, setWeather] = useState({});
  //AXIOS METHOD
  useEffect(() => {
    console.log(props.city);
    axios
      .get(
        //string interpolation
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=Imperial&appid=f0db06fdca411e1a26130cd319b4cfab`
      )
      .then((res) => {
        setWeather(res.data);
      });
  }, [props]);
  return (
    <>
      {weather.name ? (
        <div className="jumbotron">
          <h1 className="display-4">{weather.name}</h1>
          <p>
            <b>Temperature</b>: {weather.main.temp}
          </p>
          <p>
            <b>Feels Like</b>: {weather.main.feels_like}
          </p>
          <p>
            <b>Other weather info</b>: {weather.weather[0].description}
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
      ) : null}
    </>
  );
};

export default Weather;
