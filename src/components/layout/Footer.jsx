// Footer.jsx
import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import logoWhite from '../../assets/logowhite02.png'; // Corrected logo import

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            {/* Added Logo with correct import */}
            <img 
              src={logoWhite} // Using the imported logo variable
              alt="Adroiit Technovations Logo" 
              className="footer__logo" 
            />
            {/* Removed h3 "Adroiit Technovations" text as per request */}
            <p>Empowering Next-Gen Through Education and Technology</p>
            <div className="social-icons">
              <div className="social-icon">
                <a href="https://x.com/adroiittech" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.instagram.com/adroiit.technovations?igsh=MTIwNDA0ZHNocXI2cA==" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/adroiit-technovations/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.youtube.com/@adroiittechnovations" target="_blank" rel="noopener noreferrer">
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer__section">
            <h4>Services</h4>
            <ul className="footer__list">
              <li><a href="/services/stem-labs">STEM Lab</a></li>
              <li><a href="/services/stem-workshops">STEM Workshops</a></li>
              <li><a href="/services/technical-workshops">Technical Workshops</a></li>
              <li><a href="/services/advanced-labs">Advanced Labs</a></li>
              <li><a href="/services/3d-printing">3D Printing</a></li>
              <li><a href="/services/mechanical-cad">Mechanical CAD</a></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4>Quick Links</h4>
            <ul className="footer__list">
              <li><a href="/about">About Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
            
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone />
                <span>+91-8438752908</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>+91-7397640940</span>
              </div>
              <div className="contact-item">
                <Mail />
                <span>info@adroiittechnovations.in</span>
              </div>
              <div className="contact-item">
                <MapPin />
                <span>Puducherry, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer__copyright">
          <p>© 2025 Adroiit Technovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}