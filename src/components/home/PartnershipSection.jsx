// PartnershipSection.jsx
import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Users } from 'lucide-react';
import sideImage from '../home/reach-C6YMuyIS.png';

export default function PartnershipSection() {
  const handleReachOut = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="section section--primary">
      <div className="section__container">
        <div className="partnership">
          <div className="partnership__icon-container">
            <div className="partnership__icon">
              <img src={sideImage} alt="About Icon" />
            </div>
          </div>
          <div className="partnership__content">
            <h2 className="section__title">Partner with us</h2>
            <p className="section__text">Together, let's shape the future by combining our strengths, fostering innovation, and creating solutions that will leave a lasting impact for generations to come</p>
            <Button onClick={handleReachOut}>
              Reach Out
              <ArrowRight className="btn__icon" />
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}