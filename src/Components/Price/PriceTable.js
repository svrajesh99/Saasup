import React, { Fragment } from "react";
import "./PriceTable.css";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";

export const PriceTable = () => {
  return (
    <Fragment>
      <section className="pp-pricetable-container flex-column container">
        <h3 className="trinary-title">Compare pricing packages</h3>
        <table>
          <thead>
            <tr>
              <td className="feature-head-sub feature-head-primary title-options">
                Features
              </td>
              <td className="feature-head-primary icon-options-column">
                Basic <p>$7.99 / month</p>
              </td>
              <td className=" feature-head-primary icon-options-column">
                Adv<p>$10.99 / month</p>
              </td>
              <td className=" feature-head-primary icon-options-column">
                Pro<p>$15.99 / month</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th id="feature-head" className="feature-head-sub">
                Analytics
              </th>
              <th />
              <th />
              <th />
            </tr>
            <tr>
              <th className="feature-head-sub">Realtime analytics</th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
            </tr>
            <tr>
              <th className="feature-head-sub">User Analytics</th>
              <th>
                <CiCircleRemove className="icon-wrong" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
            </tr>
            <tr>
              <th className="feature-head-sub">Funnel optimization</th>
              <th>
                <CiCircleRemove className="icon-wrong" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
            </tr>
            <tr>
              <th id="feature-head" className="feature-head-sub">
                Report
              </th>
              <th />
              <th />
              <th />
            </tr>
            <tr>
              <th className="feature-head-sub">Automated</th>
              <th>
                <CiCircleRemove className="icon-wrong" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
            </tr>
            <tr>
              <th className="feature-head-sub">AI data predictions</th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
              <th>
                <CiCircleRemove className="icon-wrong" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
            </tr>
            <tr>
              <th className="feature-head-sub">Advanced charts</th>
              <th>
                <CiCircleRemove className="icon-wrong" />
              </th>
              <th>
                <CiCircleRemove className="icon-wrong" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
            </tr>
            <tr>
              <th id="feature-head" className="feature-head-sub">
                Security
              </th>
              <th />
              <th />
              <th />
            </tr>
            <tr>
              <th className="feature-head-sub">Real-time team reports</th>
              <th>
                <CiCircleRemove className="icon-wrong" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
            </tr>
            <tr>
              <th className="feature-head-sub">Easy-to-share results</th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
            </tr>
            <tr>
              <th className="feature-head-sub">Team goal setting</th>
              <th>
                <CiCircleRemove className="icon-wrong" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
              <th>
                <CiCircleCheck className="icon-correct" />
              </th>
            </tr>
            <tr className="table-lastrow">
              <th></th>
              <th>
                <button
                  className="blacknwhite-btn"
                  style={{ height: "5.5rem" }}
                >
                  Get Started
                </button>
              </th>
              <th>
                <button
                  className="blacknwhite-btn"
                  style={{ height: "5.5rem" }}
                >
                  Get Started
                </button>
              </th>
              <th>
                <button
                  className="blacknwhite-btn"
                  style={{ height: "5.5rem" }}
                >
                  Get Started
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </section>
    </Fragment>
  );
};
