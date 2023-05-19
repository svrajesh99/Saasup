import React, { Fragment } from "react";
import "./Career.css";

export const Career = () => {
  return (
    <Fragment>
      <section className="aboutus-career-container container">
        <div className="career-left-box flex-column">
          <button className="feature-name-btn">Our values</button>
          <h2 className="secondary-title">
            Join our Saasup Let’s work together
          </h2>
        </div>
        <article className="career-right-box flex-column">
          <div className="career-card flex-column">
            <h3>Web Designer & Developer</h3>
            <p className="career-card-detail">
              San Francisco, CA &nbsp;&nbsp;| &nbsp;<span> Full Time</span>
            </p>
            <p className="aboutus-p">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum looking at it layout.
            </p>
            <button className="blacknwhite-btn">Apply Now</button>
          </div>
          <article className="career-card flex-column">
            <h3>Product Development manager</h3>
            <p className="career-card-detail">
              San Francisco, CA &nbsp;&nbsp;| &nbsp;<span> Full Time</span>
            </p>
            <p className="aboutus-p">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum looking at it layout.
            </p>
            <button className="blacknwhite-btn">Apply Now</button>
          </article>
          <article className="career-card flex-column">
            <h3>Head of finnance</h3>
            <p className="career-card-detail">
              San Francisco, CA &nbsp;&nbsp;| &nbsp;<span> Full Time</span>
            </p>
            <p className="aboutus-p">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum looking at it layout.
            </p>
            <button className="blacknwhite-btn">Apply Now</button>
          </article>
          <article className="career-card flex-column  career-last-card">
            <h3>Can't find the position you are looking for?</h3>
            <p className="aboutus-p">
              Don't worry, get in touch with us anyways, we are always looking
              for great team members to join us.
            </p>
            <button className="whitenblue-btn">Apply Now</button>
          </article>
        </article>
      </section>
    </Fragment>
  );
};
