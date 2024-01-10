"use client";

import { useState, useCallback } from "react";
import { IoSearch } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

const sampleQuestions = [
  "User-friendly AI interfaces for farmers", "What are effective pest control strategies for tomatoes", "Best methods for soil nutrient management and enrichment"
]


const Dashboard = () => {
  return (
    <section className='flex justify-center items-center flex-col h-screen bg-primaryColor text-secondaryColor text-center p-8'>
        <h2 className='text-5xl mb-10 text-[#718096]'>Welcome to farm Insight</h2>

        <div className="border border-borderColor rounded-lg w-full h-24 overflow-hidden relative">
        <textarea name="" id="" className="w-full min-h-72 placeholder:text-2xl border-none text-primaryColor h-full p-4 outline-tetiaryColor" placeholder="Ask anything"></textarea>

        <button className="absolute bottom-0 left-3 gap-3 text-2xl flex items-center text-[#718096]"><IoSearch /> <span>Deep Dive</span></button>
        </div>

        <p className="">Sample questions to ask <FaPlay /></p>
    </section>
  )
}

export default Dashboard