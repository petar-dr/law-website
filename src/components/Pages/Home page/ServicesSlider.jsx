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
    };
    return (
      <div>
        <Slider {...settings}>
          <CustomSlider
            style={{ width: 100 }}
            index={1}
            title={"Family law"}
            imgUrl={family}
          />
          <CustomSlider
            style={{ width: 100 }}
            index={2}
            title={"Criminal defence"}
            imgUrl={crime}
          />
          <CustomSlider
            style={{ width: 100 }}
            index={3}
            title={"Real estate"}
            imgUrl={realEstate}
          />
          <CustomSlider
            style={{ width: 100 }}
            index={4}
            title={"Corporate law"}
            imgUrl={corporate}
          />
          <CustomSlider
            style={{ width: 100 }}
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
