// src/components/stem-workshops/OurStemWorkshopsSection.jsx
import React from 'react';
import '../../styles/stem-workshops/stem-workshops.css';

// Placeholder images for "Our STEM Workshops" grid
const experimentingScienceImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Science";
const electronicsImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Electronics";
const roboticsImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Robotics";
const iotImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=IoT";
const printing3dImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=3D+Printing";
const aeromodellingImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Aeromodelling";
const aiImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=AI";
const droneTechImg = "https://placehold.co/120x120/5E3C7E/A7B8D0?text=Drone+Tech";

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

export default OurStemWorkshopsSection; // Export as default for easier import