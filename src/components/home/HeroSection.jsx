// HeroSection.jsx
import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const handleLearnMore = () => {
    window.location.href = '/about';
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Empowering Next-Gen through 
          <span className="hero__title--accent">Education and Innovation!</span>
        </h1>
        <Button onClick={handleLearnMore}>
          Learn More
          <ArrowRight className="btn__icon" />
        </Button>
      </div>
    </section>
  );
}