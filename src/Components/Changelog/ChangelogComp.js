import React, { Fragment } from "react";
import "./ChangelogComp.css";
import { Header } from "../../Layouts/Header";

export const ChangelogComp = () => {
  return (
    <Fragment>
      <section className="each-page-topcompo last-comps-bg-size">
        <Header />
        <section className="container changelog-container flex-column">
          <h2 className="primary-title">Changelog</h2>

          <div className="changelog-bold-no center-flex">
            <span>V.1</span>
            <p className="aboutus-p">Initial Saasup Webflow Template Release</p>
          </div>
        </section>
      </section>
    </Fragment>
  );
};
