import React from "react";
import { Link } from "react-router-dom";
function MainNavbar() {
  return (
    <nav className="mainNav">
      <Link to="/" className="mainNav__navLogo">
        LOGO
      </Link>
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
          <Link to="/aboutUs" className="mainNav__navMenu__item__link">
            About us
          </Link>
        </li>
        <li className="mainNav__navMenu__item">
          <Link to="/ourTeam" className="mainNav__navMenu__item__link">
            Our team
          </Link>
        </li>
      </ul>
      <Link to="/contacUs" className="mainNav__btnContact">
        Contact us
      </Link>
    </nav>
  );
}

export default MainNavbar;
