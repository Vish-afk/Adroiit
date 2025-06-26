// src/components/stem-workshops/StemWorkshopsSections.jsx
import React from 'react';
import CheckmarkIcon from '../ui/CheckmarkIcon.jsx'; // Assuming this path is correct
import '../../styles/stem-workshops/stem-workshops.css'; // Import the consolidated CSS file

// Import placeholder image assets for workshops - COMMENTED OUT AS REQUESTED
// import workshopHeroImage from '../../assets/image-361549.jpg';
// Placeholder images for "Our STEM Workshops" grid - COMMENTED OUT AS REQUESTED
// import experimentingScienceImg from '../../assets/experimenting-science.jpg';
// import electronicsImg from '../../assets/electronics.jpg';
// import roboticsImg from '../../assets/robotics.jpg';
// import iotImg from '../../assets/iot.jpg';
// import printing3dImg from '../../assets/3d-printing.jpg';
// import aeromodellingImg from '../../assets/aeromodelling.jpg';
// import aiImg from '../../assets/ai.jpg';
// import droneTechImg from '../../assets/drone-technology.jpg';


// Placeholder URLs for images as requested
const workshopHeroImage = "https://placehold.co/700x400/5E3C7E/A7B8D0?text=STEM+Workshop+Hero";
const experimentingScienceImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Science";
const electronicsImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Electronics";
const roboticsImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Robotics";
const iotImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=IoT";
const printing3dImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=3D+Printing";
const aeromodellingImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Aeromodelling";
const aiImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=AI";
const droneTechImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Drone+Tech";


// 1. Hero Section for STEM Workshops
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

// 2. "Our STEM Workshops" Section
export const OurStemWorkshopsSection = () => {
    const workshopTypes = [
        { name: "Experimenting Science", image: experimentingScienceImg },
        { name: "Electronics", image: electronicsImg },
        { name: "Robotics", image: roboticsImg },
        { name: "Internet of Things (IoT)", image: iotImg },
        { name: "3D Printing", image: printing3dImg },
        { name: "Aeromodelling", image: aeromodellingImg },
        { name: "Artificial Intelligence", image: aiImg },
        { name: "Drone Technology", image: droneTechImg },
    ];

    return (
        <section className="our-workshops-section section section--primary">
            <div className="section__container">
                <h2 className="section__title section__title--center">Our STEM Workshops</h2>
                <div className="our-workshops-grid">
                    {workshopTypes.map((workshop, index) => (
                        <div key={index} className="workshop-type-card">
                            <div className="workshop-type-card__image-container">
                                <img src={workshop.image} alt={workshop.name} className="workshop-type-card__image" />
                            </div>
                            <h3 className="workshop-type-card__title">{workshop.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 3. "Why Choose Us?" Section
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

// 4. Call to Action Section (Reusing original text, adjusted for workshops context)
export const WorkshopsCtaSection = () => {
    return (
        <section className="workshops-cta section section--primary section__title--center">
            <div className="section__container workshops-cta__container">
                <h2 className="service-content__heading">Ready to join an exciting STEM Workshop? Inquire today!</h2>
            </div>
        </section>
    );
};

// NOTE: WhatAreStemWorkshopsSection and WhyParticipateInWorkshopsSection from previous steps are being
// replaced by the new content from the images. If you still need them, they would be added here.
// For now, these new sections cover the content shown in the provided images.