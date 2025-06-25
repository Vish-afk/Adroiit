// src/components/stem-labs/WhatIsStemLabSection.jsx
import React from 'react';

// Import image asset for this section
import stemLabSetupImage from '../../assets/image_3b3e82.png'; // Correct path relative to this component

// This component renders the "What is a STEM Lab?" section.
const WhatIsStemLabSection = () => {
    return (
        <section className="stem-labs-section section section--secondary">
            <div className="section__container stem-labs-content-block">
                <div className="stem-labs-text-content">
                    <h2 className="service-content__heading">What is a STEM lab?</h2>
                    <p className="section__text">
                        A STEM lab is a dynamic and collaborative learning environment designed to foster curiosity, innovation, and hands-on experimentation in Science,
                        Technology, Engineering, and Mathematics (STEM) subjects. Unlike traditional classrooms, a STEM lab allows students to apply concepts learned in the
                        classrooms by developing innovative projects and by involving themselves in solving real-world challenges that deepen their understanding and spark a
                        passion for learning.
                    </p>
                </div>
                <div className="stem-labs-image-container">
                    <img src={stemLabSetupImage} alt="STEM Lab setup" className="stem-labs-image" />
                </div>
            </div>
        </section>
    );
};

export default WhatIsStemLabSection;
