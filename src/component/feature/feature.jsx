// src/components/Features.js
import React from "react";
import "./feature.css";

function Features() {
  return (
    <section className="features">
      <h2>Best Features</h2>
      <div className="feature-cards">
        <div className="feature-card">
          {/* icon */}
          <div>
            <h3>Find Workers</h3>
            <p>Find professionals in their fields quickly and easily.</p>
          </div>
        </div>
        <div className="feature-card">
          {/* icon */}
          <div>
            <h3>Apply Job</h3>
            <p>You can easily apply for jobs by clicking here.</p>
          </div>
        </div>
        <div className="feature-card">
          {/* icon */}
          <div>
            <h3>CV Maker</h3>
            <p>Having difficulty creating a CV? We can assist!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
