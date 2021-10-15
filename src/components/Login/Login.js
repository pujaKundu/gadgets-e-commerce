import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit="">
        <input type="email" name="" id="" placeholder="Your email" />
        <br />
        <input type="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        new to ema-john <Link to="/register">Create new account</Link>
      </p>
      <div>--------or----------</div>
      <button className="purchase-btn" onClick={signInUsingGoogle}>
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
