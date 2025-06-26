// src/components/technical-workshops/TechnicalWorkshopsHero.jsx
import React from 'react';
import '../../styles/technical-workshops/technical-workshops.css'; // Import specific CSS

// Placeholder URL for hero image (from image_fc4e21.png)
const technicalWorkshopsHeroImage = 'https://placehold.co/700x400/5E3C7E/A7B8D0?text=Technical+Workshop+Hero';

export const TechnicalWorkshopsHero = () => {
    return (
        <section className="technical-workshops-hero section section--primary">
            <div className="section__container technical-workshops-hero__container">
                <div className="technical-workshops-hero__image-container">
                    <img src={technicalWorkshopsHeroImage} alt="Students working on a technical project" className="technical-workshops-hero__image" />
                </div>
                <div className="technical-workshops-hero__text-content">
                    <h1 className="section__title technical-workshops-hero__title">Technical Workshop</h1>
                    <p className="section__text">
                        Adroiit Technovations aims to bridge the gap between theoretical knowledge and real-world application through industry-focused technical workshops. Our hands-on training sessions help college students gain practical experience in emerging technologies, preparing them for careers in various sectors.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TechnicalWorkshopsHero;