import React from "react";
import sliderImg from "../../assets/slider.svg";
import { item } from "../../animation/animation";
import { motion } from "framer-motion";

const Carousel = () => {
  return (
    <motion.div
      variants={item}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="card"
    >
      <img src={sliderImg} alt="slider Image" aria-hidden="true" />
    </motion.div>
  );
};

export default Carousel;
