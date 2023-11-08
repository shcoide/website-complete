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
              <i className="fa fa-paint-brush" />
            </div>
            <div className="service-title">Web Designs</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro, nihil.
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <i className="fa fa-code" />
            </div>
            <div className="service-title">Web Development</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro, nihil.
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <i className="fa fa-code" />
            </div>
            <div className="service-title">Responsive Designs</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro, nihil.
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <i className="fa fa-object-ungroup" />
            </div>
            <div className="service-title">Edit Sections</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro, nihil.
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <i className="fa fa-database" />
            </div>
            <div className="service-title">Databases</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro, nihil.
            </div>
          </div>
          <div className="service-box">
            <div className="service-icon">
              <i className="fa fa-android" />
            </div>
            <div className="service-title">Android</div>
            <div className="service-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque
              ratione rem porro, nihil.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicebody;
