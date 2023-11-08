import React from 'react';
import Footer from '../../component/footer/Footer.js';
import Navbar from '../../component/navbar/Navbar.js';
// import { getByDisplayValue } from '@testing-library/react';
import ContactForm from '../../component/contact/contactform.js';
import '../../style/fixed.css'


function Contact() {
  return (
    <>
      <div className='main'>
        <Navbar />
        <div className='area'>
          <ContactForm/>
        </div>
        <div className='foot'>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default Contact;