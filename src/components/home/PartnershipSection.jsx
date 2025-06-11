// PartnershipSection.jsx
import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Users } from 'lucide-react';

export default function PartnershipSection() {
  const handleReachOut = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="section section--secondary">
      <div className="section__container">
        <div className="partnership">
          <div className="partnership__content">
            <h2 className="section__title">Partner with us</h2>
            <p className="section__text">Together, let's shape the future</p>
            <Button onClick={handleReachOut}>
              Reach Out
              <ArrowRight className="btn__icon" />
            </Button>
          </div>
          <div className="partnership__icon-container">
            <div className="partnership__icon">
              <Users />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}