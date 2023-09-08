import React from "react";
// import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import {FaSquareFacebook, FaSquareXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Socials() {
  return (
    <div className="socials">
      <ul className="socials__list">
        <li className="socials__list__item">
          <a
            href="http://www.facebook.com"
            className="socials__list__item__link"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareFacebook className="socials__list__item__link__icon" />
          </a>
        </li>
        <li className="socials__list__item">
          <a
            href="http://www.instagram.com"
            className="socials__list__item__link"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="socials__list__item__link__icon" />
          </a>
        </li>
        <li className="socials__list__item">
          <a
            href="http://www.linkedin.com"
            className="socials__list__item__link"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="socials__list__item__link__icon" />
          </a>
        </li>
        <li className="socials__list__item">
          <a
            href="http://www.twitter.com"
            className="socials__list__item__link"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareXTwitter className="socials__list__item__link__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
