import React, { Fragment, useState } from "react";
import "./PriceCards.css";
import { Header } from "../../Layouts/Header";

export const PriceCards = () => {
  const [mouseEnter, setMouseEnter] = useState(0);
  function handleMouseEnter(idx) {
    setMouseEnter(idx);
  }

  return (
    <Fragment>
      <section className="each-page-topcompo">
        <Header />
        <section className="container price-page-container flex-column">
          <div className="aboutus-h2-p flex-column">
            <h2>Pricing</h2>
            <p className="aboutus-p">
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              ullamcorper sed pharetra sene.
            </p>
          </div>
          <section className="pricepage-cards">
            <article
              className={
                mouseEnter === 1
                  ? "pricing-basic-card active basic-card flex-column"
                  : "pricing-basic-card basic-card flex-column"
              }
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => setMouseEnter(0)}
            >
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
              <button
                className="sign-in-btn"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#242331",
                  border: "1px solid #D3D3D3",
                  width: "15rem",
                }}
              >
                Get Started
              </button>
            </article>
            <article
              className={
                mouseEnter === 2
                  ? "pricing-basic-card active flex-column"
                  : "pricing-basic-card flex-column"
              }
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => setMouseEnter(0)}
            >
              <div className="advanced-start basic-start">
                <h2 className="pricing-headers">Advanced</h2>
                <button className="feature-name-btn in-pricing-sec">
                  Popular
                </button>
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
                <b className="active">+9 illustration</b> Team feedback history
                (30 items) Personal feedback history (6 items) Slack integration
              </p>
              <button
                className="sign-in-btn"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#242331",
                  border: "1px solid #D3D3D3",
                  width: "15rem",
                }}
              >
                Get Started
              </button>
            </article>
            <article
              className={
                mouseEnter === 3
                  ? "pricing-basic-card active flex-column"
                  : "pricing-basic-card flex-column"
              }
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => setMouseEnter(0)}
            >
              <div className="pro-start basic-start">
                <h2 className="pricing-headers">Pro</h2>
                <button className="feature-name-btn in-pricing-sec">
                  Popular
                </button>
              </div>
              <hr className="pricing-card-lines" />
              <h2 className="pricing-headers">
                $15.99<span> / month</span>
              </h2>
              <div className="pricing-peryear center-flex">
                Billed as $199 per year
              </div>
              <hr className="pricing-card-lines" />
              <p className="pricing-sec-p">
                Unlimited members <b className="active">Unlimited</b> feedback
                Weekly team Feedback Friday Custom Kudos
                <b className="active">+9 illustration</b> Team feedback history
                (30 items) Personal feedback history (6 items) Slack integration
              </p>
              <button
                className="sign-in-btn"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#242331",
                  border: "1px solid #D3D3D3",
                  width: "15rem",
                }}
              >
                Get Started
              </button>
            </article>
          </section>
        </section>
      </section>
    </Fragment>
  );
};
