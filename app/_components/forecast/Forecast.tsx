import React from "react";
import Weather from "./Weather";

const Forecast = () => {
  return (
    <section className="bg-primaryColor px-10 xl:px-32 lg:py-32 text-white md:flex">
      <div className="mb-8 w-2/4">
        <h1 className="text-4xl sm:5xl lg:text-7xl mb-6">Make informed Decisions</h1>
        <p className="text-lg sm:text-2xl font-thin">
          provides farmers with a comprehensive toolset to protect their crops
          against environmental challenges. The real-time nature of these
          features enables proactive decision-making, reducing the impact of
          pests and adverse weather conditions on crop yields.
        </p>
      </div>

      <div className="">
        <Weather />
      </div>
    </section>
  );
};

export default Forecast;
