import Image from "next/image";

const Footer = () => {
  const btnStyles = "border font-thin px-8 py-3 rounded-lg md:text-2xl lg:text-4xl";

  return (
    <footer className="bg-primaryColor px-10 xl:px-32 lg:pt-32 pt-10 text-white">
      <div className="bg-tetiaryColor  rounded-xl p-10">
        <div className="flex flex-col items-center max-w-screen-sm mx-auto justify-center">
          <h3 className="text-2xl md:text-4xl lg:text-7xl  mb-3">Start Enjoying Agricultural AI</h3>

          <p className="text-center md:text-2xl lg:text-4xl font-thin text-xl mb-4">
            We are committed to empowering farmers with the tools they need to
            thrive in a dynamic agricultural landscape. Join us in harnessing
            the power of AI for a more sustainable and prosperous future.
          </p>

          <div className="flex gap-10">
            <button className={btnStyles}>Learn More</button>
            <button className={`bg-borderColor font-bold ${btnStyles}`}>
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        <Image
          src="/_assets/footVector.webp"
          alt="vector"
          width={5000}
          height={5000}
        />
      </div>
    </footer>
  );
};

export default Footer;
