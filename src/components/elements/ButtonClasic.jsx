import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BtnContext } from "../../context/BtnContext";

function ButtonClasic() {
  const show = useContext(BtnContext);
  return (
    <Link
      to="/lawyer"
      className={show ? "buttonClasic showBtn" : "buttonClasic hideBtn"}
    >
      View profile
    </Link>
  );
}

export default ButtonClasic;
