// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import StemLabsPage from './pages/StemLabsPage';
import StemWorkshopsPage from './pages/StemWorkshopsPage';
import AdvancedLabsPage from './pages/AdvancedLabsPage'; // Import the Advanced Labs page
import ScrollToTop from './components/layout/ScrollToTop'; // Keep ScrollToTop

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/stem-labs" element={<StemLabsPage />} />
                <Route path="/services/stem-workshops" element={<StemWorkshopsPage />} />
                <Route path="/services/advanced-labs" element={<AdvancedLabsPage />} /> {/* Advanced Labs route is now active */}

                {/* Add other service pages as you create them */}
                {/* <Route path="/services/workshops" element={<WorkshopsPage />} /> */}
                {/* <Route path="/services/3d-printing" element={<ThreeDPrintingPage />} /> */}
                {/* <Route path="/services/mechanical-cad" element={<MechanicalCadPage />} /> */}

                {/* You might want a 404 Not Found route here too */}
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}