import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Adroiit Technovations</h3>
            <p className="text-gray-300 mb-6">Empowering Next-Gen Through Education and Technology</p>
            <div className="flex space-x-4">
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/services/stem-labs" className="hover:text-white transition-colors">STEM Lab</a></li>
              <li><a href="/services/stem-workshops" className="hover:text-white transition-colors">STEM Workshops</a></li>
              <li><a href="/services/technical-workshops" className="hover:text-white transition-colors">Technical Workshops</a></li>
              <li><a href="/services/advanced-labs" className="hover:text-white transition-colors">Advanced Labs</a></li>
              <li><a href="/services/3d-printing" className="hover:text-white transition-colors">3D Printing</a></li>
              <li><a href="/services/mechanical-cad" className="hover:text-white transition-colors">Mechanical CAD</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91-8438752908</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91-7397640940</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@adroiittechnovations.in</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Puducherry, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Adroiit Technovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}