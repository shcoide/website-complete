import React from 'react';
import Footer from '../../component/footer/Footer.js';

import { getByDisplayValue } from '@testing-library/react';
import '../../style/fixed.css'
import Aboutinfo from './about-info.js';


function About() {
  return (
    <>
      <div className='main'>
        <div className='area'>
          <Aboutinfo/>
        </div>
        <div className='foot'>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default About;