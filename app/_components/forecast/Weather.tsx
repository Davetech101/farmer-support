"use client"

import { useEffect, useState } from "react";

const Weather = () => {

    const [weather, setWeather] = useState({})

    const apiKey = process.env.API_KEY

    // console.log(apiKey);
    
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
       "https://api.openweathermap.org/data/2.5/weather?lat=4.8671595&lon=7.039091315&appid=0402db1f9a770700585f5c7e361f48b5"
      );

      const body = await response.json();

      const weatherForecast = "weather"
      localStorage.setItem(weatherForecast, JSON.stringify(body));
      const lsWeather = JSON.parse(localStorage.getItem(weatherForecast));
      setWeather(lsWeather)
    };
    fetchWeather()
  }, []);

  console.log(weather);
  


  return (
    <div className="border border-borderColor bg-primaryGrey p-10 rounded-xl">
      <h3 className="text-3xl mb-4">Weather Forecast</h3>

      <p className="font-thin text-lg">
        Gain access to historical weather data, allowing farmers to review past
        weather patterns and trends. This information is valuable for making
        informed decisions about crop selection, planting times, and other
        aspects of farm management.
      </p>
    </div>
  );
};

export default Weather;
