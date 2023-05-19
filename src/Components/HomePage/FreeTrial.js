import React, { Fragment } from "react";
import "./FreeTrial.css";
// import bg from "../../Assets/HomePage/ft-bg.png";
import freetrial from "../../Assets/HomePage/freetrial.png";

export const FreeTrial = () => {
  return (
    <Fragment>
      <section className="container free-trial-container">
        {/* <img className="freetrial-bg" src={bg} alt="Background" /> */}
        <section className="freetrial-info flex-column">
          <h2 className="secondary-title">Start your free trial today</h2>
          <p>
            It is a long established fact that a reader will be by the readable
            when looking at it layout.
          </p>
          <div className="email-btn-freetrial">
            <input type="mail" placeholder="your mail here..." />
            <button className="whitenblue-btn">Get Started</button>
          </div>
        </section>
        <div className="leftimg-ft">
          <img src={freetrial} alt="Example-graph" />
        </div>
      </section>
    </Fragment>
  );
};
