import React from "react";
import { Link } from "react-router-dom";
import peopleGrp from "../../assets/pplgrp.png";
import getImageByKey from "../../ImageMapping";
import { motion } from "framer-motion";
import { container, item } from "../../animation/animation";

const FeaturedProduct = ({ image }) => {
  return (
    <div className="featured-product container gap--lg container--center-row ">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={image}
        alt="featured product"
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ease: "easeInOut" }}
        className="container container--col gap--lg featured__product-info"
      >
        <motion.h3
          variants={item}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="product__heading"
        >
          The Boolean Egyptian
        </motion.h3>
        <motion.p
          variants={item}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="product__para"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor pur
        </motion.p>
        <motion.div
          variants={item}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="container container--between "
        >
          <img className="people-grp" src={peopleGrp} alt="people grp" />
          <p className="dark-para">64 major creators</p>
          <button className="round-btn more-info">
            <Link to="/product">
              <img src={getImageByKey("arrow")} alt="more info" />
            </Link>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeaturedProduct;
