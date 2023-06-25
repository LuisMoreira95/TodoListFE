import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/todos/list">Todo List</NavLink>
      </li>
      <li>
        <NavLink to="/todos/deleted">Deleted Todos</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
