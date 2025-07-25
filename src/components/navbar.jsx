// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import "./navbar.css"; // style it later

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="NSS Logo" />
        <h1>NSS PCCOE</h1>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/team">Team</Link>
        <Link to="/winter">Winter Camp</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
