import React, { Fragment } from "react";
import Hero from "../../components/Hero/Hero";
import Partners from "../../components/Partners/Partners";
import Services from "../../components/Services/Services";
import VideoPresentation from "../../components/VideoPresentation/VideoPresentation";
import Feature from "../../components/Feature/Feature";
import Pricing from "../../components/Pricing/Pricing";
import Feedbacks from "../../components/Feedbacks/Feedbacks";
// import MeetTheTeam from "../../components/MeetTheTeam/MeetTheTeam";
import Payment from "../../components/Payment/Payment";
import Subscribe from "../../components/Subscribe/Subscribe";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Partners />
      <Services />
      <VideoPresentation />
      <Feature />
      <Pricing />
      <Feedbacks />
      {/* <MeetTheTeam /> */}
      <Payment />
      <Subscribe />
    </Fragment>
  );
};

export default HomePage;
