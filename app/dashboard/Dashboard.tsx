"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { IoSearch } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SiHtmlacademy } from "react-icons/si";
import { CgInsights } from "react-icons/cg";
import { io } from "socket.io-client";
// import { socket } from "../socket";
const URL = "http://192.168.0.119:3000/messages";

const Dashboard = () => {
  // const [first, setfirst] = useState(second)
  const [searchTxt, setSearchTxt] = useState("");
  const [toggleFeature, setToggleFeature] = useState(false);
  const [searchType, setSearchType] = useState("Deep dive");
  const [searchIcon, setSearchIcon] = useState(
    <IoSearch className="text-4xl" />
  );
  const [token, setToken] = useState<string | null>(null)
  const socket = useMemo(() => io(URL, {
    auth: {
      token,
    },
    reconnection: true,
  }), [token])

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  useEffect(() => {
    console.log(socket);
    console.log("here")
    // socket.onAny((...d) => {
    //   console.log(d)
    // })
  }, [socket])

  const sampleQuestions = [
    "User-friendly AI interfaces for farmers",
    "What are effective pest control strategies for tomatoes",
    "Best methods for soil nutrient management and enrichment",
  ];

  const features = [
    {
      title: "Weather report",
      txt: "Get weather reports and history",
      svg: <TiWeatherPartlySunny className="text-5xl" />,
    },

    {
      title: "Academic Articles",
      txt: "Get resources from academic platform on researches made regarding the ",
      svg: <SiHtmlacademy className="text-5xl" />,
    },

    {
      title: "Product insight",
      txt: "Get insight into market information easily",
      svg: <CgInsights className="text-5xl" />,
    },
  ];

  return (
    <section className="flex justify-center items-center flex-col h-screen bg-primaryColor text-secondaryColor text-center p-8">
      <div className="flex justify-center items-center flex-col md:max-w-5xl">
        <h2 className="text-5xl mb-10 text-[#718096] md:text-[4rem]" onClick={() => {
          socket.emit("new", {})
          console.log("so")
          }}>
          Welcome to farm Insight
        </h2>

        <div className="border border-borderColor rounded-[2rem] h-[15rem] md:h-[20rem] w-full h-24 relative mb-10">
          <textarea
            name=""
            id=""
            className="w-full bg-transparent rounded-[2rem] text-2xl placeholder:text-2xl border-none text-secondaryColor h-full p-10 outline-tetiaryColor"
            placeholder="Ask anything"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          ></textarea>

          <div className="absolute bottom-[10px] px-[18px] text-2xl w-full flex items-center justify-between text-[#718096]">
            <button
              className="flex items-center gap-3"
              onClick={() => setToggleFeature((prev) => !prev)}
            >
              {searchIcon} <span>{searchType}</span>
            </button>{" "}
            <button className="bg-tetiaryColor text-white py-[8px] px-[15px] rounded">
              Search
            </button>
          </div>

          <div
            className={`${
              toggleFeature
                ? "h-[200px] opacity-1 visible"
                : "h-[0] opacity-0 invisible transition-all"
            }  absolute transition-all top-[90%] text-left left-[30px] text-secondaryColor bg-primaryColor p-[10px]`}
          >
            {features.map((feature, idx) => (
              <div
                className="flex gap-[10px] mb-[10px]"
                key={idx}
                onClick={(e) => {
                  setSearchIcon(feature.svg);
                  setSearchType(feature.title);
                  setToggleFeature((prev) => !prev);
                }}
              >
                <div className="">{feature.svg}</div>
                <div className="flex flex-col">
                  <span className="text-2xl">{feature.title}</span>{" "}
                  <span className="w-[150px]">{feature.txt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="flex items-center text-2xl gap-[10px] mb-[10px] md:text-[20px]">
            Sample questions to ask <FaPlay />
          </p>

          <div className="flex flex-wrap items-center justify-center gap-[10px]">
            {sampleQuestions.map((q, idx, arr) => (
              <button
                className="text-[12px] underline text-[#D3D3D3] md:text-[16px]"
                key={idx}
                onClick={() => setSearchTxt(q)}
              >
                {idx < arr.length - 1 ? `${q},` : q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
