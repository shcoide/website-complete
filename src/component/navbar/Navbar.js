import React,{useState} from 'react';
import { useEffect } from 'react';
import '../../style/navbar/Navbar.css';
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the value (200 in this case) based on when you want the navbar to become visible
      if (scrollPosition > 600) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
      <div>
        <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
        <label htmlFor="menu-icon"></label>
        <div className='landing-img' >
          Company name
        </div>
        <nav className="nav"> 
          <ul className="pt-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <nav className='nav-initial'
        style={{
          backgroundColor: isNavbarVisible ? '#353746' : 'transparent',
          boxShadow: isNavbarVisible ? ' 0 8px 30px 0 rgba(0,0,0,0.3)' : '0 8px 30px 0 rgba(0,0,0,0)',
        }}>
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
