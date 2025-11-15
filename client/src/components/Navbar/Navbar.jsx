import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const links = [
  { name: "Dashboard", path: "/" },
  { name: "Monthly Summary", path: "/monthly-summary" },
  { name: "Daily Expense", path: "/daily-expense" },
  { name: "Monthly Budget", path: "/monthly-budget" },
  { name: "Bills", path: "/bills" },
];
export default function Navbar() {
  return (
    <header className="header">
      <nav className="header-navbar">
        {links.map((link) => (
          <NavLink key={link.name} to={link.path}>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
