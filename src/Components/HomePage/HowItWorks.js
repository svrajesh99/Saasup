import React, { Fragment, useState } from "react";
import "./HowItWorks.css";
import user from "../../Assets/HomePage/user.png";
import hiw from "../../Assets/HomePage/hiw.png";
import row1_3 from "../../Assets/StyleGuide/row1-3.png";
import row1_4 from "../../Assets/StyleGuide/row1-4.png";

export const HowItWorks = () => {
  const [toggleTab, setToggleTab] = useState(1);

  function toggleHiwTab(index) {
    setToggleTab(index);
  }

  return (
    <Fragment>
      <section className="container how-it-woorks-container flex-column">
        <button className="feature-name-btn">How It Works</button>
        <h2 className="secondary-title">
          Work smarter
          <br /> with easy access for user..
        </h2>
        <div className="working-steps-box">
          <div
            className={
              toggleTab === 1 ? "center-flex active-tab" : "center-flex"
            }
            onClick={() => toggleHiwTab(1)}
          >
            01. Create account
          </div>
          <div
            className={
              toggleTab === 2 ? "center-flex active-tab" : "center-flex"
            }
            onClick={() => toggleHiwTab(2)}
          >
            02. Install tracking code
          </div>
          <div
            className={
              toggleTab === 3 ? "center-flex active-tab" : "center-flex"
            }
            onClick={() => toggleHiwTab(3)}
          >
            03. Track analytics
          </div>
        </div>
        <section className="hiw-content">
          <article
            className={
              toggleTab === 1
                ? "hiw-create-account active-content"
                : "hiw-create-account"
            }
          >
            <div className="flex-column hiw-left-box">
              <div className="ca-icon-info">
                <div className="center-flex">
                  <img src={user} alt="User-icon" />
                </div>
                <h3>Create your account & start your work</h3>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page from when looking at it
                layout. The point of using Lorem Ipsum
              </p>
              <button className="blacknwhite-btn">Get Started</button>
            </div>
            <img className="hiw-right-img" src={hiw} alt="Profile card" />
          </article>
          <article
            className={
              toggleTab === 2
                ? "hiw-create-account active-content"
                : "hiw-create-account"
            }
          >
            <div className="flex-column hiw-left-box">
              <div className="ca-icon-info">
                <div
                  className="center-flex"
                  style={{ backgroundColor: "#FFDBB0" }}
                >
                  <img src={row1_3} alt="User-icon" />
                </div>
                <h3>Install tracking code</h3>
              </div>
              <p>
                Long established fact that a readeed to will be distracted by
                the readable content of a page when looking at its layout
              </p>
              <button className="blacknwhite-btn">Get Started</button>
            </div>
            <img
              className="hiw-right-img"
              src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Profile card"
            />
          </article>
          <article
            className={
              toggleTab === 3
                ? "hiw-create-account active-content"
                : "hiw-create-account"
            }
          >
            <div className="flex-column hiw-left-box">
              <div className="ca-icon-info">
                <div
                  className="center-flex"
                  style={{ backgroundColor: "#FFCACA" }}
                >
                  <img src={row1_4} alt="User-icon" />
                </div>
                <h3>Track analytics</h3>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page from when looking at it
                layout. The point of using Lorem Ipsum looking at it layout.
              </p>
              <button className="blacknwhite-btn">Get Started</button>
            </div>
            <img
              className="hiw-right-img"
              src="https://images.pexels.com/photos/5831659/pexels-photo-5831659.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Profile card"
            />
          </article>
        </section>
      </section>
    </Fragment>
  );
};
