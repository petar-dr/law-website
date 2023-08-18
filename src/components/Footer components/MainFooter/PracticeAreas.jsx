import React from "react";
import { Link } from "react-router-dom";

function PracticeAreas() {
  return (
    <div className="practice col-12 col-sm-6 col-lg-3">
      <h3 className="practice__title">Services</h3>
      <ul className="practice__list">
        <li className="practice__list__item">
          <Link to="/" className="practice__list__item__link">
          Banking & Finance
          </Link>
        </li>
        <li className="practice__list__item">
          <Link to="/blog" className="practice__list__item__link">
          Corporate
          </Link>
        </li>
        <li className="practice__list__item">
          <Link to="/aboutUs" className="practice__list__item__link">
          Civil Litigation
          </Link>
        </li>
        <li className="practice__list__item">
          <Link to="/ourTeam" className="practice__list__item__link">
          Data Protection & Privacy
          </Link>
        </li>
        <li className="practice__list__item">
          <Link to="/ourTeam" className="practice__list__item__link">
          Real estate
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PracticeAreas;
