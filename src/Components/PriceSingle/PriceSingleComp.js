import React, { Fragment, useState } from "react";
import "./PriceSingleComp.css";
import { Header } from "../../Layouts/Header";
import { CiCircleCheck } from "react-icons/ci";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";

export const PriceSingleComp = () => {
  const [palnsDown, setPlansDown] = useState(false);
  const [palnsHead, setPlansHead] = useState("Select Plan Duration");
  const [planDetail, setPlanDetail] = useState(["7.99", "month"]);

  function handlePlansData(plan) {
    setPlansDown(false);
    setPlansHead(plan);
    let arrayplan = plan.split("/");
    setPlanDetail(arrayplan);
  }

  return (
    <Fragment>
      <section className="each-page-topcompo">
        <Header />
        <section className="container pricesingle-container">
          <div className="pricesingle-left-box flex-column">
            <div className="ps-left-first flex-column">
              <h2 className="primary-title">Advanced Plan</h2>
              <p className="aboutus-p">
                Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
                ullamcorper sed pharetra sene.
              </p>
              <p className="aboutus-p ps-align-row">
                <CiCircleCheck className="ps-icon" />
                All in Basic, plus
              </p>
              <p className="aboutus-p ps-align-row">
                <CiCircleCheck className="ps-icon" />
                Up to 10 credit cards
              </p>
              <p className="aboutus-p ps-align-row">
                <CiCircleCheck className="ps-icon" />
                Invest in stocks, ETFs and cryptos
              </p>
              <p className="aboutus-p ps-align-row">
                <CiCircleCheck className="ps-icon" />
                Premium customer support
              </p>
            </div>
            <hr className="ps-left-box-line" />
            <div className="ps-left-last flex-column">
              <h3 className="trinary-title">
                Is Standard Plan a good choice for me?
              </h3>
              <p className="aboutus-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                .
              </p>
              <ul>
                <li className="aboutus-p">
                  <b>01.</b> There are many variations of passages
                </li>
                <li className="aboutus-p">
                  <b>02. </b>Majority have suffered alteration in some form.
                </li>
                <li className="aboutus-p">
                  <b>03. </b>If you are going to use a passage of Lorem Ipsum.
                </li>
                <li className="aboutus-p">
                  <b>04. </b>It uses a dictionary of over 200 Latin words,
                  combined.
                </li>
              </ul>
              <p className="aboutus-p">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="pricesingle-right-box flex-column">
            <h3 className="trinary-title">Choose your plan duration</h3>
            <p className="aboutus-p">
              Lorem ipsum dolor sit amet consectet udipiscing elit terdum
            </p>
            <div
              className="sign-in-btn ps-plan-dropdown"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#242331",
                border: "1px solid #D3D3D3",
              }}
              onClick={() => setPlansDown(!palnsDown)}
            >
              {palnsHead}
              {palnsDown ? <BsCaretUpFill /> : <BsCaretDownFill />}
            </div>
            {palnsDown && (
              <div className="ps-plans-options flex-column">
                <p onClick={() => handlePlansData("$7.99 / month")}>
                  $7.99 / month
                </p>
                <p onClick={() => handlePlansData("$21.99 / 3 month")}>
                  $21.99 / 3 month
                </p>
                <p onClick={() => handlePlansData("$39.99 / 6 month")}>
                  $39.99 / 6 month
                </p>
                <p onClick={() => handlePlansData("$79.99 / year")}>
                  $79.99 / year
                </p>
              </div>
            )}
            <h2 className="primary-title">
              {planDetail[0]}
              <span> / {planDetail[1]}</span>
            </h2>
            <button className="sign-in-btn">Add to Cart</button>
          </div>
        </section>
      </section>
    </Fragment>
  );
};
