// Navbar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__logo">Adroiit</h1>
        <div className="navbar__menu">
          <a href="/" className="navbar__link">
            <FontAwesomeIcon icon={faHome} className="navbar__icon" />
            <span>Home</span>
          </a>
          <a href="/about" className="navbar__link">
            <FontAwesomeIcon icon={faInfoCircle} className="navbar__icon" />
            <span>About Us</span>
          </a>
          <a href="/services" className="navbar__link">
            <FontAwesomeIcon icon={faBriefcase} className="navbar__icon" />
            <span>Services</span>
          </a>
          <a href="/contact" className="navbar__link">
            <FontAwesomeIcon icon={faEnvelope} className="navbar__icon" />
            <span>Reach Out</span>
          </a>
        </div>
      </div>
    </nav>
  );
}