import React, { Fragment } from "react";
import { Blog } from "../Components/HomePage/Blog";
import { FreeTrial } from "../Components/HomePage/FreeTrial";
import { HomeFeatures } from "../Components/HomePage/HomeFeatures";
import { HowItWorks } from "../Components/HomePage/HowItWorks";
import { Pricing } from "../Components/HomePage/Pricing";
import { StartHome } from "../Components/HomePage/StartHome";
import { Testimonial } from "../Components/HomePage/Testimonial";
import { Footer } from "../Layouts/Footer";
import { Helmet } from "react-helmet";

export const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>SaaSup-Home</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene."
        />
      </Helmet>
      <StartHome />
      <HomeFeatures />
      <HowItWorks />
      <Testimonial />
      <Pricing />
      <FreeTrial />
      <Blog />
      <Footer />
    </Fragment>
  );
};
