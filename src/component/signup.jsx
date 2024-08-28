import React from "react";
import SignUpForm from "./Sign_up/SignUpForm";
import Navbar from "./header/header";
import Footer from "./footer/footer";
import "./Sign_up/signup.css";
function Signup() {
  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="login-container">
          <SignUpForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
