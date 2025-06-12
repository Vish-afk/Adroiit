// Home.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import PartnershipSection from '../components/home/PartnershipSection';

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

      <section id="partnership-section"> {/* This will be for your "Reach Out" link */}
        <PartnershipSection />
      </section>
    </main>
  );
}