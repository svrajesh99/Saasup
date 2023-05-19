import React, { Fragment } from "react";
import "./License.css";
import { Header } from "../../Layouts/Header";

export const License = () => {
  return (
    <Fragment>
      <section className="each-page-topcompo last-comps-bg-size">
        <Header />
        <section className="container changelog-container flex-column">
          <h2 className="primary-title">Licenses</h2>
          <article className="license-box flex-column">
            <div>
              <h2 className="secondary-title">Icons & Graphics</h2>
              <ul>
                <li className="aboutus-p">
                  Icons and Graphics are manually designed by the{" "}
                  <b style={{ color: "#5236FF" }}> VictorFlow</b>
                  Templates team. You may download these and edit them to fit
                  your website without asking for permission or providing
                  credit.
                </li>
                <li className="aboutus-p">
                  Upon purchasing Software UI Kit Template our team grants you a
                  nonexclusive, worldwide copyright license to download, copy,
                  modify, and use the icons.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="secondary-title">Photography</h2>
              <p className="aboutus-p">
                All images used in the{" "}
                <b style={{ color: "#5236FF" }}>Saasup</b> Webflow Template are
                licensed for free personal and commercial use. If you'd like to
                use any specific image, you can check the licenses and download
                the images for free on{" "}
                <b style={{ color: "#5236FF" }}>Unsplash, Pexels‍</b> and icons
                from <b style={{ color: "#5236FF" }}>Fontawesome.</b>
              </p>
            </div>
            <div>
              <p className="fourth-title">
                pexels : <span className="aboutus-p">Licenscs</span>
              </p>
              <p className="aboutus-p">
                <b style={{ color: "#5236FF" }}>
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13.
                </b>
              </p>
            </div>
            <div>
              <p className="fourth-title">
                Unsplash : <span className="aboutus-p">Licenscs</span>
              </p>
              <p className="aboutus-p">
                <b style={{ color: "#5236FF" }}>Image 1.</b>
              </p>
            </div>
            <div>
              <p className="fourth-title">
                Font awesome :{" "}
                <span className="aboutus-p">
                  <b style={{ color: "#5236FF" }}>Licenscs</b>
                </span>
              </p>
            </div>
            <div>
              <h2 className="secondary-title">Font</h2>
              <p className="aboutus-p">
                Saasup template uses free licensed{" "}
                <b style={{ color: "#5236FF" }}>Google Fonts.</b> Please check
                <b style={{ color: "#5236FF" }}>Nunito.</b>
              </p>
            </div>
          </article>
        </section>
      </section>
    </Fragment>
  );
};
