import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import getImageByKey from "../../ImageMapping";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavbar = (e) => {
    e.stopPropagation();
    console.log(e.target.tagName);
    setToggleNav(!toggleNav);
  };

  return (
    <nav className="navbar container container--between">
      <button
        className="navbar__hamburger"
        id="togglemenu"
        aria-expanded={toggleNav}
        aria-label="toggle-menu"
        onClick={() => setToggleNav(!toggleNav)}
      >
        <img src={getImageByKey("ham")} alt="toggle menu" />
      </button>
      <img className="navbar__logo" src={getImageByKey( "logo")} alt="Artsy logo" />
      <ul
        className="container gap--lg  navbar__NavLinks navlink-link"
        onClick={(e) => {
          toggleNavbar(e);
        }}
      >
        <li>
          <img className="navbar__logo-mobile" src={getImageByKey( "logo")} alt="Artsy logo" />
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active--link" : "")}
            to="/"
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active--link" : "")}
            to="/livesupport"
          >
            live support
          </NavLink>
        </li>
        
      </ul>
      <ul className="container gap--md navbar__NavLinks ">
        <li>
          <Link to="/search">
            <img src={getImageByKey( "search")} alt="search" />
          </Link>
        </li>
        <li>
          <Link to="cart">
            <img src={getImageByKey("cart")} alt="cart" />
          </Link>
        </li>
        <li>
          <Link to="/notification">
            <img src={getImageByKey("bell")} alt="notification" />
          </Link>
        </li>
      </ul>

      <button className="nav__close" onClick={() => setToggleNav(!toggleNav)}>
        <img src={getImageByKey("close")} alt="nav close" />
      </button>
    </nav>
  );
};

export default Navbar;
