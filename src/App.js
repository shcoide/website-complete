import React from 'react';
import Home from './pages/home/home.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar/Navbar.js';
import Hire from './pages/hire/hire.js'
import About from './pages/about/about.js'
import Contact from './pages/contact/contact.js'
import Services from './pages/services/services.js';
import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="hire" element={<Hire />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
