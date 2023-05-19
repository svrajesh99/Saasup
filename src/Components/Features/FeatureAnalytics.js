import React, { Fragment } from "react";
import "./FeatureAnalytics.css";
import icon1 from "../../Assets/StyleGuide/icon1.png";
import icon2 from "../../Assets/StyleGuide/Icon2.png";
import icon3 from "../../Assets/StyleGuide/icon3.png";
import i1 from "../../Assets/FeaturePage/i1.png";
import i2 from "../../Assets/FeaturePage/i2.png";
import i3 from "../../Assets/FeaturePage/i3.png";
import { Header } from "../../Layouts/Header";

export const FeatureAnalytics = () => {
  return (
    <Fragment>
      <section className="each-page-topcompo">
        <Header />
        <section className="aboutus-h2-p page-common-header flex-column">
          <h2>Features</h2>
          <p className="aboutus-p">
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
            ullamcorper sed pharetra sene.
          </p>
        </section>
        <section className="container features-container flex-column">
          <button className="feature-name-btn">Analytics</button>
          <h2 className="secondary-title">
            Powerful features to advanced user analytics
          </h2>
          <section className="features-cards-box">
            <div className="feature-card flex-column">
              <img src={icon1} alt="Images" />
              <h3>Secured Platform</h3>
              <p>
                Contrary to popular belief, Lore Ipsum is not simply random
                text. It has roots in a piece.
              </p>
              <a href="/#">Learn More</a>
            </div>
            <div className="feature-card active flex-column">
              <img src={icon2} alt="Images" />
              <h3>Advanced Analytics</h3>
              <p>
                Contrary to popular belief, Lore Ipsum is not simply random
                text. It has roots in a piece.
              </p>
              <a href="/#" className="active">
                Learn More
              </a>
            </div>
            <div className="feature-card flex-column">
              <img src={icon3} alt="Images" />
              <h3>Powerful Automation</h3>
              <p>
                Contrary to popular belief, Lore Ipsum is not simply random
                text. It has roots in a piece.
              </p>
              <a href="/#">Learn More</a>
            </div>
          </section>
        </section>
        <section className="container features-container flex-column">
          <button className="feature-name-btn">Integration</button>
          <h2 className="secondary-title">
            Connect all your tools and work efficiently.
          </h2>
          <section className="features-cards-box">
            <div className="feature-card flex-column">
              <img src={i1} alt="Images" />
              <h3>20+ integrations</h3>
              <p>
                Contrary to popular belief, Lore Ipsum is not simply random
                text. It has roots in a piece.
              </p>
              <a href="/#">Learn More</a>
            </div>
            <div className="feature-card active flex-column">
              <img src={i2} alt="Images" />
              <h3>All-in-one platform</h3>
              <p>
                Contrary to popular belief, Lore Ipsum is not simply random
                text. It has roots in a piece.
              </p>
              <a href="/#" className="active">
                Learn More
              </a>
            </div>
            <div className="feature-card flex-column">
              <img src={i3} alt="Images" />
              <h3>Advanced charts</h3>
              <p>
                Contrary to popular belief, Lore Ipsum is not simply random
                text. It has roots in a piece.
              </p>
              <a href="/#">Learn More</a>
            </div>
          </section>
        </section>
      </section>
    </Fragment>
  );
};
