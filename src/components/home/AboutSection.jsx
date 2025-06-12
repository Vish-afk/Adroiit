// AboutSection.jsx
import React from 'react';
import { Lightbulb } from 'lucide-react';
import sideImage from '../../assets/about-CmYOi0Js.png';


export default function AboutSection() {
  return (
    <section className="section section--secondary">
      <div className="section__container">
        <div className="about">
          <div className="about__content">
            <h2 className="section__title">About Adroiit Technovations</h2>
            <p className="section__text">
              Adroiit Technovations is redefining education by building future-ready learning ecosystems through seamless integration of hands-on learning and experimentation with real-world applications to bridge the gap between academia and industry. We are transforming future with our innovative technological solutions.
            </p>
          </div>
          <div className="about__icon-container">
            <div className="about__icon">
              <img src={sideImage} alt="About Icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}