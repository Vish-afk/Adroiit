// src/components/advanced-labs/AdvancedLabsHero.jsx
import React from 'react';
import '../../styles/advanced-labs/advanced-labs.css'; // Import specific CSS

// Using the provided image for the hero section
const advancedLabsHeroImage = 'https://placehold.co/700x400/5E3C7E/A7B8D0?text=Advanced+Labs+Hero'; // Placeholder for image_f1e95a.png content

export const AdvancedLabsHero = () => {
    return (
        <section className="advanced-labs-hero section section--primary">
            <div className="section__container advanced-labs-hero__container">
                <div className="advanced-labs-hero__image-container">
                    <img src={advancedLabsHeroImage} alt="Person working with lab equipment" className="advanced-labs-hero__image" />
                </div>
                <div className="advanced-labs-hero__text-content">
                    <h1 className="section__title advanced-labs-hero__title">Advanced Labs</h1>
                    <p className="section__text">
                        Adroiit Technoch helps universities and colleges establish cutting-edge laboratories that integrate industry-relevant technologies with hands-on learning. We provide end-to-end solutions, including lab setup, equipment procurement, curriculum integration, faculty training and maintenance, ensuring a seamless learning experience for students.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AdvancedLabsHero;