import React from "react";
import { FiPhone } from "react-icons/fi";

function PhoneCard() {
  return (
    <a className="phoneCard" href="tel:+38164 44 22 111">
      <FiPhone className="contactsLarge__contacts__wrapper__link__icon" />
      Tel: +38164 44 22 111
    </a>
  );
}

export default PhoneCard;
