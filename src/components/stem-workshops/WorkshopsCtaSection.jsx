// src/components/stem-workshops/WorkshopsCtaSection.jsx
import React from 'react';
import '../../styles/stem-workshops/stem-workshops.css';

export const WorkshopsCtaSection = () => {
    return (
        <section className="workshops-cta section section--primary section__title--center">
            <div className="section__container workshops-cta__container">
                <h2 className="service-content__heading">Ready to join an exciting STEM Workshop? Inquire today!</h2>
            </div>
        </section>
    );
};

export default WorkshopsCtaSection; // Export as default for easier import