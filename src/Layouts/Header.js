import React, { Fragment, useState } from "react";
import "./Header.css";
import logo from "../Assets/Header/Logo.png";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [page, setPage] = useState(false);
  const [FdropOn, setFDropOn] = useState(false);

  function handlePageChange(e) {
    setPage(!page);
  }
  function handleFeaturesDropDown(e) {
    setFDropOn(!FdropOn);
  }

  return (
    <Fragment>
      <header
        className={
          showMenu
            ? "container main-header nav-open center-flex"
            : "container main-header center-flex"
        }
      >
        <button className="logo center-flex" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
          <h1>SaaSup</h1>
        </button>
        <div
          className={
            showMenu
              ? "header-navigation nav-open  center-flex"
              : "header-navigation  center-flex"
          }
        >
          <div
            className={
              showMenu
                ? "nav-container-bg nav-open home-header-nav  center-flex"
                : "nav-container-bg home-header-nav center-flex"
            }
          >
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <div className="dropdown">
              <div
                className="dropdown-head center-flex"
                onClick={handleFeaturesDropDown}
              >
                <span
                  className={FdropOn ? "nav-titles drop-active" : "nav-titles"}
                >
                  Features
                </span>
                {!FdropOn ? (
                  <BsCaretDownFill className="nav-arrow-icons" />
                ) : (
                  <BsCaretUpFill className="nav-arrow-icons up-icon" />
                )}
              </div>
              {FdropOn && (
                <div className="dropdown-options flex-column">
                  <Link to="/features">Features Page</Link>
                  <Link to="/integration">Integration</Link>
                  <Link to="/integration-single">Integration Single</Link>
                </div>
              )}
            </div>
            <div className="dropdown">
              <div
                className="dropdown-head center-flex"
                onClick={handlePageChange}
              >
                <span
                  className={page ? "nav-titles drop-active" : "nav-titles"}
                >
                  Pages
                </span>
                {!page ? (
                  <BsCaretDownFill className="nav-arrow-icons" />
                ) : (
                  <BsCaretUpFill className="nav-arrow-icons up-icon" />
                )}
              </div>
              {page && (
                <div className="dropdown-options flex-column">
                  <Link to="/style-guide">Style Guide</Link>
                  <Link to="/blog-single">Blog Single</Link>
                  <Link to="/price">Price</Link>
                  <Link to="/price-single">Price Single</Link>
                  <Link to="/careers">Careers</Link>
                  <Link to="/career-single">Career Single</Link>
                  <Link to="/error-404">Error 404</Link>
                  <Link to="/changelog">Changelog</Link>
                  <Link to="/license">License</Link>
                  <Link to="/password">Password</Link>
                </div>
              )}
            </div>
            <Link to="/blog">Blog</Link>
            <Link to="/contact-us">Contact</Link>
          </div>
          <button className="home-header-btn sign-in-btn">Sign In</button>
        </div>
        <div className="mobile-menu-icon">
          <button className="menu-open" onClick={() => setShowMenu(!showMenu)}>
            <FiMenu />
          </button>
          <button
            className={showMenu ? "nav-open menu-close" : "menu-close"}
            onClick={() => setShowMenu(!showMenu)}
          >
            <RiCloseLine />
          </button>
        </div>
      </header>
    </Fragment>
  );
};
