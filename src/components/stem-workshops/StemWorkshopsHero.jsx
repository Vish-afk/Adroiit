// src/components/stem-workshops/StemWorkshopsHero.jsx
import React from 'react';
import '../../styles/stem-workshops/stem-workshops.css';

// Placeholder URL for hero image
const workshopHeroImage = "https://placehold.co/700x400/5E3C7E/A7B8D0?text=STEM+Workshop+Hero";

export const StemWorkshopsHero = () => {
    return (
        <section className="stem-workshops-hero section section--primary">
            <div className="section__container stem-workshops-hero__container">
                <div className="stem-workshops-hero__image-container">
                    <img src={workshopHeroImage} alt="Young student engaged in STEM workshop" className="stem-workshops-hero__image" />
                </div>
                <div className="stem-workshops-hero__text-content">
                    <h1 className="section__title stem-workshops-hero__title">STEM Workshop</h1>
                    <p className="section__text">
                        Adroiit Technovations STEM (Science, Technology, Engineering and Mathematics) workshops are designed for school students to inspire young minds with hands-on learning experience and interactive activities in various STEM fields, helping them develop critical thinking and problem-solving abilities through innovative skills.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StemWorkshopsHero; // Export as default for easier import