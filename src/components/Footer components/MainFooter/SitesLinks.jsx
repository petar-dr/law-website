import React from "react";
import { Link } from "react-router-dom";

function SitesLinks() {
  return (
    <div className="sitesLinks">
      <h3 className="sitesLinks__title">SITES LINKS</h3>
      <ul className="sitesLinks__list">
        <li className="sitesLinks__list__item">
          <Link to="/" className="sitesLinks__list__link">
            Home
          </Link>
        </li>
        <li className="sitesLinks__list__item">
          <Link to="/blog" className="sitesLinks__list__link">
            Blog
          </Link>
        </li>
        <li className="sitesLinks__list__item">
          <Link to="/aboutUs" className="sitesLinks__list__link">
            About us
          </Link>
        </li>
        <li className="sitesLinks__list__item">
          <Link to="/ourTeam" className="sitesLinks__list__link">
            Our team
          </Link>
        </li>
      </ul>
    </div >
  );
}

export default SitesLinks;
