import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BiTime } from "react-icons/bi";

function TopNavbar() {
  return (
    <div className="topNav">
      <div className="topNav__contacts">
        <a className="topNav__contacts__number" href="tel:+4733378901">
          <FaPhoneAlt className="topNav__contacts__phonelIcon" />
          +47 333 78 901
        </a>
        <a className="topNav__contacts__email" href="mailto: abc@example.com">
          <FaEnvelope className="topNav__contacts__emailIcon" />
          abc@example.com
        </a>
      </div>
      <div className="topNav__workTime">
        <span>
          <BiTime className="className=" topNav__workTime__icon /> 
          Monday to Friday 8am - 4pm
        </span>
      </div>
      
    </div>
  );
}

export default TopNavbar;
