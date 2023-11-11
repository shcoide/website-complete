import React from 'react';
import Footer from '../../component/footer/Footer.js';
import ContactForm from '../../component/contact/contactform.js';
import '../../style/fixed.css'


function Contact() {
  return (
    <>
      <div className='main'>
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