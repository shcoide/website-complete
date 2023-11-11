import React from 'react';
import Footer from '../footer/Footer.js';
import '../../style/fixed.css'
import Fmcgbody from './fmcg-body.jsx';


function Fmcg() {
  return (
    <>
      <div className='main'>
        <div className='area'>
          <Fmcgbody/>
        </div>
        <div className=''>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default Fmcg;