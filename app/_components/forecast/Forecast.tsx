import React from "react";
import Weather from "./Weather";
import Pest from "./Pest";

const Forecast = () => {
  return (
    <section className="bg-primaryColor px-10 xl:px-32 lg:py-32  text-white">
      <div className="mb-8">
        <h1 className="text-4xl lg:text-7xl mb-6">Make informed Decisions</h1>
        <p className="text-lg font-thin">
          provides farmers with a comprehensive toolset to protect their crops
          against environmental challenges. The real-time nature of these
          features enables proactive decision-making, reducing the impact of
          pests and adverse weather conditions on crop yields.
        </p>
      </div>

      <div className="">
        <Weather />
        <Pest />
      </div>

      <button className="">Get Started</button>
    </section>
  );
};

export default Forecast;
