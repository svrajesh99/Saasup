import React, { Fragment } from "react";
import { FeatureAnalytics } from "../Components/Features/FeatureAnalytics";
import { Footer } from "../Layouts/Footer";
import { FreeTrial } from "../Components/HomePage/FreeTrial";

export const FeaturesPage = () => {
  return (
    <Fragment>
      <FeatureAnalytics />
      <FreeTrial />
      <Footer />
    </Fragment>
  );
};
