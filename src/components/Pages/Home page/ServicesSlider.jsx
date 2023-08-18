import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import family from "../../../assets/img/servicesImg/family.jpg";
import crime from "../../../assets/img/servicesImg/crime.jpg";
import injury from "../../../assets/img/servicesImg/injury.jpg";
import corporate from "../../../assets/img/servicesImg/corporate.jpg";
import realEstate from "../../../assets/img/servicesImg/realEstate.jpg";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      className: "slider variable-width",
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <CustomSlider
            index={1}
            title={"Family law"}
            imgUrl={family}
          />
          <CustomSlider
            index={2}
            title={"Criminal defence"}
            imgUrl={crime}
          />
          <CustomSlider
            index={3}
            title={"Real estate"}
            imgUrl={realEstate}
          />
          <CustomSlider
            index={4}
            title={"Corporate law"}
            imgUrl={corporate}
          />
          <CustomSlider
            index={5}
            title={"Personal injury"}
            imgUrl={injury}
          />
        </Slider>
      </div>
    );
  }
}

function CustomSlider({ index, title, imgUrl }) {
  return (
    <Link className="customSlider">
      <h2 className="customSlider__title">{title}</h2>
      <img src={imgUrl} alt="" className="customSlider__img" />
    </Link>
  );
}
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}
