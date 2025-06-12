// Navbar.jsx
import React from 'react';
import logo from '../assets/logowhite2.png';

// Custom SVG Icons - Reverted viewBox to original for smaller icons
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar__icon">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const AboutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar__icon">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const ServicesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar__icon">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 6v6"/>
    <path d="M21 12h-6m-6 0H3"/>
    <path d="M18.364 5.636l-4.243 4.243m-4.242 0L5.636 5.636"/>
    <path d="M18.364 18.364l-4.243-4.243m-4.242 0L5.636 18.364"/>
  </svg>
);

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar__icon">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo"> 
          <img src={logo} alt="Adroiit Logo" />
        </div>
        <div className="navbar__menu">
          <a href="/" className="navbar__link">
            <HomeIcon />
            <span>Home</span>
          </a>
          <a href="/about" className="navbar__link">
            <AboutIcon />
            <span>About Us</span>
          </a>
          <a href="/services" className="navbar__link">
            <ServicesIcon />
            <span>Services</span>
          </a>
          <a href="/contact" className="navbar__link">
            <ContactIcon />
            <span>Reach Out</span>
          </a>
        </div>
      </div>
    </nav>
  );
}