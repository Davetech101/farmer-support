import React from "react";

const buttonStyles = "py-4 px-10 text-xl rounded-full border"

const rectangleStyles1 = "w-full h-6 bg-gradient-to-r from-tetiaryColor to-primaryColor"

const rectangleStyles2 = "w-full h-6 bg-gradient-to-l from-tetiaryColor to-primaryColor"



const Hero = () => {
  return (
    <section className="bg-primaryColor text-secondaryColor pt-40 p-10">
      <div className="">
       <h1 className="text-5xl mb-6">
         Empowering Farmers with Intelligent Agricultural Insights
       </h1>

       <p className="text-xl font-thin mb-4">Cutting-edge technology designed to revolutionize the way farmers make decisions and manage their crops.</p>
      </div>

      <div className="flex items-center gap-6 mb-10">
        <button className={`bg-gradient-to-l from-tetiaryColor to-black1  ${buttonStyles}`}>Learn More</button>
        <button className={`bg-gradient-to-r from-tetiaryColor to-black1 ${buttonStyles}`}>Get Started</button>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className={rectangleStyles1}></div>
        <div className={rectangleStyles1}></div>
        <div className={rectangleStyles2}></div>
        <div className={rectangleStyles2}></div>
      </div>
    </section>
  );
};

export default Hero;
