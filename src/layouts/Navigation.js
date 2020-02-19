import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  const links = [
    { name: "Start", path: "/", exact: true },
    { name: "Produkty", path: "/products" },
    { name: "Kontakt", path: "/contact" },
    { name: "Panel Użytkownika", path: "/UserPage" }
  ];

  const navigationList = links.map(item => (
    <li>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="main">
      <ul>{navigationList}</ul>
    </nav>
  );
};

export default Navigation;
