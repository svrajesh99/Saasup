import React, { Fragment } from "react";
import "./OurValues.css";
import row2_1 from "../../Assets/StyleGuide/row2-1.png";
import row2_2 from "../../Assets/StyleGuide/row2-2.png";
import row2_3 from "../../Assets/StyleGuide/row2-3.png";
import row2_4 from "../../Assets/StyleGuide/row2-4.png";

export const OurValues = () => {
  return (
    <Fragment>
      <section className="container au-ourvalues-container flex-column">
        <button className="feature-name-btn">Our values</button>
        <h2 className="secondary-title">
          The story and values behind our company
        </h2>
        <article className="au-ourvalues-points">
          <div className="ourvalues-point-box">
            <img src={row2_1} alt="Icons" />
            <div className="ov-point-info flex-column">
              <h3>Innovation</h3>
              <p className="aboutus-p">
                Long established fact that a readeed to will be distracted by
                the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
          <div className="ourvalues-point-box">
            <img src={row2_2} alt="Icons" />
            <div className="ov-point-info flex-column">
              <h3>Team work</h3>
              <p className="aboutus-p">
                Long established fact that a readeed to will be distracted by
                the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
          <div className="ourvalues-point-box">
            <img src={row2_3} alt="Icons" />
            <div className="ov-point-info flex-column">
              <h3>Excellence</h3>
              <p className="aboutus-p">
                Long established fact that a readeed to will be distracted by
                the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
          <div className="ourvalues-point-box">
            <img src={row2_4} alt="Icons" />
            <div className="ov-point-info flex-column">
              <h3>Responsibility</h3>
              <p className="aboutus-p">
                Long established fact that a readeed to will be distracted by
                the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
        </article>
      </section>
    </Fragment>
  );
};
