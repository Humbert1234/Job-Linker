// src/components/Hero.js
import React from "react";
import "./body.css";

function Body() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Find Your <span className="highlight">Dream</span> Job Easily
        </h1>
        <div className="job-search-form">
          <div className="tabs">
            <button className="active">I'm Hiring</button>
            <button>I'm Looking for a Job</button>
          </div>
          <div className="form2">
            <input type="text" placeholder="Keyword" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Speciality" />
            <button className="find-btn">Find</button>
          </div>
        </div>
      </div>
      <div className="job-card">
        <h3>Product Designer</h3>
        <p>.Google Inc</p>
        <div className="job-details">
          <span>Fulltime</span>
          <span>100k Applicants</span>
        </div>
        <div className="job-actions">
          <button>Prev</button>
          <button>Save</button>
          <button>Next</button>
        </div>
      </div>
    </section>
  );
}

export default Body;
