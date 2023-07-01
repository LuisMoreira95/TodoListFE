import React from "react";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

const SideDrawer = ({ Show, OnClick, children }) => {
  return (
    <CSSTransition
      in={Show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={OnClick}>
        {children}
      </aside>
    </CSSTransition>
  );
};

export default SideDrawer;
