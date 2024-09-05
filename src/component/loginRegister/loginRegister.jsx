import React, { useState } from "react";
import "./loginRegister.css";
import { FaUser, FaLock } from "react-icons/fa";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function LoginRegister() {
  const [formType, setFormType] = useState("login"); // state to track the form type
  const [jobHiring, setJobHiring] = useState("");
  function Click() {
    if (jobHiring.length == 6) {
      alert("Welcome To NQUIZI JobSeeker Upload Your Job");
      window.location.href = "/hiring";
    } else if (jobHiring.length == 9) {
      alert("Welcome To NQUIZI JobSeeker");
      window.location.href = "/homein";
    } else {
      alert("Select if you are looking for job or looking for workers");
    }
  }

  return (
    <>
      <Header />
      <div className="mainlog">
        <div className="wrapper">
          {formType === "login" && (
            <div className="form-box loginf">
              <form action="">
                <h2>Login</h2>
                <div className="input-box">
                  <input type="text" placeholder="Username" required />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <select
                    value={jobHiring}
                    onChange={(e) => setJobHiring(e.target.value)}
                  >
                    <option value="">Select Job Type</option>
                    <option value="hiring">Hiring</option>
                    <option value="jobseeker">Jobseeker</option>
                  </select>
                </div>
                <div className="input-box">
                  <input type="password" placeholder="Password" required />
                  <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="#">Forget password</a>
                </div>
                <button type="submit" onClick={Click}>
                  Login
                </button>
                <div className="register-link">
                  <p>
                    Don't have an account?{" "}
                    <a href="#" onClick={() => setFormType("register")}>
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          )}

          {formType === "register" && (
            <div className="form-box register">
              <form action="">
                <h2>Register</h2>
                <div className="input-box">
                  <input type="text" placeholder="Email" required />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Username" required />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <select
                    value={jobHiring}
                    onChange={(e) => setJobHiring(e.target.value)}
                  >
                    <option value="">Select Job Type</option>
                    <option value="hiring">Hiring</option>
                    <option value="jobseeker">Jobseeker</option>
                  </select>
                </div>
                <div className="input-box">
                  <input type="password" placeholder="Password" required />
                  <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" />
                    Agree to terms and conditions
                  </label>
                </div>
                <button type="submit" onClick={Click}>
                  Register
                </button>
                <div className="register-link">
                  <p>
                    Already have an account?{" "}
                    <a href="#" onClick={() => setFormType("login")}>
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
