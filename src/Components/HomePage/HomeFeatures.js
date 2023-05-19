import React, { Fragment } from "react";
import "./HomeFeatures.css";
import icon1 from "../../Assets/StyleGuide/icon1.png";
import icon2 from "../../Assets/StyleGuide/Icon2.png";
import icon3 from "../../Assets/StyleGuide/icon3.png";
import row1_1 from "../../Assets/StyleGuide/row1-1.png";
import f2 from "../../Assets/HomePage/F2.png";

export const HomeFeatures = () => {
  return (
    <Fragment>
      <section className="container home-features-container flex-column">
        <button className="feature-name-btn">Features</button>
        <h2 className="secondary-title">
          Powerful features to boost your productivity
        </h2>
        <section className="features-cards-box">
          <div className="feature-card flex-column">
            <img src={icon1} alt="Images" />
            <h3>Secured Platform</h3>
            <p>
              Contrary to popular belief, Lore Ipsum is not simply random text.
              It has roots in a piece.
            </p>
            <a href="/#">Learn More</a>
          </div>
          <div className="feature-card flex-column">
            <img src={icon2} alt="Images" />
            <h3>Advanced Analytics</h3>
            <p>
              Contrary to popular belief, Lore Ipsum is not simply random text.
              It has roots in a piece.
            </p>
            <a href="/#">Learn More</a>
          </div>
          <div className="feature-card flex-column">
            <img src={icon3} alt="Images" />
            <h3>Powerful Automation</h3>
            <p>
              Contrary to popular belief, Lore Ipsum is not simply random text.
              It has roots in a piece.
            </p>
            <a href="/#">Learn More</a>
          </div>
        </section>
      </section>
      <section className="container feature-box-two">
        <div className="cost-infor-card flex-column">
          <h3>Powerful and easy to use saas builder platform</h3>
          <p>
            It is a long established fact that a reader will be by the from
            readable content of a page when looking at its layout. The point of
            using lorem Ipsum.
          </p>
          <div className="cost-effective">
            <img src={row1_1} alt="cost" />
            <div className="ce-info">
              <h3>Cost Effective</h3>
              <p>
                Contrary to popular belief, Lore Ipsum is not simply random
                text.
              </p>
            </div>
          </div>
        </div>
        <div className="center-flex">
          <img className="feature-graph" src={f2} alt="Feature Graph" />
        </div>
      </section>
    </Fragment>
  );
};
