import React from "react";
import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <>
      <ul className="mainNav__navMenu">
        <li className="mainNav__navMenu__item">
          <Link to="/" className="mainNav__navMenu__item__link">
            Home
          </Link>
        </li>
        <li className="mainNav__navMenu__item">
          <Link to="/blog" className="mainNav__navMenu__item__link">
            Blog
          </Link>
        </li>
        <li className="mainNav__navMenu__item">
          <Link to="/about" className="mainNav__navMenu__item__link">
            About us
          </Link>
        </li>
        <li className="mainNav__navMenu__item">
          <Link to="/team" className="mainNav__navMenu__item__link">
            Our team
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavMenu;
