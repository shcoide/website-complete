import React from 'react';
import Footer from '../footer/Footer.js';
import '../../style/fixed.css'
import Automobilebody from './automobile-body.jsx';


function Automobile() {
  return (
    <>
      <div className='main'>
        <div className='area'>
          <Automobilebody/>
        </div>
        <div className=''>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default Automobile;