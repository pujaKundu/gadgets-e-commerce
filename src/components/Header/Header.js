import React from "react";
import "./Header.css";
import logo from "../../images/hi-tech-chip-dna-atom-molecule-logo_126523-903.jpeg";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <img className="logo" src={logo} alt="" />
      <div>
        <nav className="menu">
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/review">Order Review</NavLink>
          <NavLink to="/inventory">Manage Inventory</NavLink>
          {user?.email && (
            <span style={{ color: "white" }}>Hello {user.displayName} </span>
          )}
          {user.email ? (
            <button onClick={logOut}>Log out</button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
