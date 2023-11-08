import React from 'react';
import Footer from '../../component/footer/Footer.js';
import Navbar from '../../component/navbar/Navbar.js';
import { getByDisplayValue } from '@testing-library/react';
import '../../style/fixed.css'
import Servicebody from './services-body.jsx';


function Services() {
  return (
    <>
      <div className='main'>
        <Navbar />
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