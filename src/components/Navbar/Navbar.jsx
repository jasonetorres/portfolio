import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import Logo from "../../assets/logo (1).png";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="T3_Navbar">
      <div className="T3_Navbar-links">
        <div className="T3_Navbar-links_logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="T3_Navbar-links-container">
          <p><a href="#Home">Home</a></p>
          <p><a href="#GPT3">What is GPT3?</a></p>
          <p><a href="Poss">Open AI</a></p>
          <p><a href="#Features">Case Studies</a></p>
          <p><a href="#Blog">Library</a></p>
        </div>
      </div>
        <div className="T3_Navbar-sign">
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>
        <div className="T3_Navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
          <div className="T3_Navbar-menu_container scale-up-center">
            <div className="T3_Navbar-menu_container-links">
              <p><a href="#Home">Home</a></p>
              <p><a href="#GPT3">What is GPT3?</a></p>
              <p><a href="Poss">Open AI</a></p>
              <p><a href="#Features">Case Studies</a></p>
              <p><a href="#Blog">Library</a></p>
            </div>
          <div className="T3_Navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button className="button" type="button">Sign up</button>
            </div>
          </div>
          )}
      </div>
    </div>
  );
};

export default Navbar;
