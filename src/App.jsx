// app.jsx (No changes needed here as it correctly includes Home)
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home /> {/* Home component will contain all your scrollable sections */}
      <Footer />
    </div>
  );
}