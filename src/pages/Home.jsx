// Home.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection'; // Import the new component
import PartnershipSection from '../components/layout/PartnershipSection';

export default function Home() {
  return (
    <main>
      <section id="hero-section">
        <HeroSection />
      </section>

      <section id="about-section">
        <AboutSection />
      </section>

      <section id="services-section">
        <ServicesSection />
      </section>

      {/* New Testimonials Section */}
      <section id="testimonials-section">
        <TestimonialsSection />
      </section>

      <section id="partnership-section"> {/* This will be for your "Reach Out" link */}
        <PartnershipSection />
      </section>
    </main>
  );
}
