import React from "react";
import WhoWeAre from "../components/Pages components/Home page/WhoWeAre";
import Services from "../components/Pages components/Home page/Services";
import VideoCover from "../components/Pages components/Home page/VideoCover";

function Home() {
  return (
    <div className="homePage">
      <VideoCover />
      <WhoWeAre />
      <Services />
    </div>
  );
}

export default Home;
