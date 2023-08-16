import React from "react";
import SitesLinks from "./SitesLinks";
import PracticeAreas from "./PracticeAreas";
import Posts from "./Posts";
import Contacts from "./Contacts";

function MainFooter() {
  return (
    <div className="mainFooter">
      <SitesLinks />
      <PracticeAreas />
      <Posts />
      <Contacts />
    </div>
  );
}

export default MainFooter;
