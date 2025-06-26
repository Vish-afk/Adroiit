// src/components/advanced-labs/OurOfferingsSection.jsx
import React from 'react';
import '../../styles/advanced-labs/advanced-labs.css'; // Import specific CSS

// Placeholder images for "Our Offerings" grid
const electricalElectronicsImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Electrical";
const embeddedSystemsImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Embedded";
const microcontrollerMicroprocessorImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Microcontroller";
const iotLabImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=IoT+Lab";
const roboticsLabImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Robotics+Lab";
const industrialAutomationImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Industrial+Automation";
const printing3dLabImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=3D+Printing+Lab";

export const OurOfferingsSection = () => {
    const labOfferings = [
        { name: "Electrical and Electronics Laboratory", image: electricalElectronicsImg },
        { name: "Embedded Systems Laboratory", image: embeddedSystemsImg },
        { name: "Microcontroller and Microprocessor Lab", image: microcontrollerMicroprocessorImg },
        { name: "Internet of Things (IoT) Laboratory", image: iotLabImg },
        { name: "Robotics Laboratory", image: roboticsLabImg },
        { name: "Industrial Automation Laboratory", image: industrialAutomationImg },
        { name: "3D Printing Laboratory", image: printing3dLabImg },
    ];

    return (
        <section className="our-offerings-section section section--primary">
            <div className="section__container">
                <h2 className="section__title section__title--center">Our Offerings</h2>
                <div className="offerings-grid">
                    {labOfferings.map((offering, index) => (
                        <div key={index} className="offering-card">
                            <div className="offering-card__image-container">
                                <img src={offering.image} alt={offering.name} className="offering-card__image" />
                            </div>
                            <h3 className="offering-card__title">{offering.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurOfferingsSection;