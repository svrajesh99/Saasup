import React, { Fragment } from "react";
import "./Error.css";
import { Header } from "../../Layouts/Header";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <section className="each-page-topcompo last-comps-bg-size">
        <Header />
        <section className="container error-404-container flex-column">
          <h1 className="error-404">404</h1>
          <h2 className="primary-title">Page Not Found</h2>
          <p className="aboutus-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            congue pretium faucibus leo nisl nulla pharetra nullam.
          </p>
          <button className="sign-in-btn" onClick={() => navigate("/")}>
            Homepage
          </button>
        </section>
      </section>
    </Fragment>
  );
};
