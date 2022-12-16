import React from "react";
import { Link } from "react-router-dom";
import peopleGrp from "../../assets/pplgrp.png";
import getImageByKey from "../../ImageMapping";

const FeaturedProduct = ({image}) => {
  return (
    <Link to="/product" className="featured-product container gap--lg container--center-row ">
      <img src={image} alt="featured product" />
      <div className="container container--col gap--lg featured__product-info">
        <h3 className="product__heading">The Boolean Egyptian</h3>
        <p className="product__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor pur
        </p>
        <div className="container container--between ">
          <img className="people-grp" src={peopleGrp} alt="people grp" />
          <p className="dark-para">64 major creators</p>
          <button className="round-btn more-info">
            <img src={getImageByKey("arrow")} alt="more info" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProduct;
