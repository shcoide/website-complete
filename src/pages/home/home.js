import React from 'react';
import Footer from '../../component/footer/Footer.js';
import '../../style/fixed.css'
import Aboutinfo from '../about/about-info.js';
import ContactForm from '../../component/contact/contactform.js';
import Servicebody from '../services/services-body.jsx';


function Home() {
  return (
    <>
      <div className='main'>
        <div className='area'>
          <Aboutinfo/>
          <Servicebody/>
          <ContactForm/>
        </div>
        <div className='foot'>
        <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;