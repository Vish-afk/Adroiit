// components/HeroSection.jsx
import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import SequentialTypewriter from './SequentialTypewriter'; // Import the new component
import bg from '../assets/bg-removebg-preview.png'; // Import the background image

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
  const commonDeletingSpeed = 50; // Not used for intermediate lines, but for the final clear if TypewriterEffect supported it that way
  const commonPauseDuration = 1500; // Pause after the entire phrase is typed
  const commonLoopDelay = 1000; // Delay before the cycle restarts after clearing everything

  return (
    <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__line-one">Empowering Next-</span> {/* Line 1 */}
          <span className="hero__line-two">Gen through</span>     {/* Line 2 */}

          {/* Use the new SequentialTypewriter component */}
          <SequentialTypewriter
            lines={animatedLinesData}
            typingSpeed={commonTypingSpeed}
            deletingSpeed={commonDeletingSpeed} // Passed for potential future use or if TypewriterEffect component uses it internally for final clear
            pauseDuration={commonPauseDuration} // Pause after all lines are typed
            loopDelay={commonLoopDelay} // Delay before restarting the entire sequence
          />
        </h1>
        <Button onClick={handleLearnMore} aria-label="Learn more about us">
          Dive Deep
          <ArrowRight className="btn__icon" />
        </Button>
      </div>
    </section>
  );
}