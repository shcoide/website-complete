import React from 'react';
import Footer from '../footer/Footer.js';
import '../../style/fixed.css'

import Itbody from './it-body.jsx';


function It() {
  return (
    <>
      <div className='main'>
        <div className='area'>
          <Itbody/>
        </div>
        <div className=''>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default It;