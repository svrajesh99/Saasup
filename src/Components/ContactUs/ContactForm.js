import React, { Fragment } from "react";
import "./ContactForm.css";
import { Header } from "../../Layouts/Header";
import row3_1 from "../../Assets/StyleGuide/row3-1.png";
import call from "../../Assets/ContactUs/call.png";
import bg from "../../Assets/ContactUs/cf-bg.png";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export const ContactForm = () => {
  const ButtonMailto = ({ mailto, label }) => {
    return (
      <Link
        className="mail-call-text"
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };
  const ButtonCallto = ({ callto, label }) => {
    return (
      <Link
        className="mail-call-text"
        to="#"
        onClick={(e) => {
          window.location.href = callto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <Fragment>
      <section className="contactus-background">
        <section className="each-page-topcompo">
          <Header />
          <img className="cf-bg-img" src={bg} alt="Backgrond" />
          <section className="container contact-form-container flex-column">
            <div className="aboutus-h2-p flex-column">
              <h2>Get in touch today!</h2>
            </div>
            <div className="contactform-mailcall center-flex">
              <div className="cf-mailcall-card">
                <div className="cf-mailcall-img">
                  <img className="first-exception" src={row3_1} alt="Icons" />{" "}
                  Mail Us
                </div>
                <p>
                  <ButtonMailto
                    label="saasup@gmail.com"
                    mailto="mailto:saasup@gmail.com"
                  />
                </p>
              </div>
              <div className="cf-mailcall-card">
                <div className="cf-mailcall-img">
                  <img className="first-exception" src={call} alt="Icons" />{" "}
                  Call Us
                </div>
                <p>
                  <ButtonCallto
                    label="+001 6547 6589"
                    callto="tel:+001 6547 6589"
                  />
                </p>
              </div>
            </div>
            <form className="contactform-details-container">
              <div className="cf-label-ip">
                <label>Full name *</label>
                <input placeholder="John David" required />
              </div>
              <div className="cf-label-ip">
                <label>Your email *</label>
                <input placeholder="example@yourmail.com" required />
              </div>
              <div className="cf-label-ip">
                <label>Company *</label>
                <input placeholder="yourcompany name here" required />
              </div>
              <div className="cf-label-ip">
                <label>Subject *</label>
                <input placeholder="How can we Help" required />
              </div>
              <div className="cf-label-ip cf-msg-ip">
                <label>Message *</label>
                <textarea
                  rows={6}
                  placeholder="Hello there,I would like to talk about how to..."
                  required
                />
              </div>
              <button className="blacknwhite-btn cf-submit-btn">
                Send Message
              </button>
            </form>
            <article className="contactform-locations flex-column">
              <h2 className="secondary-title">
                We help small businesses with big hearts make meaningful hires
              </h2>
              <div className="cf-location-cards">
                <div className="cf-locaion-info flex-column">
                  <div
                    className="center-flex cf-location-icon"
                    style={{ backgroundColor: "#FAD5E9" }}
                  >
                    <IoLocationSharp
                      style={{ fontSize: "3rem", color: "#C1749E" }}
                    />
                  </div>
                  <p className="cf-location-name">Paris</p>
                  <p className="aboutus-p cfl-address">
                    19 Maypole Crescent Ilford,L62UJ
                  </p>
                  <div
                    className="cf-contact-no center-flex"
                    style={{ backgroundColor: "#FAD5E9", color: "#C1749E" }}
                  >
                    (415) 870 – 3204
                  </div>
                </div>
                <div className="cf-locaion-info flex-column">
                  <div className="center-flex cf-location-icon">
                    <IoLocationSharp
                      style={{ fontSize: "3rem", color: "#D1934B" }}
                    />
                  </div>
                  <p className="cf-location-name">New York</p>
                  <p className="aboutus-p cfl-address">
                    19 Maypole Crescent Ilford,L62UJ
                  </p>
                  <div className="cf-contact-no center-flex">
                    (415) 870 – 3204
                  </div>
                </div>
                <div className="cf-locaion-info flex-column">
                  <div
                    className="center-flex cf-location-icon"
                    style={{ backgroundColor: "#CBEFF1" }}
                  >
                    <IoLocationSharp
                      style={{ fontSize: "3rem", color: "#5B9093" }}
                    />
                  </div>
                  <p className="cf-location-name">Hanoi</p>
                  <p className="aboutus-p cfl-address">
                    19 Maypole Crescent Ilford,L62UJ
                  </p>
                  <div
                    className="cf-contact-no center-flex"
                    style={{ backgroundColor: "#CBEFF1", color: "#5B9093" }}
                  >
                    (415) 870 – 3204
                  </div>
                </div>
              </div>
            </article>
          </section>
        </section>
      </section>
    </Fragment>
  );
};
