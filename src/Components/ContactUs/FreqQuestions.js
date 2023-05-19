import React, { Fragment } from "react";
import "./FreqQuestions.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const FreqQuestions = () => {
  function handleFaqToggle(index) {
    const q1 = document.getElementById(index);
    q1.classList.toggle("active");
  }

  return (
    <Fragment>
      <section className="freqQuestions-container flex-column">
        <h2 className="secondary-title">Frequently Asked Questions</h2>
        <div className="faq-box flex-column" id="q1">
          <div className="faq-q-box">
            <h3 className="faq-questions">
              1. Where is my order? Quisque molestie
            </h3>
            <div
              className="faq-icon-box center-flex"
              onClick={() => handleFaqToggle("q1")}
            >
              <IoIosArrowForward className="faq-arrow-right" />
              <IoIosArrowDown className="faq-arrow-down" />
            </div>
          </div>
          <p className="aboutus-p">
            The are going to use a passage of Lorem Ipsum, you need to be sure
            tdembarrassing hidden in the middle of text. All the Lorem
            generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet.{" "}
          </p>
        </div>
        <div className="faq-box flex-column" id="q2">
          <div className="faq-q-box">
            <h3 className="faq-questions">
              2. How can I return an item purchased online?
            </h3>
            <div
              className="faq-icon-box center-flex"
              onClick={() => handleFaqToggle("q2")}
            >
              <IoIosArrowForward className="faq-arrow-right" />
              <IoIosArrowDown className="faq-arrow-down" />
            </div>
          </div>
          <p className="aboutus-p">
            The are going to use a passage of Lorem Ipsum, you need to be sure
            tdembarrassing hidden in the middle of text. All the Lorem
            generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet.{" "}
          </p>
        </div>
        <div className="faq-box flex-column" id="q3">
          <div className="faq-q-box">
            <h3 className="faq-questions">
              3. Can I cancel or change my order?
            </h3>
            <div
              className="faq-icon-box center-flex"
              onClick={() => handleFaqToggle("q3")}
            >
              <IoIosArrowForward className="faq-arrow-right" />
              <IoIosArrowDown className="faq-arrow-down" />
            </div>
          </div>
          <p className="aboutus-p">
            The are going to use a passage of Lorem Ipsum, you need to be sure
            tdembarrassing hidden in the middle of text. All the Lorem
            generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet.{" "}
          </p>
        </div>
        <div className="faq-box flex-column" id="q4">
          <div className="faq-q-box">
            <h3 className="faq-questions">
              4. I have a promotional or discount code?
            </h3>
            <div
              className="faq-icon-box center-flex"
              onClick={() => handleFaqToggle("q4")}
            >
              <IoIosArrowForward className="faq-arrow-right" />
              <IoIosArrowDown className="faq-arrow-down" />
            </div>
          </div>
          <p className="aboutus-p">
            The are going to use a passage of Lorem Ipsum, you need to be sure
            tdembarrassing hidden in the middle of text. All the Lorem
            generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet.{" "}
          </p>
        </div>
        <div className="faq-box flex-column" id="q5">
          <div className="faq-q-box">
            <h3 className="faq-questions">
              5. Can I integrate my store with Facebook?
            </h3>
            <div
              className="faq-icon-box center-flex"
              onClick={() => handleFaqToggle("q5")}
            >
              <IoIosArrowForward className="faq-arrow-right" />
              <IoIosArrowDown className="faq-arrow-down" />
            </div>
          </div>
          <p className="aboutus-p">
            The are going to use a passage of Lorem Ipsum, you need to be sure
            tdembarrassing hidden in the middle of text. All the Lorem
            generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet.{" "}
          </p>
        </div>
      </section>
    </Fragment>
  );
};
