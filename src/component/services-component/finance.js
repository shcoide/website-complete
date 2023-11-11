import React from 'react';
import Footer from '../footer/Footer.js';

import '../../style/fixed.css'
import Financebody from './finance-body.jsx';


function Finance() {
  return (
    <>
      <div className='main'>
        <div className='area'>
          <Financebody/>
        </div>
        <div className=''>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default Finance;