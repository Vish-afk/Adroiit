// src/components/advanced-labs/WhyChooseUsAdvancedLabsSection.jsx
import React from 'react';
import '../../styles/advanced-labs/advanced-labs.css'; // Import specific CSS

export const WhyChooseUsAdvancedLabsSection = () => {
    return (
        <section className="why-choose-us-advanced-section section section--secondary">
            <div className="section__container">
                <h2 className="section__title section__title--center">Why Choose Us?</h2>
                <div className="why-choose-us-advanced-grid">
                    <div className="why-choose-us-advanced-card">
                        <h3 className="why-choose-us-advanced-card__title">INDUSTRY-READY LABS</h3>
                        <p className="why-choose-us-advanced-card__description">
                            Designed to meet modern technological advancements and industrial trends.
                        </p>
                    </div>
                    <div className="why-choose-us-advanced-card">
                        <h3 className="why-choose-us-advanced-card__title">CUSTOM CURRICULUM INTEGRATION</h3>
                        <p className="why-choose-us-advanced-card__description">
                            Align labs with academic coursework and industry requirements.
                        </p>
                    </div>
                    <div className="why-choose-us-advanced-card">
                        <h3 className="why-choose-us-advanced-card__title">END-TO-END SUPPORT</h3>
                        <p className="why-choose-us-advanced-card__description">
                            We provide equipment, installation, and ongoing support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsAdvancedLabsSection;