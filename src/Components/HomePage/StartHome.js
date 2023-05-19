import React, { Fragment, useState } from "react";
import { Header } from "../../Layouts/Header";
import "./StartHome.css";
import { RiCloseLine } from "react-icons/ri";
import bg from "../../Assets/HomePage/Background.png";
import home_img1 from "../../Assets/HomePage/Image.png";
import { BsFillPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player";

export const StartHome = () => {
  const [play, setPlay] = useState(false);

  return (
    <Fragment>
      <header className="home-header-container">
        <img className="bg-img1" src={bg} alt="Background-style" />
        <Header />
        <section className="container home-intro-container">
          <div className="home-intro flex-column">
            <h2>Build your audience and grow your brand</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              ullamcorper sed pharetra sene.
            </p>
            <div className="home-intro-btns">
              <button className="sign-in-btn">Get Started</button>
              <button
                className="watch-vedio sign-in-btn center-flex"
                onClick={() => setPlay(true)}
              >
                Watch Vedio
                <p className="center-flex">
                  <BsFillPlayFill />
                </p>
              </button>
            </div>
          </div>
          <div className="home-graphs-img1 center-flex">
            <img src={home_img1} alt="Growing Statistics" />
          </div>
          {play && (
            <div className="vedio-container">
              <RiCloseLine
                className="close-vedio-icon"
                onClick={() => setPlay(false)}
              />
              <ReactPlayer
                width="100%"
                height="100%"
                className="xxx"
                url="https://youtu.be/7sDY4m8KNLc"
              />
            </div>
          )}
        </section>
      </header>
    </Fragment>
  );
};
