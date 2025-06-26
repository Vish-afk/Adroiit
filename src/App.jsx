// src/App.jsx
import React from 'react';
// We no longer need to import useLocation, AnimatePresence, or motion from framer-motion here
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import StemLabsPage from './pages/StemLabsPage';
import StemWorkshopsPage from './pages/StemWorkshopsPage'; // Import the STEM Workshops page
import ScrollToTop from './components/layout/ScrollToTop'; // Keep ScrollToTop

export default function App() {
    // We no longer need the useLocation hook for animation purposes here
    // const location = useLocation();

    return (
        // The min-h-screen bg-white div wraps the entire app
        <div className="min-h-screen bg-white">
            {/* ScrollToTop remains here, as it listens to route changes from BrowserRouter in main.jsx */}
            <ScrollToTop />

            <Navbar /> {/* Navbar will appear on all pages */}

            {/* Remove AnimatePresence and motion.div wrappers */}
            {/* Routes will conditionally render pages */}
            <Routes>
                {/* Route for the Home page (path is "/") */}
                <Route path="/" element={<Home />} />

                {/* Route for the STEM Labs page */}
                <Route path="/services/stem-labs" element={<StemLabsPage />} />

                {/* Add other service pages as you create them */}
                <Route path="/services/stem-workshops" element={<StemWorkshopsPage />} /> {/* Uncommented */}
                {/* <Route path="/services/advanced-labs" element={<AdvancedLabsPage />} /> */}
                {/* ... and so on */}

                {/* You might want a 404 Not Found route here too */}
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>

            <Footer /> {/* Footer will appear on all pages */}
        </div>
    );
}