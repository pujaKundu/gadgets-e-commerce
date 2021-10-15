import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const location = useLocation();
  // console.log(location.state?.from)
  const history = useHistory();
  const redirect_url = location.state?.from || "/shop";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
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
      <button className="purchase-btn" onClick={handleGoogleLogin}>
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
