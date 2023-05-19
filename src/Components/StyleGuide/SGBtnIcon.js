import React, { Fragment } from "react";
import "./SGBtnIcon.css";
import { AiFillApple } from "react-icons/ai";
import { MdAndroid } from "react-icons/md";
import icon1 from "../../Assets/StyleGuide/icon1.png";
import icon2 from "../../Assets/StyleGuide/Icon2.png";
import icon3 from "../../Assets/StyleGuide/icon3.png";
import icon4 from "../../Assets/StyleGuide/icon4.png";
import icon5 from "../../Assets/StyleGuide/icon5.png";
import icon6 from "../../Assets/StyleGuide/icon6.png";
import row1_1 from "../../Assets/StyleGuide/row1-1.png";
import row1_2 from "../../Assets/StyleGuide/row1-2.png";
import row1_3 from "../../Assets/StyleGuide/row1-3.png";
import row1_4 from "../../Assets/StyleGuide/row1-4.png";
import row1_5 from "../../Assets/StyleGuide/row1-5.png";
import row1_6 from "../../Assets/StyleGuide/row1-6.png";
import row1_7 from "../../Assets/StyleGuide/row1-7.png";
import row2_1 from "../../Assets/StyleGuide/row2-1.png";
import row2_2 from "../../Assets/StyleGuide/row2-2.png";
import row2_3 from "../../Assets/StyleGuide/row2-3.png";
import row2_4 from "../../Assets/StyleGuide/row2-4.png";
import row3_1 from "../../Assets/StyleGuide/row3-1.png";
import row3_2 from "../../Assets/StyleGuide/row3-2.png";
import row3_3 from "../../Assets/StyleGuide/row3-3.png";
import row3_4 from "../../Assets/StyleGuide/row3-4.png";
import row3_5 from "../../Assets/StyleGuide/row3-5.png";

export const SGBtnIcon = () => {
  return (
    <Fragment>
      <section className="container sg-container grid-column-two grid-column-btns">
        <div className="sg-sub-header">
          <p>Button</p>
          <p>Component, Button style and size variations</p>
        </div>
        <article className="flex-column buttons-container">
          <div className="btns-row">
            <button className="sign-in-btn">Small</button>
            <button className="sign-in-btn">Default</button>
            <button className="sign-in-btn btn-large">Button Large</button>
          </div>
          <p className="right-sub-heading">Button Style</p>
          <div className="btns-row">
            <button
              className="sign-in-btn"
              style={{ backgroundColor: "#FFFFFF", color: "#242331" }}
            >
              Small
            </button>
            <button
              className="sign-in-btn"
              style={{ backgroundColor: "#242331" }}
            >
              Default
            </button>
            <button
              className="sign-in-btn btn-large"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#242331",
                border: "1px solid #D3D3D3",
              }}
            >
              Button Large
            </button>
          </div>
          <p className="right-sub-heading">App Button</p>
          <div className="btns-row">
            <button
              className="sign-in-btn app-btn center-flex"
              style={{ backgroundColor: "#242331" }}
            >
              <AiFillApple className="app-cart-btns" />
              &nbsp;App Store
            </button>
            <button
              className="sign-in-btn app-btn center-flex"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#242331",
                border: "1px solid #D3D3D3",
              }}
            >
              <MdAndroid className="app-cart-btns" />
              &nbsp;Play Store
            </button>
          </div>
          <p className="right-sub-heading">Cart Button</p>
          <div className="btns-row">
            <button className="sign-in-btn cart-btn">Cart Button</button>
          </div>
        </article>
      </section>
      <section className="container sg-container">
        <div className="sg-sub-header">
          <p>Iconography</p>
          <p>Little Icons and Graphics that help out in various ways.</p>
        </div>
        <article className="iconog-container center-flex">
          <div className="iconog-six-icons">
            <img src={icon1} alt="Icons" />
            <img src={icon2} alt="Icons" />
            <img src={icon3} alt="Icons" />
            <img src={icon4} alt="Icons" />
            <img src={icon5} alt="Icons" />
            <img src={icon6} alt="Icons" />
          </div>
          <div className="iconog-row1">
            <div>
              <img className="first-exception" src={row1_1} alt="Icons" />
            </div>
            <div className="center-flex" style={{ backgroundColor: "#EFADFF" }}>
              <img src={row1_2} alt="Icons" />
            </div>
            <div className="center-flex" style={{ backgroundColor: "#FFDBB0" }}>
              <img src={row1_3} alt="Icons" />
            </div>
            <div className="center-flex" style={{ backgroundColor: "#FFCACA" }}>
              <img src={row1_4} alt="Icons" />
            </div>
            <div className="center-flex" style={{ backgroundColor: "#CAC2FF" }}>
              <img src={row1_5} alt="Icons" />
            </div>
            <div className="center-flex" style={{ backgroundColor: "#FFDBE6" }}>
              <img src={row1_6} alt="Icons" />
            </div>
            <div className="center-flex" style={{ backgroundColor: "#B7EEFF" }}>
              <img src={row1_7} alt="Icons" />
            </div>
          </div>
          <div className="iconog-row2">
            <div>
              <img src={row2_1} alt="Icons" />
            </div>
            <div>
              <img src={row2_2} alt="Icons" />
            </div>
            <div>
              <img src={row2_3} alt="Icons" />
            </div>
            <div>
              <img src={row2_4} alt="Icons" />
            </div>
          </div>
          <div className="iconog-row3">
            <div>
              <img className="first-exception" src={row3_1} alt="Icons" />
            </div>
            <div className="center-flex" style={{ backgroundColor: "#F563D3" }}>
              <img src={row3_2} alt="Icons" />
            </div>
            <div className="center-flex" style={{ backgroundColor: "#FAD5E9" }}>
              <img src={row3_3} alt="Icons" />
            </div>
            <div>
              <img className="first-exception" src={row3_4} alt="Icons" />
            </div>
            <div>
              <img className="first-exception" src={row3_5} alt="Icons" />
            </div>
          </div>
        </article>
      </section>
    </Fragment>
  );
};
