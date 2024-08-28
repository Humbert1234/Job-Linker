import React from "react";
import LoginForm from "./login/LoginForm";
import Header from "./header/header";
import Footer from "./footer/footer";
import "./Login/login.css";
function Login() {
  return (
    <>
      <Header />
      <div className="login">
        <div className="login-container">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Login;
