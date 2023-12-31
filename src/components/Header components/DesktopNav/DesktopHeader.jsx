import React, { useEffect, useState } from "react";
import TopNavbar from "./TopNav/TopNavbar";
import MainNavbar from "./MainNav/MainNavbar";
function Navbar() {
  const [navColor, setNavColor] = useState(false);

  function changeNavBackground() {
    if (window.scrollY >= 67) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
  }, []);

  return (
    <header className={navColor ? "navbar navBlack " : "navbar "}>
      <TopNavbar />
      <MainNavbar />
    </header>
  );
}

export default Navbar;
