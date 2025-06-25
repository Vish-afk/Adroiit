// src/components/stem-labs/WhySetupStemLabSection.jsx
import React from 'react';
import CheckmarkIcon from '../ui/CheckmarkIcon.jsx'; // Correct path to CheckmarkIcon

// Import image asset for this section (used as background)
import studentInLabImage from '../../assets/image-312161549.jpg'; // Correct path relative to this component

// This component renders the "Why set up a STEM Lab?" section with a background image.
const WhySetupStemLabSection = () => {
    return (
        <section
            className="stem-labs-section stem-labs-benefits-section-bg"
            style={{ backgroundImage: `url(${studentInLabImage})` }}
        >
            <div className="section__container stem-labs-benefits-block">
                <div className="stem-labs-text-content">
                    <h2 className="service-content__heading">Why set up a STEM Lab?</h2>
                    <ul className="benefits-list">
                        <li><CheckmarkIcon /> Bridges the gap between theory and hands-on experimentation</li>
                        <li><CheckmarkIcon /> Empowers students with essential 21st-century skills</li>
                        <li><CheckmarkIcon /> Promotes interdisciplinary learning</li>
                        <li><CheckmarkIcon /> Enhances critical thinking and problem-solving skills</li>
                        <li><CheckmarkIcon /> Encourages creativity and innovation</li>
                        <li><CheckmarkIcon /> Develops teamwork and collaboration skills</li>
                        <li><CheckmarkIcon /> Supports cognitive and practical skill development</li>
                        <li><CheckmarkIcon /> Provides opportunities for project-based learning</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhySetupStemLabSection;
