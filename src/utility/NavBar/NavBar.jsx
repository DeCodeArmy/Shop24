import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo_img.png";
import { IoIosSearch } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="left">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="" />
        </div>

        <ul className="list">
          <li className="item">Phones</li>
          <li className="item">Earbuds</li>
          <li className="item">Watches</li>
          <li className="item">Smart Watches</li>
        </ul>
        
      </div>

      <div className="right">
        <IoIosSearch className="icons" size={25} />
        <FaCartArrowDown className="icons" size={25} />
        <IoPersonCircleSharp className="icons" size={25} />
      </div>
    </div>
  );
};

export default NavBar;
