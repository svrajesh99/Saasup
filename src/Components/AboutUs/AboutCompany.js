import React, { Fragment } from "react";
import "./AboutCompany.css";
import ac1 from "../../Assets/AboutUs/ac1.jpg";
import ac2 from "../../Assets/AboutUs/ac2.jpg";
import mission from "../../Assets/AboutUs/mission.jpg";
import { Header } from "../../Layouts/Header";

export const AboutCompany = () => {
  return (
    <Fragment>
      <section className="each-page-topcompo">
        <Header />
        <section className="container about-company-container flex-column">
          <div className="aboutus-h2-p flex-column">
            <h2>About our company</h2>
            <p className="aboutus-p">
              Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
              ullamcorper sed pharetra sene.
            </p>
          </div>
          <div className="about-company-imgs">
            <img src={ac1} alt="Working" />
            <img src={ac2} alt="Working" />
          </div>
          <div className="about-company-do">
            <h3 className="aboutus-secondary-heading">What we do</h3>
            <ul>
              <li className="aboutus-p">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using.
              </li>
              <li className="aboutus-p">
                Content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </li>
            </ul>
          </div>
        </section>
        <section className="container about-company-points">
          <div className="acp-comp flex-column">
            <h2>
              100<span>M</span>
            </h2>
            <p>Client Satisfaction</p>
          </div>
          <div className="acp-comp flex-column">
            <h2>
              24<span> h</span>
            </h2>
            <p>Expert Support Team</p>
          </div>
          <div className="acp-comp flex-column">
            <h2>
              98<span> k+</span>
            </h2>
            <p>Sales Count</p>
          </div>
          <div className="acp-comp flex-column">
            <h2>
              208<span> +</span>
            </h2>
            <p>Client Worldwide</p>
          </div>
        </section>
        <section className="aboutus-mission-container container">
          <div className="aboutus-mission-info flex-column">
            <h3 className="aboutus-secondary-heading">Our Mission</h3>
            <ul>
              <li className="aboutus-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra Ld
                eu aliquet diam lorem viverra at justo. Nulla odio nequefjf
                gravida in pharetra egestas. Ac id sagittis at morbi interdum
                nibh diam sagittis et.
              </li>
              <li className="aboutus-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id
                eu aliquet diam lorem viverra at justo. Nulla odio nequesg
                gravida in pharetra egestas.
              </li>
            </ul>
          </div>
          <img src={mission} alt="Mission" />
        </section>
      </section>
    </Fragment>
  );
};
