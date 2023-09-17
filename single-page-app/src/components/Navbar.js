import React from "react";
import Logo from "../assets/rick_morty.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/profiles">Profiles</Link>
      </div>
    </div>
  );
}

export default Navbar;
