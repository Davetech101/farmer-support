import Link from "next/link";
import React from "react";

const Hero = () => {

  const buttonStyles = "py-4 px-10 text-xl rounded-full border transition-all";

  const buttonStyles2 = "py-4 px-10 text-lg rounded-full border transition-all hover:border-tetiaryColor";


  const rectangleStyles1 =
    "w-full h-6 bg-gradient-to-r hover:bg-gradient-to-l from-tetiaryColor to-primaryColor transition-all";

  const rectangleStyles2 =
    "w-full h-6 bg-gradient-to-l hover:bg-gradient-to-r from-tetiaryColor to-primaryColor transition-all";

  return (
    <section className="bg-primaryColor lg:block bg-[url('/_assets/vector.png')] bg-no-repeat bg-cover bg-center text-secondaryColor pt-40 p-10 lg:flex lg:gap-10 xl:p-36 xl:pt-40">
      <div className="lg:w-5/6">
        <div className="">
          <h1 className="text-5xl sm:text-7xl mb-6 sm:mb-8">
            Empowering Farmers with Intelligent Agricultural Insights
          </h1>

          <p className="text-xl sm:text-2xl sm:w-8/12 font-thin mb-4 sm:mb-8">
            Cutting-edge technology designed to revolutionize the way farmers
            make decisions and manage their crops.
          </p>
        </div>

        <div className="flex items-center gap-6 mb-10">
          <button
            className={`bg-gradient-to-l hover:bg-gradient-to-r from-tetiaryColor to-black1  ${buttonStyles}`}
          >
            Learn More
          </button>
          <Link href={"/signup"}
            className={`bg-gradient-to-r hover:bg-gradient-to-l from-tetiaryColor to-black1 ${buttonStyles}`}
          >
            Get Started
          </Link>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className={rectangleStyles1}></div>
          <div className={rectangleStyles1}></div>
          <div className={rectangleStyles2}></div>
          <div className={rectangleStyles2}></div>
        </div>
      </div>

      <div className="hidden lg:block bg-[url('/_assets/hero.jpg')] relative  w-full h-auto bg-no-repeat bg-cover  rounded-ss-full rounded-es-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black1"></div>

        <div className="absolute bottom-10 right-4 flex items-center gap-4">
            <button className={buttonStyles2}>Get Weather report</button>
            <button className={buttonStyles2}>AI Model</button>
            <button className={buttonStyles2}>Knowledge Base</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
