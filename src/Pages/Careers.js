import React, { Fragment } from "react";
import { CareersHead } from "../Components/Careers/CareersHead";
import { CareerValues } from "../Components/Careers/CareerValues";
import { JobOpenings } from "../Components/Careers/JobOpenings";
import { Footer } from "../Layouts/Footer";

export const Careers = () => {
  return (
    <Fragment>
      <CareersHead />
      <CareerValues />
      <JobOpenings />
      <Footer />
    </Fragment>
  );
};
