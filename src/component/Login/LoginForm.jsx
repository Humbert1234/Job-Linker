import { React, useState } from "react";
import { Link } from "react-router-dom";
function LoginForm() {
  const [jobHiring, setJobHiring] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function Click() {
    if (jobHiring.length == 6 && email && password) {
      alert("Welcome To NQUIZI JobSeeker Upload Your Job");
      window.location.href = "/hiring";
    } else if (jobHiring.length == 9 && email && password) {
      alert("Welcome To NQUIZI JobSeeker");
      window.location.href = "/homein";
    } else {
      alert("Select if you are looking for job or looking for workers");
    }
  }
  return (
    <div className="login-form">
      <h2>Login</h2>
      <h2>Please Enter your Account details</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <select value={jobHiring} onChange={(e) => setJobHiring(e.target.value)}>
        <option value="">Select Job Type</option>
        <option value="hiring">Hiring</option>
        <option value="jobseeker">Jobseeker</option>
      </select>
      <div className="forgot-password">
        <a href="#">Forgot Password</a>
      </div>
      <button onClick={Click}>login</button>
      <div className="create-account">
        <Link to="/signup">
          <li>Register</li>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
