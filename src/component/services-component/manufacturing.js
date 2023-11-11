import React from 'react';
import Footer from '../footer/Footer.js';
import '../../style/fixed.css'
import Manufacturingbody from './manufacturing-body.jsx';


function Manufacturing() {
  return (
    <>
      <div className='main'>
        <div className='area'>
          <Manufacturingbody/>
        </div>
        <div className=''>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default Manufacturing;