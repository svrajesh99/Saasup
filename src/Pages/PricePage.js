import React, { Fragment } from "react";
import { PriceCards } from "../Components/Price/PriceCards";
import { PriceTable } from "../Components/Price/PriceTable";
import { Footer } from "../Layouts/Footer";

export const PricePage = () => {
  return (
    <Fragment>
      <PriceCards />
      <PriceTable />
      <Footer />
    </Fragment>
  );
};
