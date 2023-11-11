import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../style/services/servicebody.css";
import 'font-awesome/css/font-awesome.min.css';

function Servicebody() {
  return (
    <div className="services-section">
      <div className="inner-width">
        <h1 className="section-title">Our Services</h1>
        <div className="border" />
        <div className="services-container">
          <div className="service-box">
            <div className="service-icon">
                <Link to="/services/automobile" className="link"><i className="fa fa-paint-brush" /></Link>
            </div>
            <div className="service-title">Automobile /Automative</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro, nihil.
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
            <Link to="/services/it" className="link"><i className="fa fa-code" /></Link>
              
            </div>
            <div className="service-title">Information Technology</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro shivam
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
            <Link to="/services/financial" className="link"><i className="fa fa-code" /></Link>
              
            </div>
            <div className="service-title">Financial Services</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro, shivam
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
            <Link to="/services/fmcg" className="link"><i className="fa fa-object-ungroup" /></Link>
              
            </div>
            <div className="service-title">FMCG</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro, shivam
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
            <Link to="/services/startup" className="link"><i className="fa fa-database" /></Link>
              
            </div>
            <div className="service-title">Startup</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro, shivam
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
            <Link to="/services/manufacturing" className="link"><i className="fa fa-android" /></Link>
              
            </div>
            <div className="service-title">Manufacturing</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro, shivam
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicebody;
