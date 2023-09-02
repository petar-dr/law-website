import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import Translation from "./Translation";

function TopNavbar() {
  return (
    <div className="topNav">
      <div className="topNav__contacts">
        {/* <a className="topNav__contacts__number" href="tel:+4733378901">
          <FaPhoneAlt className="topNav__contacts__phonelIcon" />
          Call for free consulatation: 
          +47 333 78 901
        </a> */}
        {/* <a className="topNav__contacts__email" href="mailto: abc@example.com">
          <FaEnvelope className="topNav__contacts__emailIcon" />
          abc@example.com
        </a> */}
        <span className="topNav__rightSection__workTime">
          <BiTime className="topNav__rightSection__workTime__icon" />
          <span>Working hours:&nbsp;&nbsp;</span>
          <span>Monday to Friday&nbsp;</span>
          <span>8am - 4pm</span>
        </span>
      </div>
      <div className="topNav__rightSection">
        <Translation />
      </div>
    </div>
  );
}

export default TopNavbar;
