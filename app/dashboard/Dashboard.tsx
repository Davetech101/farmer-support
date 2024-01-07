"use client";

import { useState, useCallback } from "react";
import { IoSearch } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";


const Dashboard = () => {
  return (
    <section className=''>
        <h2 className=''>Welcome to farm Insight</h2>

        <div className="">
        <textarea name="" id="" className=""></textarea>

        <button className=""><IoSearch /> <span className="">Deep Dive</span></button>
        </div>

        <p className="">Sample questions to ask <FaPlay /></p>
    </section>
  )
}

export default Dashboard