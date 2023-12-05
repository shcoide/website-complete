import React,{useEffect} from 'react';
import Footer from '../../component/footer/Footer.js';
import '../../style/fixed.css'
import ContactForm from '../../component/contact/contactform.js';
import Homeabout from '../../component/home/home-about.js';
import Homeservice from '../../component/home/home-service.js';


function Home() {
  useEffect(() => {
    const screenHeight = window.innerHeight;
    const desiredScrollPosition = screenHeight * 0; // Adjust the multiplier as needed

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
          <Homeabout/>
          <Homeservice/>
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