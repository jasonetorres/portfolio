import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import "./navbar.css";
import Logo from '../../assets/logo (1).png';



const Navbar = () => {
  return (
    <div className="T3_Navbar">
      <div className="T3_Navbar-links">
        <div className="T3_Navbar-links_logo">
      <img src={Logo} alt="Logo" />
        </div>

      </div>
      </div>
  )
}

export default Navbar;