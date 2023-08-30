import React from "react";
// import TopFooter from "./TopFooter/TopFooter";
import MainFooter from "./MainFooter/MainFooter";
import BottomFooter from "./BottomFooter/BottomFooter";
import FreeConsultation from "./TopFooter/FreeConsultation";

function Footer() {
  return (
    <footer className="footer">
      {/* <TopFooter /> */}
      <FreeConsultation />
      <MainFooter />
      <BottomFooter />
    </footer>
  );
}

export default Footer;
