// src/components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Our Service</h3>
          <ul>
            <li>
              <a href="#">Job Portal</a>
            </li>
            <li>
              <a href="#">Advertisement</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>More Links</h3>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Download App</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>FINEJOB</h2>
          <p>
            Stay connected with us and explore more in this connected world...
          </p>
        </div>
        <div className="footer-section">
          <ul>
            <li>
              <a href="#">jobs@company.com</a>
            </li>
            <li>
              <a href="#">(+237) 676026603</a>
            </li>
            <li>
              <a href="#">3891 Nquiziview Dr. Nquizi Buea 62639</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; jobseekers 2024 all rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
