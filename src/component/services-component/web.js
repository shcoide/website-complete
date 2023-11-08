import React from 'react';
import Footer from '../../component/footer/Footer.js';
import Navbar from '../../component/navbar/Navbar.js';
import { getByDisplayValue } from '@testing-library/react';
import '../../style/fixed.css'
import Webbody from './web-body.jsx';


function Web() {
  return (
    <>
      <div className='main'>
        <Navbar />
        <div className='area'>
          <Servicebody/>
        </div>
        <div className=''>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default Web;