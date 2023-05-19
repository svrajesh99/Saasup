import React, { Fragment } from "react";
import "./SGColorTypo.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Header } from "../../Layouts/Header";

export const SGColorTypo = () => {
  return (
    <Fragment>
      <section className="each-page-topcompo">
        <Header />
        <h2 className="page-title">Style Guide</h2>
        <section className="container sg-container grid-column-two">
          <div className="sg-sub-header">
            <p>Color</p>
            <p>
              Primaries, shades and text and any other color style used in
              Saasup.
            </p>
          </div>
          <section className="colors-types-box flex-column">
            <p className="color-type-name">Primary Colors</p>
            <div className="colors-cards-box">
              <div className="colors-card flex-column">
                <div
                  className="color-bg-card"
                  style={{ backgroundColor: "#5236FF" }}
                ></div>
                <p className="color-name">Primary 1</p>
                <p className="color-code">5236FF</p>
              </div>
              <div className="colors-card flex-column">
                <div
                  className="color-bg-card"
                  style={{ backgroundColor: "#242331" }}
                ></div>
                <p className="color-name">Primary 2</p>
                <p className="color-code">242331</p>
              </div>
            </div>
            <p className="color-type-name">Secondary Colors</p>
            <div className="colors-cards-box">
              <div className="colors-card flex-column">
                <div
                  className="color-bg-card"
                  style={{
                    backgroundColor: "#F9F9F9",
                    border: "1px solid #CACACA",
                  }}
                ></div>
                <p className="color-name">Secondary 1</p>
                <p className="color-code">F9F9F9</p>
              </div>
              <div className="colors-card flex-column">
                <div
                  className="color-bg-card"
                  style={{ backgroundColor: "#EFECFF" }}
                ></div>
                <p className="color-name">Secondary 2</p>
                <p className="color-code">EFECFF</p>
              </div>
              <div className="empty-color"></div>
              <div className="colors-card flex-column">
                <div
                  className="color-bg-card"
                  style={{ backgroundColor: "#242331" }}
                ></div>
                <p className="color-name">Secondary 3</p>
                <p className="color-code">242331</p>
              </div>
              <div className="colors-card flex-column">
                <div
                  className="color-bg-card"
                  style={{ backgroundColor: "#797979" }}
                ></div>
                <p className="color-name">Secondary 4</p>
                <p className="color-code">797979</p>
              </div>
              <div className="colors-card flex-column">
                <div
                  className="color-bg-card"
                  style={{ backgroundColor: "#FFFFFF" }}
                ></div>
                <p className="color-name">Secondary 5</p>
                <p className="color-code">FFFFFF</p>
              </div>
            </div>
          </section>
        </section>

        <section className="container sg-container sg-text-gridrow">
          <article className="grid-column-two">
            <div className="sg-sub-header">
              <p>Typography</p>
              <p>Headings, body and other common text elements.</p>
            </div>
            <div className="typo-display-box flex-column">
              <p>Display 01 Text</p>
              <hr />
              <p>Heading 01 Text</p>
              <hr />
              <p>Heading 02 Text</p>
              <hr />
              <p>Heading 03 Text</p>
              <hr />
              <p>Heading 04 Text</p>
              <hr />
              <p>Heading 05 Text</p>
              <hr />
              <p>Heading 06 Text</p>
              <hr />
            </div>
          </article>
          <article className="grid-column-two grid-column-parag">
            <div className="sg-sub-header">
              <p>Paragraph</p>
              <p>Paragraph, body and other common text elements.</p>
            </div>
            <div className="parag-box flex-column">
              <div className="each-parag">
                <p>Large Paragraph</p>
                <p>
                  There are many variations of passages of Lorem Ipscted humour,
                  or randomised words which don't look slightly believable. If
                  you are going to use a passage .
                </p>
              </div>
              <div className="each-parag">
                <p>Default Paragraph</p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page from when looking at it
                  layout. The point of using Lorem Ipsum
                </p>
              </div>
            </div>
          </article>
          <article className="grid-column-two grid-column-list">
            <div className="sg-sub-header">
              <p>List</p>
            </div>
            <div className="list-box flex-column">
              <p>Bullet List</p>
              <div className="list-styling">
                <ul>
                  <li>
                    You are going to use a passage of Lorem Ipsum, you need to
                    be
                  </li>
                  <li>
                    there isn't embarrassing hidden in the middle of text. All
                    the
                  </li>
                  <li>
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined
                  </li>
                  <li>
                    Chunks as necessary, making this the first true generator
                  </li>
                </ul>
              </div>
              <p>Number List</p>
              <div className="list-styling">
                <ol>
                  <li>
                    <span>01</span>There are many variations of passages
                  </li>
                  <li>
                    <span>02</span>Majority have suffered alteration in some
                    form.
                  </li>
                  <li>
                    <span>03</span>If you are going to use a passage of Lorem
                    Ipsum.
                  </li>
                  <li>
                    <span>04</span>It uses a dictionary of over 200 Latin words,
                    combined.
                  </li>
                </ol>
              </div>
            </div>
          </article>

          <article className="bq-container">
            <div className="sg-sub-header">
              <p>Block Quote</p>
            </div>
            <div className="block-quote-box">
              <p>
                <RiDoubleQuotesL />
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have sufferg alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage.
              </p>
            </div>
          </article>
        </section>
      </section>
    </Fragment>
  );
};
