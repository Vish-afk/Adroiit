// Footer.jsx
import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3>Adroiit Technovations</h3>
            <p>Empowering Next-Gen Through Education and Technology</p>
            <div className="social-icons">
              <div className="social-icon">
                <Twitter />
              </div>
              <div className="social-icon">
                <Instagram />
              </div>
              <div className="social-icon">
                <Linkedin />
              </div>
              <div className="social-icon">
                <Youtube />
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
          <p>&copy; 2025 Adroiit Technovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}