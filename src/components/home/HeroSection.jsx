// components/HeroSection.jsx
import React from 'react';
// import Button from '../ui/Button'; // REMOVED
import { ChevronDown } from 'lucide-react'; // ADDED: ChevronDown icon
import SequentialTypewriter from './SequentialTypewriter';
import AnimatedBackground from '../home/EducationBackground';

export default function HeroSection() {
  // REMOVED: handleLearnMore as it's no longer a button
  // const handleLearnMore = () => {
  //   window.location.href = '/about';
  // };

  // ADDED: Function to smoothly scroll down the page
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scrolls down by the height of the viewport
      behavior: 'smooth'
    });
  };

  const animatedLinesData = [
    { text: "Education", classNameModifier: "education" },
    { text: "and", classNameModifier: "and" },
    { text: "Innovation!", classNameModifier: "innovation" },
  ];

  const commonTypingSpeed = 50;
  const commonDeletingSpeed = 25;
  const commonPauseDuration = 500;
  const commonLoopDelay = 1000;

  return (
    <section className="hero">
      <AnimatedBackground />

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__line-one">Empowering Next-</span>
          <span className="hero__line-two">Gen through</span>

          <SequentialTypewriter
            lines={animatedLinesData}
            typingSpeed={commonTypingSpeed}
            deletingSpeed={commonDeletingSpeed}
            pauseDuration={commonPauseDuration}
            loopDelay={commonLoopDelay}
          />
        </h1>
        {/* KEY CHANGE: Replaced Button with ChevronDown icon */}
        <ChevronDown
          className="hero__scroll-arrow"
          onClick={handleScrollDown}
          size={60} // Adjust size as needed
          aria-label="Scroll down"
        />
      </div>
    </section>
  );
}