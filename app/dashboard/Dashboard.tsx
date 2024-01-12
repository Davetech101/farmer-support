"use client";

import { useState, useCallback } from "react";
import { IoSearch } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SiHtmlacademy } from "react-icons/si";
import { CgInsights } from "react-icons/cg";

const sampleQuestions = [
  "User-friendly AI interfaces for farmers",
  "What are effective pest control strategies for tomatoes",
  "Best methods for soil nutrient management and enrichment",
];

const Dashboard = () => {
  // const [first, setfirst] = useState(second)
  const [toggleFeature, setToggleFeature] = useState(false);
  const [searchType, setSearchType] = useState("Deep dive");
  const [searchIcon, setSearchIcon] = useState(
    <IoSearch className="text-4xl" />
  );

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
      <h2 className="text-5xl mb-10 text-[#718096]">Welcome to farm Insight</h2>

      <div className="border border-borderColor rounded-lg h-[15rem] w-full h-24 relative mb-10">
        <textarea
          name=""
          id=""
          className="w-full  text-2xl placeholder:text-2xl border-none text-primaryColor h-full p-10 outline-tetiaryColor"
          placeholder="Ask anything"
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

      <p className="">
        Sample questions to ask <FaPlay />
      </p>
    </section>
  );
};

export default Dashboard;
