import React from 'react';
import Footer from '../footer/Footer.js';
import '../../style/fixed.css'
import Startupbody from './startup-body.jsx';


function Startup() {
  return (
    <>
      <div className='main'>
        <div className='area'>
          <Startupbody/>
        </div>
        <div className=''>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default Startup;