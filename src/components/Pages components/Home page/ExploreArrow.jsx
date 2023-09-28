import React, { useEffect, useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";

function ExploreArrow() {
  const [showArrow, setShowArrow] = useState(true);

  function changeNavBackground() {
    if (window.scrollY >= 67) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
  }
  function scrollSection2() {
    document.getElementById("exploreArrow").scrollIntoView();
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
    document
      .getElementById("exploreArrow")
      .addEventListener("click", scrollSection2);
  }, []);
  return (
    <div id="exploreArrow" className="videoBox__arrow">
      {/* <a href="#section2"> */}
      <BsArrowDownCircle
        className={
          showArrow
            ? "videoBox__arrow__icon"
            : "videoBox__arrow__icon hideArrow"
        }
      />
      {/* </a> */}
    </div>
  );
}

export default ExploreArrow;
