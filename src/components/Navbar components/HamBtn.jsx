import React, { useState } from "react";

function HamBtn({ navSize }) {
  const [barClass1, setBarClass1] = useState("hamBtn__bar");
  const [barClass2, setBarClass2] = useState("hamBtn__bar");
  const [barClass3, setBarClass3] = useState("hamBtn__bar");
  const [menuClick, setMenuClick] = useState(false);

  function updateMenu() {
    if (menuClick) {
      setMenuClick(false);
      setBarClass1("hamBtn__bar unclicked");
      setBarClass2("hamBtn__bar");
      setBarClass3("hamBtn__bar unclicked");
    } else {
      setMenuClick(true);
      setBarClass1("hamBtn__bar clicked1");
      setBarClass2("hide");
      setBarClass3("hamBtn__bar clicked3");
    }
  }

  return (
    <div className={navSize ? "hide" : "hamBtn"} onClick={updateMenu}>
      <span className={barClass1}></span>
      <span className={barClass2}></span>
      <span className={barClass3}></span>
    </div>
  );
}
export default HamBtn;
