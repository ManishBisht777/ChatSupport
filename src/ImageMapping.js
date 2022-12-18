// icons import

import search from "./assets/search.svg";
import cart from "./assets/cart.svg";
import bell from "./assets/bell.svg";
import logo from "./assets/artsy.svg";
import ham from "./assets/ham.svg";
import close from "./assets/close.svg";
import mail from "./assets/mail.svg";
import location from "./assets/location.svg";

import arrow from "./assets/arrow.svg";
import creator from "./assets/creator.svg";
import landingImage from "./assets/landing.svg";

import feature1 from "./assets/featured1.svg";
import feature2 from "./assets/featured2.svg";
import feature3 from "./assets/featured3.svg";

import productImage from "./assets/product.svg";
import curr from "./assets/curr.svg";
import sliderImg from "./assets/slider.svg";
import c1 from "./assets/c1.jpg";
import c2 from "./assets/c2.jpg";
import c3 from "./assets/c3.jpg";
import c4 from "./assets/c4.jpg";

const images = {
  search,
  cart,
  bell,
  logo,
  ham,
  close,
  arrow,
  creator,
  landingImage,
  mail,
  location,
  feature1,
  feature2,
  feature3,
  productImage,
  curr,
  sliderImg,
  c1,
  c2,
  c3,
  c4,
};

function getImageByKey(key) {
  return images[key];
}

export default getImageByKey;
