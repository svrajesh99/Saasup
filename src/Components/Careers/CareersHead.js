import React, { Fragment } from "react";
import "./CareersHead.css";
import { Header } from "../../Layouts/Header";
import ch1 from "../../Assets/Careers/ch1.jpg";
import ch2 from "../../Assets/Careers/ch2.jpg";

export const CareersHead = () => {
  return (
    <Fragment>
      <section className="each-page-topcompo">
        <Header />
        <section className="container careers-head-container flex-column">
          <div className="aboutus-h2-p flex-column">
            <h2>Careers</h2>
            <p className="aboutus-p">
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              ullamcorper sed pharetra sene.
            </p>
          </div>
          <button className="sign-in-btn">Add to Cart</button>
          <div className="careers-head-imgs">
            <img src={ch1} alt="Careers" />
            <img src={ch2} alt="Careers" />
          </div>
        </section>
      </section>
    </Fragment>
  );
};
