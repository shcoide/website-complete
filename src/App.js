import React from 'react';
import Home from './pages/home/home.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar/Navbar.js';
import About from './pages/about/about.js'
import Contact from './pages/contact/contact.js'
import Services from './pages/services/services.js';
import Automobile from './component/services-component/automobile.js';
import './App.css'
import It from './component/services-component/it.js';
import Fmcg from './component/services-component/fmcg.js';
import Finance from './component/services-component/finance.js';
import Startup from './component/services-component/startup.js';
import Manufacturing from './component/services-component/manufacturing.js';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="services/automobile" element={<Automobile />} />
          <Route path="services/it" element={<It />} />
          <Route path="services/fmcg" element={<Fmcg />} />
          <Route path="services/financial" element={<Finance />} />
          <Route path="services/startup" element={<Startup />} />
          <Route path="services/manufacturing" element={<Manufacturing />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
