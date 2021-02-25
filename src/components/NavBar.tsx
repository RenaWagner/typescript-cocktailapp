import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="mt-5 mb-3">
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
        }}
        className="btn btn-outline-dark mr-3"
      >
        Home
      </NavLink>
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
        to="/search"
        activeStyle={{
          fontWeight: "bold",
        }}
        className="btn btn-outline-dark mr-3"
      >
        Search Cocktails
      </NavLink>
    </div>
  );
}
