import React from "react";
import videoBg from "../../../assets/video/video.mp4";
import ExploreArrow from "./ExploreArrow";

function VideoCover() {
  
  return (
    <div className="videoBox">
      <video
        // preload="auto"
        src={videoBg}
        autoPlay
        loop
        muted
        className="videoBox__videoBg"
      ></video>
      <h1 className="videoBox__title">Legal Advice. Strategy. Solutions.</h1>
      {/* <div className="videoBox__bottomDiv">
        <h3 className="videoBox__bottomDiv__text">Explore site</h3>
        <a href="#section2">
          <BsArrowDownCircle className="videoBox__bottomDiv__icon" />
        </a>
      </div> */}
      {/* <div className="videoBox__logoBack"></div> */}
      <ExploreArrow/>
    </div>
  );
}

export default VideoCover;
