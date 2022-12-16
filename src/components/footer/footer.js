import React from "react";
import getImageByKey from "../../ImageMapping";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main container gap--lg container--center-row">
        <img src={getImageByKey( "logo")} alt="artsy" />

        <ul className="footer__links container container--col gap--md">
          <li>Home</li>
          <li>Marketplace</li>
          <li>Auctions</li>
          <li>Drops</li>
        </ul>
        <ul className="footer__links container container--col gap--md">
          <li>Blog</li>
          <li>Wallets</li>
          <li>Rates</li>
          <li>High bids</li>
        </ul>
        <ul className="footer__links container container--col gap--md">
          <li className="container gap--md">
            <img className="footer__icon" src={getImageByKey("mail")} alt="" />
            artsystudios@gmail.com
          </li>
          <li className="container gap--md">
            <img className="footer__icon" src={getImageByKey("location")} alt="" /> Lagos,
            Nigeria.
          </li>
        </ul>
      </div>

      <p className="copyright container container--center">
        Artsystudios © 2022. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
