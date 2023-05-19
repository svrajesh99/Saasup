import React, { Fragment } from "react";
import { IntegrationSingle } from "../Components/IntegrationSingle/IntegrationSingle";
import { Footer } from "../Layouts/Footer";

export const IntegrationSinglePage = () => {
  return (
    <Fragment>
      <IntegrationSingle />
      <Footer />
    </Fragment>
  );
};
