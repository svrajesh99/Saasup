import React, { Fragment } from "react";
import "./Footer.css";
import logo from "../Assets/Header/Logo.png";
import { AiFillApple } from "react-icons/ai";
import { MdAndroid } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
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
      <hr className="footer-horiz container" />
      <footer className="container footer-container">
        <div className="footer-info footer-column-gap">
          <div className="logo center-flex">
            <img src={logo} alt="Logo" />
            <h1>SaaSup</h1>
          </div>
          <p>
            It is a long established fact that from will be distracted by the
            readable from when looking.
          </p>
          <div className="mail-call-flex">
            <HiOutlineMail className="mail-call-icon" />
            <div>
              <ButtonMailto
                label="saasup@gmail.com"
                mailto="mailto:saasup@gmail.com"
              />
              <br />
              <ButtonMailto
                label="mail@saasup.com"
                mailto="mailto:mail@saasup.com"
              />
            </div>
          </div>
          <div className="mail-call-flex">
            <BiPhoneCall className="mail-call-icon" />
            <div>
              <ButtonCallto
                label="+987 6541 3654"
                callto="tel:+987 6541 3654"
              />
              <br />
              <ButtonCallto
                label="+001 6547 6589"
                callto="tel:+001 6547 6589"
              />
            </div>
          </div>
        </div>
        <div className="footer-pages-links footer-column-gap">
          <h1>Pages</h1>
          <hr />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/integration">Integration</Link>
            </li>
            <li>
              <Link to="/price">Pricing</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-pages-links footer-column-gap">
          <h1>Utility Pages</h1>
          <hr />
          <ul>
            <li>
              <Link to="/password">Password</Link>
            </li>
            <li>
              <Link to="/#">Protected</Link>
            </li>
            <li>
              <Link to="/error-404">404 Not Found</Link>
            </li>
            <li>
              <Link to="/style-guide">Style Guide</Link>
            </li>
            <li>
              <Link to="/license">Licences</Link>
            </li>
            <li>
              <Link to="/changelog">Changelog</Link>
            </li>
          </ul>
        </div>
        <div className="footer-final-column footer-column-gap">
          <p>Download</p>
          <p>Its suitable to all decvices and screens</p>
          <p>
            It is a long established fact that a reader will be distracted
            layout.
          </p>
          <div className="btns-row">
            <button
              className="blacknwhite-btn center-flex"
              style={{ height: "5.5rem" }}
            >
              <AiFillApple className="app-cart-btns" />
              &nbsp;App Store
            </button>
            <button
              className="blacknwhite-btn center-flex"
              style={{ height: "5.5rem" }}
            >
              <MdAndroid className="app-cart-btns" />
              &nbsp;Play Store
            </button>
          </div>
        </div>
      </footer>
      <hr className="footer-horiz container footer-horiz-last" />
      <footer className="container final-footer">
        <p>Copyright © Saasup | Designed by Victorflow - Powered by Webflow</p>
        <div className="footer-final-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <BsInstagram />
        </div>
      </footer>
    </Fragment>
  );
};
