import React, { Fragment } from "react";
import { AboutCompany } from "../Components/AboutUs/AboutCompany";
import { Career } from "../Components/AboutUs/Career";
import { OurValues } from "../Components/AboutUs/OurValues";
import { Footer } from "../Layouts/Footer";

export const AboutUs = () => {
  return (
    <Fragment>
      <AboutCompany />
      <OurValues />
      <Career />
      <Footer />
    </Fragment>
  );
};
