import React from "react";
import Support from "../../components/liveSupport/support";
import getImageByKey from "../../ImageMapping";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      <div className="product container">
        <picture>
          <source media="(min-width:800px)" srcSet={getImageByKey("c1")} />
          <img
            className="product__image"
            src={getImageByKey("c1")}
            alt="product"
          />
        </picture>

        <div className="product__info">
          <div className="product__name container gap--lg container--between">
            <h2>Beautiful flowers </h2>
            <div className="container gap--md product__price container--center-row">
              <img className="icon" src={getImageByKey("curr")} alt="" />
              <p>0.09</p>
            </div>
          </div>

          <div className="product__detail container container--col gap--md">
            <p className="container gap--md product__creator">
              Creator
              <span>Manish</span>
            </p>
            <p>Made in india</p>
            <p className="container gap--md product__view">
              Total views <span>1.5K</span>
            </p>

            <button className="button--dark">Buy This Artwork</button>
          </div>
          <div className="product__status expand__box">
            <h2>Description</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              blanditiis quae adipisci beatae quod non aperiam vitae odit
              officiis doloribus.
            </div>
          </div>
        </div>
      </div>

      <Support />

      <div className="collection">
        <div className="collection_heading container container--between">
          Explore more from this collection
          <div className="container gap--md">
            <button className="round-btn arrow left--arrow">
              <img src={getImageByKey("arrow")} alt="" />
            </button>
            <button className="round-btn arrow">
              <img src={getImageByKey("arrow")} alt="" />
            </button>
          </div>
        </div>

        <div className="collection__container container container--center-row gap--lg">
          <div className="collection__item container container--col gap--md">
            <img src={getImageByKey("c4")} alt="collection product" />
            <div className="container container--between">
              <p>Sassy</p>
              <div className="container gap--md product__price container--center-row">
                <img className="icon" src={getImageByKey("curr")} alt="" />
                <p>0.09</p>
              </div>
            </div>
          </div>
          <div className="collection__item container container--col gap--md">
            <img src={getImageByKey("c2")} alt="collection product" />
            <div className="container container--between">
              <p>Sassy</p>
              <div className="container gap--md product__price container--center-row">
                <img className="icon" src={getImageByKey("curr")} alt="" />
                <p>0.09</p>
              </div>
            </div>
          </div>
          <div className="collection__item container container--col gap--md">
            <img src={getImageByKey("c3")} alt="collection product" />
            <div className="container container--between">
              <p>Sassy</p>
              <div className="container gap--md product__price container--center-row">
                <img className="icon" src={getImageByKey("curr")} alt="" />
                <p>0.09</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Product;
