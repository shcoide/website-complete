import React from 'react';
import Footer from '../../component/footer/Footer.js';
import '../../style/fixed.css'
import Servicebody from './services-body.jsx';


function Services() {
  return (
    <>
      <div className='main'>
        <div className='area'>
          <Servicebody/>
        </div>
        <div className='foot'>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default Services;