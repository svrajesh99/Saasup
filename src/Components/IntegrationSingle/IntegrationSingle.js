import React, { Fragment } from "react";
import "./IntegrationSingle.css";
import { Header } from "../../Layouts/Header";
import { FaFacebookF } from "react-icons/fa";
import bg from "../../Assets/IntegrationSingle/bg.png";

export const IntegrationSingle = () => {
  return (
    <Fragment>
      <section className="each-page-topcompo">
        <Header />
        <section className="aboutus-h2-p page-common-header flex-column">
          <div className="integ-single-top">
            <div
              className="icard-icon center-flex"
              style={{ backgroundColor: "#5571FF" }}
            >
              <FaFacebookF />
            </div>
            <h2>Facebook</h2>
          </div>
          <p className="aboutus-p">
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
            ullamcorper sed pharetra sene.
          </p>
        </section>
        <section className="container integration-single-container flex-column">
          <h2 className="secondary-title">
            Powerful features to advanced user analytics
          </h2>
          <ul>
            <li className="aboutus-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              cursus pharetra, mollis cras. Luctus pharetra duis nisi,
              fermentum, ipsum et felis odio. Nec semper nunc,s amet f arcu
              interdum Nec semper nunc,s amet f arcu interdum quam.
            </li>
            <li className="aboutus-p">
              Egestas amet fermentum aliquam blandit pharetra eleifend. Id duis
              ipsum ac ante. Lectus enim, maecenas adipiscing neque,
              pellentesque nunc ut ipsum. Et adipiscing euismod placerat lacus.
              In sed arcu ullamcorper pharetra, nunc lobortis facilisis cursus
              erat.
            </li>
          </ul>
          <img className="intg-single-imgbox" src={bg} alt="Profile" />
          <ul>
            <li className="aboutus-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              cursus pharetra, mollis cras. Luctus pharetra duis nisi,
              fermentum. Luctus pharetra duis nisi, fermentum, ipsum et felis
              odio. Nec semper nunc,s amet f arcu interdum.
            </li>
            <li className="aboutus-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              cursus pharetra, mollis cras. Luctus pharetra duis nisi,
              fermentum, ipsum et felis odio.Lorem ipsum
            </li>
          </ul>
          <h3 className="trinary-title">How to Connect Integration</h3>
          <p className="aboutus-p">
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic.
          </p>
          <button className="sign-in-btn">Connect Facebook</button>
        </section>
      </section>
    </Fragment>
  );
};
