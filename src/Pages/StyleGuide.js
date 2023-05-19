import React, { Fragment } from "react";
import { SGBtnIcon } from "../Components/StyleGuide/SGBtnIcon";
import { SGColorTypo } from "../Components/StyleGuide/SGColorTypo";
import { Footer } from "../Layouts/Footer";

export const StyleGuide = () => {
  return (
    <Fragment>
      <SGColorTypo />
      <SGBtnIcon />
      <Footer />
    </Fragment>
  );
};
