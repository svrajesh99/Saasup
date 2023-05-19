import React, { Fragment } from "react";
import "./BlogSingleComp.css";
import { Header } from "../../Layouts/Header";
import bs_img from "../../Assets/BlogSingle/bs_img.png";
import user from "../../Assets/BlogSingle/user.jpg";
import i3 from "../../Assets/BlogSingle/bsi3.png";
import { RiDoubleQuotesL } from "react-icons/ri";

export const BlogSingleComp = () => {
  return (
    <Fragment>
      <section className="each-page-topcompo">
        <Header />
        <section className="blog-single-container flex-column container">
          <img className="bs-img1" src={bs_img} alt="Blog" />
          <div className="blog-single-title">
            <h2>Top 10 tips for making your Saas product sticky</h2>
            <div className="bst-right flex-column">
              <div className="bst-right-user">
                <img src={user} alt="user" />
                <div>
                  <h3>John Peeter</h3>
                  <p>Designer</p>
                </div>
              </div>
              <p className="aboutus-p">
                <b>Post : </b>November 15, 2022
              </p>
              <div className="bst-right-btns">
                <button className="sign-in-btn">Marketing</button>
                <button className="sign-in-btn">Analysis</button>
                <button className="sign-in-btn">Product</button>
              </div>
            </div>
          </div>
          <article className="blogsingle-details-container flex-column">
            <p className="aboutus-p">
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
              massa quis enim.
            </p>
            <h3 className="trinary-title">
              How to choose the right app reseller program
            </h3>
            <p className="aboutus-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="aboutus-p">
              <b>01. </b>There are many variations of passages of Lorem Ipsum
              available.
            </p>
            <p className="aboutus-p">
              <b>02. </b>Majority have suffered alteration in some form, by
              injected humour.
            </p>
            <p className="aboutus-p">
              <b>03. </b>If you are going to use a passage of Lorem Ipsum.
            </p>
            <p className="aboutus-p">
              <b>04. </b>It uses a dictionary of over 200 Latin words, combined
              with a handful
            </p>
            <p className="aboutus-p">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <h3 className="trinary-title">
              Why a productivity app can change your work performance
            </h3>
            <p className="aboutus-p">
              you are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't embarrassing hidden in the middle of text. All the
              Lorem Ipsum generators on the Internet tend to repeat predefined
              chunks as necessary, making this the first true generator on the
              Internet.
            </p>
            <div className="bs-details-img">
              <img src={i3} alt="blog" />
              <p>Making this the first true generator on the Internet.</p>
            </div>
            <h3 className="trinary-title">
              Why a productivity app can change your work performance
            </h3>
            <p className="aboutus-p">
              you are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't embarrassing hidden in the middle of text. All the
              Lorem Ipsum generators on the Internet tend to repeat predefined
              chunks as necessary, making this the first true generator on the
              Internet.
            </p>
            <div className="list-styling bs-details-list">
              <ul>
                <li className="aboutus-p">
                  You are going to use a passage of Lorem Ipsum, you need to be
                </li>
                <li className="aboutus-p">
                  Sure there isn't embarrassing hidden in the middle of text.
                  All the
                </li>
                <li className="aboutus-p">
                  Lorem Ipsum generators on the Internet tend to repeat
                  predefined
                </li>
                <li className="aboutus-p">
                  Chunks as necessary, making this the first true generator
                </li>
              </ul>
            </div>
            <article className="bq-single-container">
              <div className="blog-single-qoute">
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
            <h2 className="trinary-title">
              What is your favorite productivity Saas?
            </h2>
            <p className="aboutus-p">
              you are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't embarrassing hidden in the middle of text. All the
              Lorem Ipsum generators on the Internet tend to repeat predefined
              chunks as necessary, making this the first true generator on the
              Internet.
            </p>
          </article>
        </section>
        <hr className="single-blog-horz" />
      </section>
    </Fragment>
  );
};
