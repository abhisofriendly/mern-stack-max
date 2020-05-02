import React from "react";
import ReactDOM from "react-dom";

import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
  const content = <aside className="side-drawer">{props.children}</aside>;
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
