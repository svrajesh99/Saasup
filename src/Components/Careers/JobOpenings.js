import React, { Fragment, useState } from "react";
import "./JobOpenings.css";

export const JobOpenings = () => {
  const [hovered, setHovered] = useState(0);
  function handleMouseHovered(idx) {
    setHovered(idx);
  }

  return (
    <Fragment>
      <section className="container career-job-openings-container flex-column">
        <h2 className="secondary-title">Current job open positions</h2>
        <section className="career-jobs-cards">
          <div
            className={
              hovered === 1
                ? "career-hovered-card career-card flex-column"
                : "career-card flex-column"
            }
            onMouseEnter={() => handleMouseHovered(1)}
            onMouseLeave={() => setHovered(0)}
          >
            <h3>Web Designer & Developer</h3>
            <p className="career-card-detail">
              San Francisco, CA &nbsp;&nbsp;| &nbsp;<span> Part Time</span>
            </p>
            <p className="aboutus-p">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum looking at it layout.
            </p>
            <button className="sign-in-btn cjo-applynow-btn active">
              Apply Now
            </button>
          </div>
          <div
            className={
              hovered === 2
                ? "career-hovered-card career-card flex-column"
                : "career-card flex-column"
            }
            onMouseEnter={() => handleMouseHovered(2)}
            onMouseLeave={() => setHovered(0)}
          >
            <h3>Front-end developer</h3>
            <p className="career-card-detail">
              San Francisco, CA &nbsp;&nbsp;| &nbsp;<span> Part Time</span>
            </p>
            <p className="aboutus-p">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum looking at it layout.
            </p>
            <button className="sign-in-btn cjo-applynow-btn active">
              Apply Now
            </button>
          </div>
          <div
            className={
              hovered === 3
                ? "career-hovered-card career-card flex-column"
                : "career-card flex-column"
            }
            onMouseEnter={() => handleMouseHovered(3)}
            onMouseLeave={() => setHovered(0)}
          >
            <h3>SEO Specialist</h3>
            <p className="career-card-detail">
              San Francisco, CA &nbsp;&nbsp;| &nbsp;<span> Full Time</span>
            </p>
            <p className="aboutus-p">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum looking at it layout.
            </p>
            <button className="sign-in-btn cjo-applynow-btn active">
              Apply Now
            </button>
          </div>
          <div
            className={
              hovered === 4
                ? "career-hovered-card career-card flex-column"
                : "career-card flex-column"
            }
            onMouseEnter={() => handleMouseHovered(4)}
            onMouseLeave={() => setHovered(0)}
          >
            <h3>UI / UX Designer</h3>
            <p className="career-card-detail">
              San Francisco, CA &nbsp;&nbsp;| &nbsp;<span> Full Time</span>
            </p>
            <p className="aboutus-p">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum looking at it layout.
            </p>
            <button className="sign-in-btn cjo-applynow-btn active">
              Apply Now
            </button>
          </div>
          <div
            className={
              hovered === 5
                ? "career-hovered-card career-card flex-column"
                : "career-card flex-column"
            }
            onMouseEnter={() => handleMouseHovered(5)}
            onMouseLeave={() => setHovered(0)}
          >
            <h3>Backend Developer</h3>
            <p className="career-card-detail">
              San Francisco, CA &nbsp;&nbsp;| &nbsp;<span> Part Time</span>
            </p>
            <p className="aboutus-p">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum looking at it layout.
            </p>
            <button className="sign-in-btn cjo-applynow-btn active">
              Apply Now
            </button>
          </div>
          <div
            className={
              hovered === 6
                ? "career-hovered-card career-card flex-column"
                : "career-card flex-column"
            }
            onMouseEnter={() => handleMouseHovered(6)}
            onMouseLeave={() => setHovered(0)}
          >
            <h3>Condent Wrtiter</h3>
            <p className="career-card-detail">
              San Francisco, CA &nbsp;&nbsp;| &nbsp;<span> Part Time</span>
            </p>
            <p className="aboutus-p">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum looking at it layout.
            </p>
            <button className="sign-in-btn cjo-applynow-btn active">
              Apply Now
            </button>
          </div>
        </section>
      </section>
    </Fragment>
  );
};
