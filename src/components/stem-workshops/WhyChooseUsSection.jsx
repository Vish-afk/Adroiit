// src/components/stem-workshops/WhyChooseUsSection.jsx
import React from 'react';
import '../../styles/stem-workshops/stem-workshops.css';

export const WhyChooseUsSection = () => {
    return (
        <section className="why-choose-us-section section section--secondary">
            <div className="section__container">
                <h2 className="section__title section__title--center">Why Choose Us?</h2>
                <div className="why-choose-us-grid">
                    <div className="why-choose-us-card">
                        <h3 className="why-choose-us-card__title">HANDS-ON LEARNING</h3>
                        <p className="why-choose-us-card__description">
                            We believe in learning by doing! Our project-based, interactive workshops engage students in real-world problem-solving, fostering creativity and innovation.
                        </p>
                    </div>
                    <div className="why-choose-us-card">
                        <h3 className="why-choose-us-card__title">INDUSTRY-RELEVANT SKILLS</h3>
                        <p className="why-choose-us-card__description">
                            Our curriculum is designed to align with emerging technologies and industry demands, ensuring students gain practical knowledge applicable to future careers.
                        </p>
                    </div>
                    <div className="why-choose-us-card">
                        <h3 className="why-choose-us-card__title">AFFORDABLE</h3>
                        <p className="why-choose-us-card__description">
                            Our pricing is flexible and budget-friendly, making quality STEM education accessible to all.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection; // Export as default for easier import