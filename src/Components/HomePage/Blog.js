import React, { Fragment } from "react";
import "./Blog.css";

export const Blog = () => {
  return (
    <Fragment>
      <section className="container blog-home-container flex-column">
        <button className="feature-name-btn">Blog</button>
        <h2 className="secondary-title">Most popular articles</h2>
        <section className="blog-articles">
          <article className="blog-artileone flex-column">
            <div className="blog-img-box blog-img-one">
              <button className="blog-img-btns">Marketing</button>
              <button className="blog-img-btns">Analysis</button>
            </div>
            <p className="b-card-date">November 15, 2022</p>
            <h3 className="b-card-title">
              10 Top tips for making your Saas product sticky
            </h3>
            <p className="b-card-info">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum
            </p>
            <a className="b-card-readmore" href="/#">
              Read More
            </a>
          </article>
          <article className="blog-artileone flex-column">
            <div className="blog-img-box blog-img-two">
              <button className="blog-img-btns">Marketing</button>
              <button className="blog-img-btns">Analysis</button>
            </div>
            <p className="b-card-date">November 15, 2022</p>
            <h3 className="b-card-title">
              Automate Reports Generation with Saasup
            </h3>
            <p className="b-card-info">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum
            </p>
            <a className="b-card-readmore" href="/#">
              Read More
            </a>
          </article>
        </section>
      </section>
    </Fragment>
  );
};
