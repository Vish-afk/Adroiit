// app.jsx
import React from 'react';
// Import Routes and Route from react-router-dom
import { Routes, Route } from 'react-router-dom'; 

import Navbar from './components/layout/Navbar'; // Keep Navbar import
import Footer from './components/layout/Footer'; // Keep Footer import
import Home from './pages/Home'; // Keep Home import
import StemLabsPage from './pages/StemLabsPage'; // Keep StemLabsPage import

export default function App() {
  return (
    // The min-h-screen bg-white div wraps the entire app
    <div className="min-h-screen bg-white">
      <Navbar /> {/* Navbar will appear on all pages */}

      <Routes> {/* Routes will conditionally render pages */}
        {/* Route for the Home page (path is "/") */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the STEM Labs page */}
        <Route path="/services/stem-labs" element={<StemLabsPage />} />

        {/* Add other service pages as you create them */}
        {/* <Route path="/services/stem-workshops" element={<StemWorkshopsPage />} /> */}
        {/* <Route path="/services/advanced-labs" element={<AdvancedLabsPage />} /> */}
        {/* ... and so on */}

        {/* You might want a 404 Not Found route here too */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>

      <Footer /> {/* Footer will appear on all pages */}
    </div>
  );
}