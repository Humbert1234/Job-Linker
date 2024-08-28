// src/components/About.js
import React from "react";
import Image from "../../../assets/logo.jpeg";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <div className="text">
        <p>
          At JobSeeker, we are dedicated to revolutionizing the way
          professionals prepare for interviews. Join us as we pave the way for
          interview excellence and help you unlock your true potential.
        </p>
      </div>
      <div className="content">
        <div>
          <img src={Image} alt="" className="Logo" />
        </div>
        <div className="about_text">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              JobSeeker mission is to empower professionals with the skills and
              confidence they need to succeed in their interviews. We provide a
              variety of software solutions, including a mobile and web
              platform, that help professionals practice for interviews and
              learn about the latest industry trends
            </p>
          </div>
          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              JobSeeker is a leading provider of software solutions that help
              professionals get ready for interviews. We are committed to
              providing our customers with the tools and resources they need to
              succeed in their careers..
            </p>
          </div>
          <div className="objectives">
            <h3>Objectives</h3>
            <ul>
              <li>To develop robust solutions for interview preparation.</li>
              <li>To provide top-notch resources and support.</li>
              <li>To help individuals achieve their career goals.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
