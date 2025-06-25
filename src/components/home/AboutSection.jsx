// AboutSection.jsx
import React from 'react';
import sideImage from '../../assets/about-CmYOi0Js.png';
// REMOVED: import { Lightbulb, Flag } from 'lucide-react'; 

// NEW: Vision Icon (Puzzle - outline)
const VisionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="vm-item__icon">
    {/* Top left piece */}
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <path d="M10 6h2v2h-2z" /> {/* Connector out right */}
    <path d="M6 10v2h2v-2z" /> {/* Connector down */}

    {/* Top right piece */}
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <path d="M12 6h2v2h-2z" /> {/* Connector out left */}
    <path d="M17 10v2h2v-2z" /> {/* Connector down */}

    {/* Bottom left piece */}
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <path d="M10 17h2v2h-2z" /> {/* Connector out right */}
    <path d="M6 12v2h2v-2z" /> {/* Connector up */}

    {/* Bottom right piece */}
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <path d="M12 17h2v2h-2z" /> {/* Connector out left */}
    <path d="M17 12v2h2v-2z" /> {/* Connector up */}
  </svg>
);

// NEW: Mission Icon (Target with Dart - outline)
const MissionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="vm-item__icon">
    <circle cx="12" cy="12" r="10" /> {/* Outer circle */}
    <circle cx="12" cy="12" r="6" />  {/* Middle circle */}
    <circle cx="12" cy="12" r="2" /> {/* Inner circle (bullseye) - as outline */}
    {/* Dart arrow */}
    <path d="M15 9l-3 3-3-3" /> {/* Arrowhead pointing at center from top-right */}
    <line x1="12" y1="12" x2="12" y2="20" /> {/* Dart line */}
    <line x1="10" y1="18" x2="14" y2="18" /> {/* Dart fletching base */}
    <line x1="10" y1="20" x2="14" y2="20" /> {/* Dart fletching top */}
  </svg>
);

export default function AboutSection() {
  return (
    <section 
      id="about-section" 
      className="section section--secondary about-section--gradient-bg" 
    > 
      <div className="section__container">
        <div className="about">
          {/* Top layout for main content and image */}
          <div className="about__top-layout">
            <div className="about__content">
              <h2 className="section__title">About Adroiit Technovations</h2>
              <p className="section__text">
                Adroiit Technovations is redefining education by building future-ready learning ecosystems through seamless integration of hands-on learning and experimentation with real-world applications to bridge the gap between academia and industry. We are transforming future with our innovative technological solutions.
              </p>
            </div>
            <div className="about__icon-container">
              <div className="about__icon">
                <img src={sideImage} alt="About Icon" />
              </div>
            </div>
          </div>

          {/* Container for Vision and Mission items (no boxes) */}
          <div className="vm-items-container">
            {/* Vision Item */}
            <div className="vm-item">
              <VisionIcon /> {/* Using the new custom icon */}
              <h3 className="vm-item__title">Our Vision</h3>
              <p className="vm-item__text">
                Our vision is to build an educational and innovative community to empower future with innovators and drive advancements in cutting-edge technological solutions.
              </p>
            </div>

            {/* Mission Item */}
            <div className="vm-item">
              <MissionIcon /> {/* Using the new custom icon */}
              <h3 className="vm-item__title">Our Mission</h3>
              <p className="vm-item__text">
                Our mission is to upskill students through hands-on learning experiences to foster next generations with skilled and creative problem-solvers ready to shape the future.
              </p>
            </div>
          </div> {/* End vm-items-container */}

        </div>
      </div>
    </section>
  );
}