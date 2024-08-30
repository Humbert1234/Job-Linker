import { React, useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
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
    <div className="login-form">
      <h2>Sign Up</h2>
      <h2>Please Enter your Account details</h2>
      <form action="">
        <input type="text" placeholder="Full Name" name="" id="" required />
        <input type="email" placeholder="Email" name="email" required />
        <select
          value={jobHiring}
          onChange={(e) => setJobHiring(e.target.value)}
        >
          <option value="">Select Job Type</option>
          <option value="hiring">Hiring</option>
          <option value="jobseeker">Jobseeker</option>
        </select>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </form>

      <button onClick={Click}>login</button>

      <div className="create-account">
        <Link to="/login">Already have an account</Link>
      </div>
    </div>
  );
}

export default SignUpForm;
