import React,{useEffect} from 'react';
import Footer from '../../component/footer/Footer.js';
import ContactForm from '../../component/contact/contactform.js';
import '../../style/fixed.css'


function Contact() {
  useEffect(() => {
    const screenHeight = window.innerHeight;
    const desiredScrollPosition = screenHeight * 0.9; // Adjust the multiplier as needed

    // Scroll to the calculated position
    window.scrollTo({
      top: desiredScrollPosition,
      behavior: 'smooth',
    });
  }, []);
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