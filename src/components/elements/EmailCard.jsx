import React from "react";
import { FaEnvelope } from "react-icons/fa";

function EmailCard() {
  return (
    <a
      className="contactsLarge__contacts__wrapper__link"
      href="mailto: abc@example.com"
    >
      <FaEnvelope className="contactsLarge__contacts__wrapper__link__icon" />
      slobodanlukovic@example.com
    </a>
  );
}

export default EmailCard;
