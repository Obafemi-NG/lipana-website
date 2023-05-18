import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Partners from "../../components/Partners/Partners";
import Services from "../../components/Services/Services";
import VideoPresentation from "../../components/VideoPresentation/VideoPresentation";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Partners />
      <Services />
      <VideoPresentation />
    </div>
  );
};

export default HomePage;
