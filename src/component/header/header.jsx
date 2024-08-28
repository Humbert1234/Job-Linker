/* src/components/Header.js */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Image from "../../assets/logo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="Home1">
      <p className="Logo">
        <img src={Image} alt="" className="logo" />
        <h2>
          Job<span>Seeker</span>
        </h2>
      </p>
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </div>
        {isOpen && (
          <ul className="nav-link">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/company">
              <li>Company</li>
            </Link>
            <Link to="/login">
              <li>Job</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
