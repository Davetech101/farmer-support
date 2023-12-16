import React from "react";

const Revolution = () => {
  const features = [
    {
      name: "AI Guidance for Crop Management",
      txt: "Navigate through complex agricultural decisions with confidence. Our AI system analyzes data on soil health, weather conditions, and historical trends to offer personalized recommendations for crop management.",
    },
    {
      name: "Real-time Weather and Pest Alerts",
      txt: "Receive instant alerts about changing weather conditions and potential pest threats. Stay one step ahead to protect your crops and maximize yields.",
    },
    {
      name: "Offline Storage",
      txt: "Save important articles and chat history for offline access. No need to worry about connectivity issues – your data is always within reach.",
    },
  ];

  return (
    <section className="bg-primaryColor px-10 xl:px-32 lg:py-32 py-24 text-white">
      <h1 className="text-5xl lg:text-7xl border-b border-borderColor pb-10">
        Revolutionising Agricultultre
      </h1>

      <div className="pt-10 flex flex-col-reverse lg:flex-row gap-10">
        <div className="z-10 lg:block bg-[url('/_assets/rev.jpg')] relative  w-full h-80 lg:h-auto bg-no-repeat bg-bottom bg-cover">
          <div className="absolute top-0 left-0 w-full h-full bg-black1"></div>
        </div>

        <div className="lg:w-9/12 bg-[url('/_assets/vector.png')] bg-no-repeat bg-contain bg-bottom bg-center">
          {features.map((feature, idx) => (
            <div className="mb-8 border-b border-borderColor pb-6" key={idx}>
              <h3 className="text-2xl mb-2 sm:text-5xl">{feature.name}</h3>
              <p className="text-lg sm:text-2xl font-thin">{feature.txt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Revolution;
