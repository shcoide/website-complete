import React from 'react';
import '../../style/navbar/Navbar.css';
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
      <div>
        <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
        <label htmlFor="menu-icon"></label>
        <nav className="nav"> 
        
          <ul className="pt-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <nav className='nav-initial'>
          <ul className='company-logo'></ul>
          <ul className="pt-5-initial">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Outlet/>
      </div>
    );
  
}

export default Navbar;
