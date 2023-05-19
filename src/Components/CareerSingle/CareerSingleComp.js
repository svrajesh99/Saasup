import React, { Fragment } from "react";
import "./CareerSingleComp.css";
import { Header } from "../../Layouts/Header";
import { Link } from "react-router-dom";

export const CareerSingleComp = () => {
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
      <section className="each-page-topcompo">
        <Header />
        <section className="container career-single-container flex-column">
          <div className="aboutus-h2-p flex-column">
            <h2>Web Designer & Developer</h2>
            <p className="career-card-detail">
              San Francisco, CA &nbsp;&nbsp;| &nbsp;<span> Full Time</span>
            </p>
          </div>
          <button className="sign-in-btn">Apply Now</button>
          <section className="career-single-details flex-column">
            <h3 className="trinary-title">About the role</h3>
            <p className="aboutus-p">
              you are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't embarrassing hidden in the middle of text. All the
              Lorem Ipsum generators on the Internet tend to repeat predefined
              chunks as necessary, making this the first true generator on the
              Internet.
            </p>
            <div className="list-styling">
              <ul>
                <li>
                  You are going to use a passage of Lorem Ipsum, you need to be{" "}
                </li>
                <li>
                  Sure there isn't embarrassing hidden in the middle of text.
                  All the
                </li>
                <li>
                  Lorem Ipsum generators on the Internet tend to repeat
                  predefined
                </li>
                <li>
                  Chunks as necessary, making this the first true generator{" "}
                </li>
              </ul>
            </div>
            <h3 className="trinary-title">
              If the feeling is mutual, we offer:
            </h3>
            <p className="aboutus-p">
              you are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't embarrassing hidden in the middle of text. All the
              Lorem Ipsum generators on the Internet tend to repeat predefined
              chunks as necessary, making this the first true generator on the
              Internet.
            </p>
            <div className="list-styling">
              <ul>
                <li>Gross salary starting at 1,500 EUR/month</li>
                <li>
                  Remote workplace (work from anywhere – you can chill in the
                  Bahamas in your pyjamas!)
                </li>
                <li>
                  A growth-oriented tribe. We value health, awareness,
                  consciousness and enjoy being Human
                </li>
                <li>
                  Position in one of the fastest-growing startups in Lithuania
                </li>
                <li>
                  Constant learning (500 EUR yearly budget for training to keep
                  you sharp-minded)
                </li>
                <li>
                  Remote workplace (work from anywhere – you can chill in the
                  Bahamas in your pyjamas!)
                </li>
              </ul>
            </div>
            <h3 className="trinary-title">Contact us!</h3>
            <p className="aboutus-p">
              Reach out to discuss the opportunity & send your answers to:
            </p>
            <div className="career-sigle-contact">
              <p className="aboutus-p">
                <b>John Peeter</b>
              </p>
              <ButtonMailto
                label="saasup@mail.co"
                mailto="mailto:saasup@mail.co "
              />
              <br />
              <ButtonCallto
                label="+256 445 02342"
                callto="tel:+256 445 02342"
              />
            </div>
            <button className="blacknwhite-btn">Apply Now</button>
          </section>
        </section>
      </section>
    </Fragment>
  );
};
