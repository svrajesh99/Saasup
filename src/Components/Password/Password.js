import React, { Fragment } from "react";
import "./Password.css";
import { Header } from "../../Layouts/Header";

export const Password = () => {
  return (
    <Fragment>
      <section className="each-page-topcompo last-comps-bg-size">
        <Header />
        <section className="container changelog-container flex-column">
          <h2 className="primary-title">Password Protected</h2>

          <div className="password-change-box flex-column">
            <h2 className="secondary-title">Enter Page Password!</h2>
            <p className="aboutus-p">
              This page is password protected. If you are the website admin, or
              have access to this page, please type your password below.
            </p>
            <input placeholder="Enter Your Password" />
            <button className="blacknwhite-btn">Submit Now</button>
          </div>
        </section>
      </section>
    </Fragment>
  );
};
