import React, { useState } from "react";
import HeaderIn from "../../component/header/headerin";
import Footer from "../../component/footer/footer";
import "./apply.css";
const ApplicationForm = () => {
  return (
    <>
      <HeaderIn />
      <div className="JobApplicationForm">
        <form
          action="https://formspree.io/f/mdoqpaqb"
          method="POST"
          className="formapply"
        >
          <div className="apply">
            <label>
              Full Name:
              <input type="text" name="full-Name" required />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input type="tel" name="phone" required />
            </label>
          </div>
          <div>
            <label>
              Position Applied For:
              <input type="text" name="position" required />
            </label>
          </div>
          <div>
            <label>
              Upload CV:
              <input type="file" name="cv" accept=".pdf,.doc,.docx" required />
            </label>
          </div>
          <div>
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ApplicationForm;
