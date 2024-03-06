// HomePage.jsx

import React from "react";
import "./HomePage.css";
import Hero from "../Hero/Hero";
import PopularDestinations from "../Hero/Wisata";

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <PopularDestinations />
      </div>
  );
};

export default HomePage;
