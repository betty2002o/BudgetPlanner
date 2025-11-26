import React from "react";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <nav className="header-navbar">
        <NavLink to="/documentation">Documentation</NavLink>
      </nav>
    </footer>
  );
}
