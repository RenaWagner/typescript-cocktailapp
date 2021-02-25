import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        to="/categories"
        activeStyle={{
          fontWeight: "bold",
        }}
        className="btn btn-outline-dark mr-3"
      >
        Cocktail Category List
      </NavLink>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: "bold",
        }}
        className="btn btn-outline-dark mr-3"
      >
        Home
      </NavLink>
    </div>
  );
}
