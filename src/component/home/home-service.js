import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../style/home/home-services.css";
import 'font-awesome/css/font-awesome.min.css';

function Homeservice() {
  return (
    <div className="home-services-section">
      {/* <div className="home-inner-width">
        <h3 className="home-section-title">Services</h3>
        <div className="home-border" />
        <div className="home-services-container">
          <div className="home-service-box">
            <div className="home-service-icon">
                <Link to="/services/automobile" className="link"><i className="fa fa-paint-brush" /></Link>
            </div>
            <div className="home-service-title">Automobile /Automative</div>
          </div>
          <div className="home-service-box">
            <div className="home-service-icon">
            <Link to="/services/it" className="link"><i className="fa fa-code" /></Link>
              
            </div>
            <div className="home-service-title">Information Technology</div>
          </div>
          <div className="home-service-box">
            <div className="home-service-icon">
            <Link to="/services/financial" className="link"><i className="fa fa-code" /></Link>
              
            </div>
            <div className="home-service-title">Financial Services</div>
          </div>
          <div className="home-service-box">
            <div className="home-service-icon">
            <Link to="/services/fmcg" className="link"><i className="fa fa-object-ungroup" /></Link>
              
            </div>
            <div className="home-service-title">FMCG</div>
          </div>
          <div className="home-service-box">
            <div className="home-service-icon">
            <Link to="/services/startup" className="link"><i className="fa fa-database" /></Link>
              
            </div>
            <div className="home-service-title">Startup</div>
          </div>
          <div className="home-service-box">
            <div className="home-service-icon">
            <Link to="/services/manufacturing" className="link"><i className="fa fa-android" /></Link>
              
            </div>
            <div className="home-service-title">Manufacturing</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Homeservice;
