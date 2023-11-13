import React from 'react';
import Footer from '../../component/footer/Footer.js';
import '../../style/fixed.css'
import ContactForm from '../../component/contact/contactform.js';
import Servicebody from '../services/services-body.jsx';
import Homeinfo from '../../component/home/home-about.js';


function Home() {
  return (
    <>
      <div className='main'>
        <div className='area'>
          <Homeinfo/>
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