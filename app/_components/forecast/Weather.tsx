"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { TbWorldLongitude } from "react-icons/tb";
import { TbWorldLatitude } from "react-icons/tb";

interface WeatherReturnValue {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const Weather = () => {
  const [weather, setWeather] = useState<WeatherReturnValue | null>(null);

  const [formData, setFormData] = useState({ longitude: "", latitude: "" });

  const inputContStyles = "flex flex-col gap-3 mb-6";
  const labelStyles = "text-xl flex items-center gap-3";
  const inputStyles =
    "bg-transparent border border-borderColor focus:border-tetiaryColor outline-none p-3 rounded";

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  // 7.039091315
  // 4.8671595

  const onChangeHandler = useCallback(
    (e: { target: any }) => {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      console.log(formData);
    },
    [formData]
  );

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${formData.latitude}&lon=${formData.longitude}&appid=${apiKey}`
      );

      const body = await response.json();

      const weatherForecast = "weather";
      localStorage.setItem(weatherForecast, JSON.stringify(body));
      let lsWeather: string | null | WeatherReturnValue =
        localStorage.getItem(weatherForecast);
      if (lsWeather !== null) {
        lsWeather = JSON.parse(lsWeather);
        setWeather(lsWeather as WeatherReturnValue);
      }
    };
    fetchWeather();
  };

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
        <form className="mb-14" onSubmit={submitHandler}>
          <div className={inputContStyles}>
            <label htmlFor="longitude" className={labelStyles}>
              Longitude{" "}
              <TbWorldLongitude className="text-4xl text-tetiaryColor" />
            </label>
            <input
              // type="number"
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
              // type="number"
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

        <div className="">
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="">
              {weather?.name}, {weather?.sys.country}
            </h3>
            <p className="">Longitude: {weather?.coord.lon}</p>
            <p className="">Latitude: {weather?.coord.lat}</p>
          </div>

          <div className="">
            <h3 className="">Weather: {weather?.weather[0].main}</h3>

            <p className="">Disc: {weather?.weather[0].description}</p>

            <p className="">Temp: {weather && Math.round(weather.main.temp - 273.15)}ºC</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
