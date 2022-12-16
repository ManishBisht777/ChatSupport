import React from "react";
import sliderImg from "../../assets/slider.svg";

const Carousel = () => {
  return (
    <div className="card">
      <img src={sliderImg} alt="slider Image" aria-hidden="true" />
    </div>
  );
};

export default Carousel;
