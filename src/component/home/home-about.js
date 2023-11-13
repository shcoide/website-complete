import React from "react";
import "../../style/home/home-about.css";
import { Outlet, Link } from "react-router-dom";
function Homeabout() {
  return (
    <section className="home-sec">
      <div className="home-image">
        <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png" />
      </div>
      <div className="home-content">
        <h2>About Us</h2>
        <span></span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          aspernatur voluptas inventore ab voluptates nostrum minus illo laborum
          harum laudantium earum ut, temporibus fugiat sequi explicabo facilis
          unde quos corporis!
        </p>
        <ul className="home-links">
          <li>
            <Link to="/">Work</Link>
          </li>
          <div className="home-vertical-line" />
          <li>
            <Link to="/services">Services</Link>
          </li>
          <div className="home-vertical-line" />
          <li>
            {/* <a href="#">contact</a> */}
            <Link to="/contact">Contact</Link>
          </li>
          <Outlet />
        </ul>
      </div>
      
    </section>

  );
}

export default Homeabout;
