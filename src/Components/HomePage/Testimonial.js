import React, { Fragment } from "react";
import "./Testimonial.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import t_user from "../../Assets/HomePage/t-user.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Slider from "react-slick";
import "../../Layouts/Styles-sliders/slick.css";
import "../../Layouts/Styles-sliders/slick-theme.css";

export const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <section className="testimonials-container flex-column">
        <span className="testi-scroll-btns center-flex left-scroll active">
          <IoIosArrowBack />
        </span>
        <span className="testi-scroll-btns center-flex right-scroll">
          <IoIosArrowForward />
        </span>
        <button className="feature-name-btn">Testimonial</button>
        <h2 className="secondary-title">Trusted by millions of creators.</h2>
        <h2 className="secondary-title">
          <RiDoubleQuotesL />
        </h2>
        <Slider {...settings}>
          <section>
            <p className="testi-detail">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage .
            </p>
            <div className="user-info-testi">
              <img className="testi-user" src={t_user} alt="User" />
              <h3 className="testi-user-name">James Toriff</h3>
              <p className="testi-user-job">Developer</p>
              <div className="t-ratings">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
            </div>
          </section>
          <section>
            <p className="testi-detail">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <img
              className="testi-user"
              src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="User"
            />
            <h3 className="testi-user-name">Caroline Gilbert</h3>
            <p className="testi-user-job">Senior Developer</p>
            <div className="t-ratings">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </div>
          </section>
          <section>
            <p className="testi-detail">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose.
            </p>
            <img
              className="testi-user"
              src="https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="User"
            />
            <h3 className="testi-user-name">Elena Forbes</h3>
            <p className="testi-user-job">Full Stack Developer</p>
            <div className="t-ratings">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </div>
          </section>
        </Slider>
      </section>
    </Fragment>
  );
};
