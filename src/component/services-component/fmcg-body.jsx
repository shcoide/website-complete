import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../style/services-component/services-component-body.css";
import "../../style/services-component/fmcg.css";
import "font-awesome/css/font-awesome.min.css";

function Fmcgbody() {
  return (
    <div className="service-component-section">
      <div className="service-component-width">
        <h1 className="title">Our Services</h1>
        <div className="border" />
        <div className="service-component-body">
        <div className="service-component-container">
            <div className="service-component-box">
              <div className="service-component-icon">
                <Link to="/services/automobile" className="link">
                  <i className="fa fa-paint-brush" />
                </Link>
              </div>
              <div className="service-component-title">
                <Link to="/services/automobile" className="component-link">
                  Automobile /Automative
                </Link>
              </div>
            </div>
            <div className="service-component-box">
              <div className="service-component-icon">
                <Link to="/services/it" className="link">
                  <i className="fa fa-code" />
                </Link>
              </div>
              <div className="service-component-title">
                <Link to="/services/it" className="component-link">
                  Information Technology
                </Link>
              </div>
            </div>
            <div className="service-component-box">
              <div className="service-component-icon">
                <Link to="/services/financial" className="link">
                  <i className="fa fa-code" />
                </Link>
              </div>
              <div className="service-component-title">
                <Link to="/services/financial" className="component-link">
                  Financial Services
                </Link>
              </div>
            </div>
            <div className="service-component-box">
              <div className="service-component-icon">
                <Link to="/services/fmcg" className="link">
                  <i className="fa fa-object-ungroup" />
                </Link>
              </div>
              <div className="service-component-title">
                <Link to="/services/fmcg" className="component-link">
                  FMCG
                </Link>
              </div>
            </div>
            <div className="service-component-box">
              <div className="service-component-icon">
                <Link to="/services/startup" className="link">
                  <i className="fa fa-database" />
                </Link>
              </div>
              <div className="service-component-title">
                <Link to="/services/startup" className="component-link">
                  Startup
                </Link>
              </div>
            </div>
            <div className="service-component-box">
              <div className="service-component-icon">
                <Link to="/services/manufacturing" className="link">
                  <i className="fa fa-android" />
                </Link>
              </div>
              <div className="service-component-title">
                <Link to="/services/manufacturing" className="component-link">
                  Manufacturing
                </Link>
              </div>
            </div>
          </div>
          <div className="service-component-details">
              <h2 >FMCG</h2>
              <div className="ser-comp-det-img" id="fmcg">

              </div>
              <div className="ser-comp-det-data">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, exercitationem! Accusamus, optio rerum. Sit sapiente in, accusamus fuga, nobis impedit incidunt dolore, esse nam reiciendis delectus! Saepe aliquam porro praesentium voluptatem, itaque ipsam doloribus eos sit fuga voluptatum sed, a, dolore esse magnam repudiandae pariatur dolores! Enim repudiandae error consectetur assumenda officia quo sint ab quia eveniet atque blanditiis, minus cupiditate inventore at nisi, est molestiae, ipsum autem reprehenderit tempore? Facilis dolores cupiditate alias odit corporis, suscipit libero perferendis dolor, nulla, officiis iure molestias reiciendis aspernatur consectetur placeat esse omnis assumenda necessitatibus quos ratione? Cumque nisi corporis laborum eius.
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fmcgbody;
