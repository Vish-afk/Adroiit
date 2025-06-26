// src/components/technical-workshops/TechnicalWorkshopsCtaSection.jsx
import React from 'react';
import '../../styles/technical-workshops/technical-workshops.css'; // Import specific CSS

export const TechnicalWorkshopsCtaSection = () => {
    return (
        <section className="technical-workshops-cta section section--primary section__title--center">
            <div className="section__container technical-workshops-cta__container">
                <h2 className="service-content__heading">Ready to enhance your skills? Explore our Technical Workshops!</h2>
            </div>
        </section>
    );
};

export default TechnicalWorkshopsCtaSection;