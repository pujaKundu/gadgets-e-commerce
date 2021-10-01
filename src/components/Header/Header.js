import React from "react";
import "./Header.css";
import logo from "../../images/hi-tech-chip-dna-atom-molecule-logo_126523-903.jpeg";

const Header = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="" />
      <div>
        <nav className="menu">
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/inventory">Manage Inventory</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
