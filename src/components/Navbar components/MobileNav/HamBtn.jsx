import React, { useEffect, useState } from "react";

function HamBtn({ setHamClick }) {
  const [barClass1, setBarClass1] = useState("hamBtn__bar");
  const [barClass2, setBarClass2] = useState("hamBtn__bar");
  const [barClass3, setBarClass3] = useState("hamBtn__bar");
  const [click, setClick] = useState(false);

  useEffect(() => {
    setHamClick(click);
  }, [click]);

  function updateClick() {
    if (click) {
      setClick(!click);
      setBarClass1("hamBtn__bar unclicked");
      setBarClass2("hamBtn__bar");
      setBarClass3("hamBtn__bar unclicked");
    } else {
      setClick(!click);
      setBarClass1("hamBtn__bar clicked1");
      setBarClass2("hide");
      setBarClass3("hamBtn__bar clicked3");
    }
  }

  return (
    <div className="hamBtn" onClick={updateClick}>
      <span className={barClass1}></span>
      <span className={barClass2}></span>
      <span className={barClass3}></span>
    </div>
  );
}
export default HamBtn;
