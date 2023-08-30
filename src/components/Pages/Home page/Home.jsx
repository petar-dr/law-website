import React from "react";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
// import FreeConsultation from "./FreeConsultation";
import VideoCover from "./VideoCover";

function Home() {
  return (
    <div className="homePage">
      {/* <section className="homePage__section1"></section> */}
      <VideoCover/>
      <WhoWeAre />
      <Services/>
      {/* <FreeConsultation/> */}
    </div>
  );
}

export default Home;
