import React, { Fragment } from "react";
import { Blog } from "../Components/Blog/Blog";
import { Footer } from "../Layouts/Footer";

export const BlogPage = () => {
  return (
    <Fragment>
      <Blog />
      <Footer />
    </Fragment>
  );
};
