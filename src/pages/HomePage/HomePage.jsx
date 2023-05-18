import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Partners from "../../components/Partners/Partners";
import Services from "../../components/Services/Services";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Partners />
      <Services />
    </div>
  );
};

export default HomePage;
