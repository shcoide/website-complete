import React,{useEffect} from 'react';
import Footer from '../../component/footer/Footer.js';
import '../../style/fixed.css'
import Servicebody from './services-body.jsx';


function Services() {
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
          <Servicebody/>
        </div>
        <div className='foot'>
        <Footer />
        </div>
        
      </div>
    </>
  );
}

export default Services;