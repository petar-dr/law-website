import React from "react";
import { BiTime } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import Translation from "./Translation";
import Socials from "../../../Socials";

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
          <span>
            {/* <BsCalendarEvent className="topNav__rightSection__workTime__icon" /> */}
            Monday to Friday&nbsp;
          </span>
          <span>
            {/* <BiTime className="topNav__rightSection__workTime__icon" /> */}
            8am - 4pm
          </span>
        </span>
      </div>
      <div className="topNav__rightSection">
        <Socials />
        <Translation />
      </div>
    </div>
  );
}

export default TopNavbar;
