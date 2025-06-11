import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, icon, link }) {
  const handleExplore = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:transform hover:scale-105">
      <div className="text-4xl mb-4">
        {icon}
      </div>
      <h3 className="font-telegraf text-deep-purple text-2xl font-bold mb-3">
        {title}
      </h3>
      <p className="font-inter text-dark-charcoal text-base mb-4">
        {description}
      </p>
      <button 
        onClick={handleExplore}
        className="font-poppins text-deep-purple hover:text-neon-pink font-semibold transition-colors flex items-center"
      >
        Explore <ArrowRight className="inline-block ml-1 w-4 h-4" />
      </button>
    </div>
  );
}
