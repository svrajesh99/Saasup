import React, { Fragment } from "react";
import { Integrations } from "../Components/Integration/Integrations";
import { FreeTrial } from "../Components/HomePage/FreeTrial";
import { Footer } from "../Layouts/Footer";

export const IntegrationPage = () => {
  return (
    <Fragment>
      <Integrations />
      <FreeTrial />
      <Footer />
    </Fragment>
  );
};
