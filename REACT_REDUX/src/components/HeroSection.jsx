import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-evenly pt-5 px-2 pb-0 bg-secondary/20 rounded-3xl md:mx-20 md:p-10 md:pb-0">
      <h1 className="flex items-center justify-center text-5xl font-black leading-[125%] sm:text-5xl md:text-[96px] md:leading-[125%]">
        LET’S
        <br /> EXPLORE <br />
        UNIQUE
        <br /> CLOTHES.
      </h1>

      <div className="md:w-[600px]">
        <img src="./Shopping-Banner.png" alt="BANNER IMAGE" />
      </div>
    </section>
  );
};

export default HeroSection;
