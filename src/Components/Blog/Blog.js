import React, { Fragment } from "react";
import "./Blog.css";
import { Header } from "../../Layouts/Header";

export const Blog = () => {
  return (
    <Fragment>
      <section className="each-page-topcompo">
        <Header />
        <section className="aboutus-h2-p page-common-header flex-column">
          <h2>News & Articles</h2>
          <p className="aboutus-p">
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
            ullamcorper sed pharetra sene.
          </p>
        </section>
        <section className="blog-container container flex-column">
          <article className="blog-articles">
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page from when looking at it
                layout. The point of using Lorem Ipsum
              </p>
              <a className="b-card-readmore" href="/#">
                Read More
              </a>
            </article>
            <article className="blog-artileone flex-column">
              <div className="blog-img-box blog-img-three">
                <button className="blog-img-btns">Marketing</button>
                <button className="blog-img-btns">Analysis</button>
              </div>
              <p className="b-card-date">November 15, 2022</p>
              <h3 className="b-card-title">
                Automate Reports Generation with Saasup
              </h3>
              <p className="b-card-info">
                It is a long established fact that a reader will be distracted
                by the readable content of a page from when looking at it
                layout. The point of using Lorem Ipsum
              </p>
              <a className="b-card-readmore" href="/#">
                Read More
              </a>
            </article>
            <article className="blog-artileone flex-column">
              <div className="blog-img-box blog-img-foure">
                <button className="blog-img-btns">Marketing</button>
                <button className="blog-img-btns">Analysis</button>
              </div>
              <p className="b-card-date">November 15, 2022</p>
              <h3 className="b-card-title">
                10 Top tips for making your Saas product sticky
              </h3>
              <p className="b-card-info">
                It is a long established fact that a reader will be distracted
                by the readable content of a page from when looking at it
                layout. The point of using Lorem Ipsum
              </p>
              <a className="b-card-readmore" href="/#">
                Read More
              </a>
            </article>
            <article className="blog-artileone flex-column">
              <div className="blog-img-box blog-img-five">
                <button className="blog-img-btns">Marketing</button>
                <button className="blog-img-btns">Analysis</button>
              </div>
              <p className="b-card-date">November 15, 2022</p>
              <h3 className="b-card-title">
                Automate Reports Generation with Saasup
              </h3>
              <p className="b-card-info">
                It is a long established fact that a reader will be distracted
                by the readable content of a page from when looking at it
                layout. The point of using Lorem Ipsum
              </p>
              <a className="b-card-readmore" href="/#">
                Read More
              </a>
            </article>
            <article className="blog-artileone flex-column">
              <div className="blog-img-box blog-img-six">
                <button className="blog-img-btns">Marketing</button>
                <button className="blog-img-btns">Analysis</button>
              </div>
              <p className="b-card-date">November 15, 2022</p>
              <h3 className="b-card-title">
                10 Top tips for making your Saas product sticky
              </h3>
              <p className="b-card-info">
                It is a long established fact that a reader will be distracted
                by the readable content of a page from when looking at it
                layout. The point of using Lorem Ipsum
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page from when looking at it
                layout. The point of using Lorem Ipsum
              </p>
              <a className="b-card-readmore" href="/#">
                Read More
              </a>
            </article>
          </article>
        </section>
      </section>
    </Fragment>
  );
};
