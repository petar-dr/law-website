import React from "react";

function TopNavbar() {
  return (
    <div className="topNav">
      <div className="topNav__consultationNumber">
        <span>
          Call for free consultation: 
          <a href="tel:+4733378901"> +47 333 78 901</a>
        </span>
      </div>
      <div className="topNav__workTime">
        <span>
          Working time: Monday to Friday 08:00-16:00
        </span>
      </div>
    </div>
  );
}

export default TopNavbar;
