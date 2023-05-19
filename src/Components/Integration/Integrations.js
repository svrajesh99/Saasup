import React, { Fragment } from "react";
import "./Integrations.css";
import { Header } from "../../Layouts/Header";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";

export const Integrations = () => {
  return (
    <Fragment>
      <section className="each-page-topcompo">
        <Header />
        <section className="aboutus-h2-p page-common-header flex-column">
          <h2>Integrations</h2>
          <p className="aboutus-p">
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
            ullamcorper sed pharetra sene.
          </p>
        </section>
        <section className="container integration-container">
          <article className="integration-card flex-column">
            <div className="ic-icon-info center-flex">
              <div
                className="icard-icon center-flex"
                style={{ backgroundColor: "#5571FF" }}
              >
                <FaFacebookF />
              </div>
              <div className="icard-title">
                <h3>Facebook</h3>
                <p className="icard-ptag">Social</p>
              </div>
            </div>
            <p className="icard-ptag">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              has roots in a piece.
            </p>
            <a href="/#">View Integration</a>
          </article>
          <article className="integration-card flex-column">
            <div className="ic-icon-info center-flex">
              <div
                className="icard-icon center-flex"
                style={{ backgroundColor: "#1DA1F2" }}
              >
                <FaTwitter />
              </div>
              <div className="icard-title">
                <h3>Twitter</h3>
                <p className="icard-ptag">Social</p>
              </div>
            </div>
            <p className="icard-ptag">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              has roots in a piece.
            </p>
            <a href="/#">View Integration</a>
          </article>
          <article className="integration-card flex-column">
            <div className="ic-icon-info center-flex">
              <div
                className="icard-icon center-flex"
                style={{ backgroundColor: "#FF2F2F" }}
              >
                <AiFillYoutube />
              </div>
              <div className="icard-title">
                <h3>Youtube</h3>
                <p className="icard-ptag">Social</p>
              </div>
            </div>
            <p className="icard-ptag">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              has roots in a piece.
            </p>
            <a href="/#">View Integration</a>
          </article>
          <article className="integration-card flex-column">
            <div className="ic-icon-info center-flex">
              <div
                className="icard-icon center-flex"
                style={{ backgroundColor: "#B7081B" }}
              >
                <BsPinterest />
              </div>
              <div className="icard-title">
                <h3>Pinterest</h3>
                <p className="icard-ptag">Social</p>
              </div>
            </div>
            <p className="icard-ptag">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              has roots in a piece.
            </p>
            <a href="/#">View Integration</a>
          </article>
          <article className="integration-card flex-column">
            <div className="ic-icon-info center-flex">
              <div
                className="icard-icon center-flex"
                style={{ backgroundColor: "#A83AFF" }}
              >
                <BsTwitch />
              </div>
              <div className="icard-title">
                <h3>Twitch</h3>
                <p className="icard-ptag">Social</p>
              </div>
            </div>
            <p className="icard-ptag">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              has roots in a piece.
            </p>
            <a href="/#">View Integration</a>
          </article>
          <article className="integration-card flex-column">
            <div className="ic-icon-info center-flex">
              <div
                className="icard-icon center-flex"
                style={{ backgroundColor: "#F4F21F" }}
              >
                <FaSnapchatGhost />
              </div>
              <div className="icard-title">
                <h3>Snapchat</h3>
                <p className="icard-ptag">Social</p>
              </div>
            </div>
            <p className="icard-ptag">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              has roots in a piece.
            </p>
            <a href="/#">View Integration</a>
          </article>
        </section>
      </section>
    </Fragment>
  );
};
