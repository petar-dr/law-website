import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

function Socials() {
  return (
    <div className="socials">
      <h5 className="socials__title">Conected with us</h5>
      <ul className="socials__list">
        <li className="socials__list__item">
          <a
            href="http://www.facebook.com"
            className="socials__list__item__link"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="socials__list__item__link__icon" />
          </a>
        </li>
        <li className="socials__list__item">
          <a
            href="http://www.instagram.com"
            className="socials__list__item__link"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="socials__list__item__link__icon" />
          </a>
        </li>
        <li className="socials__list__item">
          <a
            href="http://www.linkedin.com"
            className="socials__list__item__link"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="socials__list__item__link__icon" />
          </a>
        </li>
        <li className="socials__list__item">
          <a
            href="http://www.twitter.com"
            className="socials__list__item__link"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="socials__list__item__link__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
