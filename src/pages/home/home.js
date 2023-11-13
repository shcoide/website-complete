import React from 'react';
import Footer from '../../component/footer/Footer.js';
import Navbar from '../../component/navbar/Navbar.js';
import '../../style/fixed.css'
import Landing from '../landingPage/landingpage.js';


function Home() {
  return (
    <>
      <div className='main'>
        <Navbar />
        <div className='area'></div>
        <div className="landing">
          <Landing/>
        </div>
        <div className='foot'>
        <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;