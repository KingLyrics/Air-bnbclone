import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../images/Airbnb.png";
import search from "../../images/search.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <a href="#">
          <img src={logo} className="logo"></img>
        </a>
      </div>
      <div className="searchbar">
        <p className="right-border-searchbar">Anywhere</p>
        <p className="right-border-searchbar">Any week</p>
        <p>Add guests</p>
        <i className="fa-solid fa-magnifying-glass icon"></i>
      </div>
      <div className="menu">
        <p>Become a Host</p>
        <i class="fa-solid fa-globe"></i>
        <div className="sub-menu">
          <i class="fa-solid fa-bars"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
