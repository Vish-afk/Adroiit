// components/HeroSection.jsx
import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import SequentialTypewriter from './SequentialTypewriter';
import AnimatedBackground from '../home/EducationBackground'; // Corrected path and alias for EducationBackground

export default function HeroSection() {
  const handleLearnMore = () => {
    window.location.href = '/about';
  };

  const animatedLinesData = [
    { text: "Education", classNameModifier: "education" },
    { text: "and", classNameModifier: "and" },
    { text: "Innovation!", classNameModifier: "innovation" },
  ];

  // Define global animation parameters for consistency
  const commonTypingSpeed = 100;
  const commonDeletingSpeed = 50;
  const commonPauseDuration = 1500;
  const commonLoopDelay = 1000;

  return (
    <section className="hero">
      {/* Place the animated background component here */}
      <AnimatedBackground /> {/* This component will render the div with class "education-background" */}

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__line-one">Empowering Next-</span>
          <span className="hero__line-two">Gen through</span>

          {/* Use the new SequentialTypewriter component */}
          <SequentialTypewriter
            lines={animatedLinesData}
            typingSpeed={commonTypingSpeed}
            deletingSpeed={commonDeletingSpeed}
            pauseDuration={commonPauseDuration}
            loopDelay={commonLoopDelay}
          />
        </h1>
        {/* Simply set the outline prop to true */}
        <Button onClick={handleLearnMore} aria-label="Learn more about us" outline={true}>
          Learn More
          <ArrowRight className="btn__icon" />
        </Button>
      </div>
    </section>
  );
}