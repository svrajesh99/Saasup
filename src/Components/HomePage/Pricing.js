import React, { Fragment } from "react";
import "./Pricing.css";
import p1 from "../../Assets/HomePage/p1.png";
import p2 from "../../Assets/HomePage/p2.png";
import p3 from "../../Assets/HomePage/p3.png";
import p4 from "../../Assets/HomePage/p4.png";

export const Pricing = () => {
  return (
    <Fragment>
      <section className="container home-pricing-container">
        <article className="price-info1 flex-column">
          <button className="feature-name-btn in-pricing-sec">Pricing</button>
          <h2 className="pricing-headers">Simple and flexible pricing</h2>
          <p className="pricing-sec-p">
            It is a long established fact that a reader the will be distracted
            by the readable content of a page from when looking at it layout.
          </p>
          <h3>Accepted Payment Methods</h3>
          <div className="payment-cards">
            <img src={p1} alt="Payment Cards allowed" />
            <img src={p2} alt="Payment Cards allowed" />
            <img src={p3} alt="Payment Cards allowed" />
            <img src={p4} alt="Payment Cards allowed" />
          </div>
        </article>
        <article className="pricing-basic-card basic-card flex-column">
          <div className="basic-start">
            <h2 className="pricing-headers">Basic</h2>
            <button className="sign-in-btn in-pricing-sec">Save 30%</button>
          </div>
          <hr className="pricing-card-lines" />
          <h2 className="pricing-headers">
            $7.99<span> / month</span>
          </h2>
          <div className="pricing-peryear center-flex">
            Billed as $96 per year
          </div>
          <hr className="pricing-card-lines" />
          <p className="pricing-sec-p">
            Unlimited members <b>Unlimited</b> feedback Weekly team Feedback
            Friday Custom Kudos <b>+9 illustration</b> Team feedback history
          </p>
          <button className="blacknwhite-btn">Get Started</button>
        </article>
        <article className="pricing-basic-card flex-column">
          <div className="advanced-start basic-start">
            <h2 className="pricing-headers">Advanced</h2>
            <button className="feature-name-btn in-pricing-sec">Popular</button>
          </div>
          <hr className="pricing-card-lines" />
          <h2 className="pricing-headers">
            $10.99<span> / month</span>
          </h2>
          <div className="pricing-peryear center-flex">
            Billed as $199 per year
          </div>
          <hr className="pricing-card-lines" />
          <p className="pricing-sec-p">
            Unlimited members <b className="active">Unlimited</b> feedback
            Weekly team Feedback Friday Custom Kudos
            <b className="active">+9 illustration</b> Team feedback history (30
            items) Personal feedback history (6 items) Slack integration
          </p>
          <button className="blacknwhite-btn">Get Started</button>
        </article>
      </section>
    </Fragment>
  );
};
