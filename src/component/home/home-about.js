import React from "react";
import "../../style/home/home-about.css";
import { Outlet, Link } from "react-router-dom";
// import 'ionicons/css/ionicons.css';
import "font-awesome/css/font-awesome.min.css";
function Homeabout() {
  return (
    <section className=" service" aria-labelledby="service-label">
      <h2 className="head">More about us</h2>
      <div className="home-abt-images">
        <div className="home-abt-para">
         <div className="head-main">Welcome to Your Company Name</div>
         <p className="head-main-pa">Unveiling Excellence Across Diverse Industries</p>
         <div className="head-smain">Who We Are</div>
         <p className="head-smain-pa">At Your Company Name, we're more than just a service provider; we're the architects of innovation and reliability. With a passion for excellence, we transcend boundaries, catering to a spectrum of industries with unmatched expertise.</p>
         <div className="head-smain">Our Story</div>
         <p className="head-smain-pa">Embarked on a journey driven by passion and commitment, Your Company Name was founded with a vision to redefine standards across IT services, FMCG, automotive solutions, and beyond. Every milestone is a testament to our unwavering dedication to surpass expectations.</p>
         <div className="head-smain">Our Values</div>
         <p className="head-smain-pa">Quality, Integrity, Collaboration At Your Company Name, integrity forms the cornerstone of our operations. We prioritize quality in every endeavor and foster a culture of collaboration, ensuring synergy with every client interaction.</p>
        </div>
        <div className="home-img">
          <div className="img-1">
            <div className="img-1-text">
              <div className="des">We have strong bond between employes that creates task to deliver on time</div>
              <div className="des-title">Our commitment</div>
            </div>
          </div>
        </div>
        <div className="home-img ">
          <div className="img-2">
          <div className="img-2-text">
              <div className="des">We have strong bond between employes that creates task to deliver on time</div>
              <div className="des-title">Our commitment</div>
            </div>
          </div>
          <div className="img-3">
          <div className="img-3-text">
              <div className="des">We have strong bond between employes that creates task to deliver on time</div>
              <div className="des-title">Our commitment</div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-container">
        <p className="section-subtitle" id="service-label">
          What We Do?
        </p>
        <h2 className="about-section-title">
          The service we offer is specifically designed to meet your needs.
        </h2>
        <ul className="grid-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                {/* <ion-icon name="call-outline" aria-hidden="true" /> */}
                <i className="fa fa-phone" />
                
              </div>
              <h3 className="h4 card-title">24/7 Support</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="#" className="btn-text">
                <span className="span">Learn More</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true" />
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
              <i className="fa fa-credit-card" />
              </div>
              <h3 className="h4 card-title">Secure Payments</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="#" className="btn-text">
                <span className="span">Learn More</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true" />
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="cloud-download-outline" aria-hidden="true" />
              </div>
              <h3 className="h4 card-title">Daily Updates</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="#" className="btn-text">
                <span className="span">Learn More</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true" />
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="pie-chart-outline" aria-hidden="true" />
              </div>
              <h3 className="h4 card-title">Market Research</h3>
              <p className="card-text">
                Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
                porta gravida at eget metus cras justo.
              </p>
              <a href="#" className="btn-text">
                <span className="span">Learn More</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Homeabout;
