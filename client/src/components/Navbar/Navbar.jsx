import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Budget Planner</div>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`header-navbar ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
