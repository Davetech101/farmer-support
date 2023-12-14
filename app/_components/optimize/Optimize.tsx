import React from "react";

import Image from "next/image";

const Optimize = () => {
  const items = [
    {
      id: "1",
      title: "Optimize Your Yield with AI!",
      txt: "Encourage users to experience the AI guidance for enhanced crop management.",
    },
    {
      id: "2",
      title: "Real-Time Decision Support",
      txt: "This proactive approach empowers farmers to make timely decisions, allowing them to protect their crops effectively and adapt their farming practices based on the latest information",
    },
    {
      id: "3",
      title: "Optimized Crop Management",
      txt: "Farmers benefit from optimized planting schedules, irrigation plans, and pest control strategies, ultimately leading to increased crop yields and improved overall farm productivity.",
    },
  ];

  return (
    <section className="bg-primaryColor px-10 xl:px-32 lg:py-32 py-24 text-white md:flex items-center justify-between gap-10">
      <div className="hidden md:block md:w-2/4">
        <Image
          src="/_assets/handPlanting.png"
          alt="Picture of plant"
          width={800}
          height={800}
          className="img3"
        />
      </div>

      <div className="lg:w-9/12 bg-[url('/_assets/vector.png')] bg-no-repeat bg-contain bg-bottom bg-center md:w-2/4">
        {items.map((item, idx) => (
          <div className="mb-8 border-b border-borderColor pb-6" key={idx}>
            <h1 className="text-4xl mb-4 sm:text-6xl">{item.id}</h1>
            <h3 className="text-2xl mb-2 sm:text-5xl">{item.title}</h3>
            <p className="text-lg sm:text-2xl font-thin">{item.txt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Optimize;
