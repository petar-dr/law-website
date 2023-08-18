import React from "react";
import { Link } from "react-router-dom";

function SitesLinks() {
  return (
    <div className="sitesLinks col-12 col-sm-6 col-lg-3">
      <h3 className="sitesLinks__title">Sites links</h3>
      <ul className="sitesLinks__list">
        <li className="sitesLinks__list__item">
          <Link to="/" className="sitesLinks__list__item__link">
            Home
          </Link>
        </li>
        <li className="sitesLinks__list__item">
          <Link to="/blog" className="sitesLinks__list__item__link">
            Blog
          </Link>
        </li>
        <li className="sitesLinks__list__item">
          <Link to="/aboutUs" className="sitesLinks__list__item__link">
            About us
          </Link>
        </li>
        <li className="sitesLinks__list__item">
          <Link to="/ourTeam" className="sitesLinks__list__item__link">
            Our team
          </Link>
        </li>
      </ul>
    </div >
  );
}

export default SitesLinks;
