import { Link } from "react-router-dom";
import Image from "../../assets/logo.jpeg";
import React, { useState } from "react";

function HeaderIn() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="head">
        <div className="contact">
          <p>
            <a href="#">
              <i class="fa-solid fa-envelope"></i> info@jobseekeke.com
            </a>
          </p>
          <p>
            <a href="#">
              <i class="fa-solid fa-phone"></i> +237676026603
            </a>
          </p>
        </div>
        <div className="Center">
          <p>
            <a href="#">Help Center</a>
          </p>
          <p>
            <a href="#">My account</a>
          </p>
          <p>
            <i class="fa-solid fa-chalkboard-user"></i>
          </p>
        </div>
      </div>
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
              <Link to="/homein">
                <li>Home</li>
              </Link>
              <Link to="/job">
                <li>Job</li>
              </Link>
              <Link to="/companyin">
                <li>Company</li>
              </Link>
              <div className="Sign">
                <Link to="/">
                  <button className="but">Sign out</button>
                </Link>
              </div>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
}
export default HeaderIn;
