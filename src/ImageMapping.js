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


const images = {
 search,cart,bell,logo,ham,close,arrow,creator,landingImage,mail,location,feature1,feature2,feature3
};

function getImageByKey(key) {
  return images[key];
}

export default getImageByKey;