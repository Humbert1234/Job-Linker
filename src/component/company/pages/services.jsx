// src/components/Services.js
import React from "react";

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-content">
        <div className="service-item">
          <h3>Software Contracts</h3>
          <p>
            We provide software development services to businesses of all sizes.
            We work with you to understand your needs and create a custom
            solution that meets your specific requirements.
          </p>
        </div>
        <form className="service-form">
          <h3>Please Fill the form</h3>
          <label>Industry:</label>
          <select>
            <option value="tech">Tech</option>
            <option value="finance">Finance</option>
          </select>
          <label>Name: </label>
          <input type="text" placeholder="Enter your name" />

          <label>Email: </label>
          <input type="email" placeholder="Enter your email" />

          <label>Project Budget: </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Services;
