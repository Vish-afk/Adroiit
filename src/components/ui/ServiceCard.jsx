// ServiceCard.jsx (UI Component)
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, icon, link }) {
  const handleExplore = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div className="service-card">
      <div className="service-card__icon">
        {icon}
      </div>
      <h3 className="service-card__title">
        {title}
      </h3>
      <p className="service-card__description">
        {description}
      </p>
      <button 
        className="service-card__link" 
        onClick={handleExplore}
      >
        Explore <ArrowRight />
      </button>
    </div>
  );
}
