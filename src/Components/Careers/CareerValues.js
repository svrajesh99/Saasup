import React, { Fragment } from "react";
import "./CareerValues.css";
import row1_2 from "../../Assets/StyleGuide/row1-2.png";
import row1_3 from "../../Assets/StyleGuide/row1-3.png";
import row1_4 from "../../Assets/StyleGuide/row1-4.png";
import row1_5 from "../../Assets/StyleGuide/row1-5.png";
import row1_6 from "../../Assets/StyleGuide/row1-6.png";
import row1_7 from "../../Assets/StyleGuide/row1-7.png";

export const CareerValues = () => {
  return (
    <Fragment>
      <section className="container career-values-container flex-column">
        <button className="feature-name-btn">Values</button>
        <h2 className="secondary-title">Values that define us</h2>
        <article className="career-values-cards">
          <div className="career-values-card flex-column">
            <div
              className="center-flex cv-icon-box"
              style={{ backgroundColor: "#EFADFF" }}
            >
              <img src={row1_2} alt="Icons" />
            </div>
            <h4>Patients come first</h4>
            <p className="aboutus-p">
              Contrary to popular belief, Ipsum is not simply random text. It
              has roots in a piece.
            </p>
          </div>
          <div className="career-values-card flex-column">
            <div
              className="center-flex cv-icon-box"
              style={{ backgroundColor: "#FFDBB0" }}
            >
              <img src={row1_3} alt="Icons" />
            </div>
            <h4>Patients come first</h4>
            <p className="aboutus-p">
              Contrary to popular belief, Ipsum is not simply random text. It
              has roots in a piece.
            </p>
          </div>
          <div className="career-values-card flex-column">
            <div
              className="center-flex cv-icon-box"
              style={{ backgroundColor: "#FFCACA" }}
            >
              <img src={row1_4} alt="Icons" />
            </div>
            <h4>Patients come first</h4>
            <p className="aboutus-p">
              Contrary to popular belief, Ipsum is not simply random text. It
              has roots in a piece.
            </p>
          </div>
          <div className="career-values-card flex-column">
            <div
              className="center-flex cv-icon-box"
              style={{ backgroundColor: "#CAC2FF" }}
            >
              <img src={row1_5} alt="Icons" />
            </div>
            <h4>Patients come first</h4>
            <p className="aboutus-p">
              Contrary to popular belief, Ipsum is not simply random text. It
              has roots in a piece.
            </p>
          </div>
          <div className="career-values-card flex-column">
            <div
              className="center-flex cv-icon-box"
              style={{ backgroundColor: "#FFDBE6" }}
            >
              <img src={row1_6} alt="Icons" />
            </div>
            <h4>Patients come first</h4>
            <p className="aboutus-p">
              Contrary to popular belief, Ipsum is not simply random text. It
              has roots in a piece.
            </p>
          </div>
          <div className="career-values-card flex-column">
            <div
              className="center-flex cv-icon-box"
              style={{ backgroundColor: "#B7EEFF" }}
            >
              <img src={row1_7} alt="Icons" />
            </div>
            <h4>Patients come first</h4>
            <p className="aboutus-p">
              Contrary to popular belief, Ipsum is not simply random text. It
              has roots in a piece.
            </p>
          </div>
        </article>
      </section>
    </Fragment>
  );
};
