import React from "react";
import { item } from "../../animation/animation";
import { motion } from "framer-motion";

const Carousel = ({ image }) => {
  return (
    <motion.div
      variants={item}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="card"
    >
      <img src={image} alt="slider Image" aria-hidden="true" />
    </motion.div>
  );
};

export default Carousel;
