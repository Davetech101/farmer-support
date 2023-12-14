"use client";

import { useEffect, useState, useCallback } from "react";
import { TbWorldLongitude } from "react-icons/tb";
import { TbWorldLatitude } from "react-icons/tb";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [longLat, setLongLat] = useState({longitude: "", latitude: ""});

  const inputContStyles = "flex flex-col gap-3 mb-6";
  const labelStyles = "text-xl flex items-center gap-3";
  const inputStyles =
    "bg-transparent border border-borderColor focus:border-tetiaryColor outline-none p-3 rounded";

  const apiKey = process.env.API_KEY;

  // console.log(apiKey);

  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=4.8671595&lon=7.039091315&appid=0402db1f9a770700585f5c7e361f48b5"
      );

      const body = await response.json();

      const weatherForecast = "weather";
      localStorage.setItem(weatherForecast, JSON.stringify(body));
      const lsWeather = JSON.parse(localStorage.getItem(weatherForecast));
      setWeather(lsWeather);
    };
    fetchWeather();
  }, []);

  const onChangeHandler = useCallback((e: { target: any }) => {
    setLongLat((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(longLat);
    
  }, [longLat]);

  const submitHandler = useCallback((e: { preventDefault: () => void }) => {
    e.preventDefault();
  }, []);

  console.log(weather);

  return (
    <div className="border border-borderColor bg-primaryGrey p-10 rounded-xl">
      <div className="mb-10">
        <h3 className="text-3xl mb-4">Weather Forecast</h3>

        <p className="font-thin text-lg">
          Gain access to historical weather data, allowing farmers to review
          past weather patterns and trends. This information is valuable for
          making informed decisions about crop selection, planting times, and
          other aspects of farm management.
        </p>
      </div>

      <div className="">
        <h4 className="text-2xl mb-4">Get Your Forecast</h4>
        <form className="" onSubmit={submitHandler}>
          <div className={inputContStyles}>
            <label htmlFor="longitude" className={labelStyles}>
              Longitude{" "}
              <TbWorldLongitude className="text-4xl text-tetiaryColor" />
            </label>
            <input
              type="number"
              name="longitude"
              id="longitude"
              required
              onChange={onChangeHandler}
              className={inputStyles}
            />
          </div>

          <div className={inputContStyles}>
            <label htmlFor="latitude" className={labelStyles}>
              Latitude{" "}
              <TbWorldLatitude className="text-4xl text-tetiaryColor" />
            </label>
            <input
              type="number"
              name="latitude"
              id="latitude"
              required
              onChange={onChangeHandler}
              className={inputStyles}
            />
          </div>

          <button className="py-4 px-10 py-3 align-center block text-xl rounded-full border transition-all bg-gradient-to-l hover:bg-gradient-to-r from-tetiaryColor to-transparent">
            Check
          </button>
        </form>
      </div>
    </div>
  );
};

export default Weather;
