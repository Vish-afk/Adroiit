// Navbar.jsx
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logowhite2.png';
import { HashLink } from 'react-router-hash-link';

// NEW CUSTOM ICONS (Sleek, Minimal, and Transparent)
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar__icon">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const AboutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar__icon">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ServicesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar__icon">
    <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
    <line x1="8" y1="2" x2="8" y2="22" />
    <line x1="16" y1="2" x2="16" y2="22" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="2" y1="18" x2="22" y2="18" />
  </svg>
);

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar__icon">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <HashLink smooth to="/#hero-section" className="navbar__logo-link">
          <div className="navbar__logo">
            <img src={logo} alt="Adroiit Logo" />
          </div>
        </HashLink>
        <div className="navbar__menu">
          <HashLink smooth to="/#hero-section" className="navbar__link">
            <HomeIcon />
            <span>Home</span>
          </HashLink>
          <HashLink smooth to="/#about-section" className="navbar__link">
            <AboutIcon />
            <span>About Us</span>
          </HashLink>
          <HashLink smooth to="/#services-section" className="navbar__link">
            <ServicesIcon />
            <span>Services</span>
          </HashLink>
          <HashLink smooth to="/#partnership-section" className="navbar__link">
            <ContactIcon />
            <span>Reach Out</span>
          </HashLink>
        </div>
      </div>
    </nav>
  );
}