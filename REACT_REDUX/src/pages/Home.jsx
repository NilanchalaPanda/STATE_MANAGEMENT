import React from "react";
import Features from "../components/Features";
import BrandLogos from "../components/BrandLogos";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="mx-10 mt-10 md:mx-10">
      <HeroSection />
      <BrandLogos />
      <Features />
    </div>
  );
};

export default Home;
