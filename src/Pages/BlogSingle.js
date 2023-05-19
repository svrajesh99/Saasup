import React, { Fragment } from "react";
import { BlogLatestPost } from "../Components/BlogSingle/BlogLatestPost";
import { BlogSingleComp } from "../Components/BlogSingle/BlogSingleComp";
import { FreeTrial } from "../Components/HomePage/FreeTrial";
import { Footer } from "../Layouts/Footer";

export const BlogSingle = () => {
  return (
    <Fragment>
      <BlogSingleComp />
      <BlogLatestPost />
      <FreeTrial />
      <Footer />
    </Fragment>
  );
};
