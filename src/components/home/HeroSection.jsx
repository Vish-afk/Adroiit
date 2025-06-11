import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const handleLearnMore = () => {
    // Navigate to about page or scroll to about section
    window.location.href = '/about';
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Empowering Next-Gen through 
          <span className="text-blue-600 block">Education and Innovation!</span>
        </h1>
        <Button 
          onClick={handleLearnMore}
          size="lg"
          className="shadow-lg"
        >
          Learn More
          <ArrowRight className="inline-block ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}