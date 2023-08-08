import React from "react";
import SitesLinks from "./SitesLinks";
import PracticeAreas from "./PracticeAreas";
import Posts from "./Posts";
import Contacts from "./Contacts";

function MainFooter() {
  return (
    <div className="mainFooter">
      <SitesLinks className="mainFooter--section"/>
      <PracticeAreas className="mainFooter--section"/>
      <Posts className="mainFooter--section"/>
      <Contacts className="mainFooter--section"/>
    </div>
  );
}

export default MainFooter;
