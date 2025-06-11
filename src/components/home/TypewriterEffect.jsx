// components/TypewriterEffect.jsx
import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  // Effect to manage the typing/deleting animation
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingDelay);

    return () => {
      clearInterval(ticker); // Cleanup on component unmount or re-render
    };
  }, [displayedText, isDeleting, typingDelay, loopNum, text, typingSpeed, deletingSpeed, pauseDuration]); // Dependencies for useEffect

  const tick = () => {
    const currentText = text; // The full text string to animate

    if (isDeleting) {
      // Deleting phase: remove one character at a time
      setDisplayedText(prevValue => currentText.substring(0, prevValue.length - 1));
      setTypingDelay(deletingSpeed); // Speed up deletion for a snappier feel
    } else {
      // Typing phase: add one character at a time
      setDisplayedText(prevValue => currentText.substring(0, prevValue.length + 1));
      setTypingDelay(typingSpeed); // Normal typing speed
    }

    // Logic to switch between typing and deleting phases
    if (!isDeleting && displayedText === currentText) {
      // Finished typing: Pause, then switch to deleting
      setTypingDelay(pauseDuration);
      setIsDeleting(true);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting: Pause (briefly), then switch to typing for the next loop
      setIsDeleting(false);
      setLoopNum(loopNum + 1); // Increment loop count (though we only have one string)
      setTypingDelay(typingSpeed); // Reset to typing speed
    }
  };

  return (
    <>
      {displayedText}
      {/* The cursor blink is handled by a simple CSS animation for performance */}
      <span className="typewriter-cursor"></span>
      {/* Inline style for the cursor animation - ensures it's scoped */}
      <style jsx>{`
        .typewriter-cursor {
          border-right: 0.1em solid var(--text-primary); /* Use a CSS variable for cursor color */
          animation: blink-caret 0.75s step-end infinite; /* Blinking animation */
        }

        @keyframes blink-caret {
          from, to { border-right-color: transparent }
          50% { border-right-color: var(--text-primary); }
        }
      `}</style>
    </>
  );
};

export default TypewriterEffect;