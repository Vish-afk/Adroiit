// src/components/home/AboutSection.jsx
import React from 'react';
import sideImage from '../../assets/about-CmYOi0Js.png';
// KEY CHANGE: Updated imports for unique point icons
import { Lightbulb, Send, Cpu, Wrench, Atom } from 'lucide-react'; 

export default function AboutSection() {
    return (
        <section
            id="about-section"
            className="section section--secondary about-section--gradient-bg"
        >
            <div className="section__container">
                <div className="about">
                    {/* Main layout container - This will be the grid parent */}
                    <div className="about__main-layout">
                        {/* Left div: About Content */}
                        <div className="about__content">
                            <h2 className="section__title">About Adroiit Technovations</h2>
                            <p className="section__text">
                                Adroiit Technovations is redefining education by building future-ready learning ecosystems through seamless integration of hands-on learning and experimentation with real-world applications to bridge the gap between academia and industry. We are transforming future with our innovative technological solutions.
                            </p>
                            {/* The margin for hr is now controlled by CSS in about.css */}
                            <hr /> 
                            
                            {/* Box for the subtitle and points */}
                            <div className="about__points-box">
                                <h3 className="section__subtitle">
                                    Empowering the Innovators of Tomorrow
                                </h3>
                                {/* Points with Lucide Icons */}
                                <div className="about__point-item">
                                    {/* KEY CHANGE: Cpu icon for critical thinking */}
                                    <Cpu className="about__point-icon" />
                                    <p className="section__text">Think critically in a rapidly changing world</p>
                                </div>
                                <div className="about__point-item">
                                    {/* KEY CHANGE: Wrench icon for problem-solving */}
                                    <Wrench className="about__point-icon" /> 
                                    <p className="section__text">Solve real-world challenges with creativity</p>
                                </div>
                                <div className="about__point-item">
                                    {/* KEY CHANGE: Atom icon for STEM exploration */}
                                    <Atom className="about__point-icon" />
                                    <p className="section__text">Explore STEM through hands-on learning.</p>
                                </div>
                            </div> {/* End about__points-box */}
                            

                        </div>

                        {/* Right div: Image, Vision, and Mission */}
                        <div className="about__visual-column">
                            {/* Image */}
                            <div className="about__icon-wrapper">
                                <img src={sideImage} alt="About Icon" />
                            </div>

                            {/* Vision and Mission items within the right column */}
                            <div className="vm-items-container">
                                {/* Vision Item */}
                                <div className="vm-item">
                                    <Lightbulb className="vm-item__icon" /> 
                                    <h3 className="vm-item__title">Our Vision</h3>
                                    <p className="vm-item__text">
                                        Our vision is to build an educational and innovative community to empower future with innovators and drive advancements in cutting-edge technological solutions.
                                    </p>
                                </div>

                                {/* Mission Item */}
                                <div className="vm-item">
                                    <Send className="vm-item__icon" /> 
                                    <h3 className="vm-item__title">Our Mission</h3>
                                    <p className="vm-item__text">
                                        Our mission is to upskill students through hands-on learning experiences to foster next generations with skilled and creative problem-solvers ready to shape the future.
                                    </p>
                                </div>
                            </div> {/* End vm-items-container */}
                        </div> {/* End about__visual-column */}
                    </div> {/* End about__main-layout */}
                </div>
            </div>
        </section>
    );
}