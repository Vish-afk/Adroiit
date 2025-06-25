// src/components/stem-labs/WhyPartnerSection.jsx
import React from 'react';
import CheckmarkIcon from '../../components/ui/CheckmarkIcon.jsx'; // Correct path to CheckmarkIcon

// Import image asset for this section
import partnershipBenefitsImage from '../../assets/image_3b3a82.png'; // Correct path relative to this component

// This component renders the "Why Partner with us to setup STEM lab?" section.
const WhyPartnerSection = () => {
    return (
        <section className="stem-labs-section section section--secondary">
            <div className="section__container stem-labs-partner-block">
                <div className="stem-labs-text-content">
                    <h2 className="service-content__heading">Why Partner with us to setup STEM lab?</h2>
                    <ul className="benefits-list">
                        <li><CheckmarkIcon /> NEP 2020, NCF 2023 and NCERT aligned curriculum</li>
                        <li><CheckmarkIcon /> Flexible and customizable lab setup solutions</li>
                        <li><CheckmarkIcon /> Multi-disciplinary STEM exposure</li>
                        <li><CheckmarkIcon /> High quality and standardized procurements</li>
                        <li><CheckmarkIcon /> Experimentation and project-based learning approach</li>
                        <li><CheckmarkIcon /> Dedicated STEM instructor</li>
                        <li><CheckmarkIcon /> Mentorship for students to participate in inter and intra-school competitions</li>
                        <li><CheckmarkIcon /> Regular maintenance and upgradations</li>
                    </ul>
                </div>
                <div className="stem-labs-image-container">
                    <img src={partnershipBenefitsImage} alt="Partnership Benefits" className="stem-labs-image" />
                </div>
            </div>
        </section>
    );
};

export default WhyPartnerSection;
