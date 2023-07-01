import React from "react";

import "./Backdrop.css";

const Backdrop = ({ OnClick }) => {
  return <div className="backdrop" onClick={OnClick}></div>;
};

export default Backdrop;
