// components/TypewriterEffect.jsx
import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 1000, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);
  const [animationFinished, setAnimationFinished] = useState(false); // New state to track if animation is truly done

  useEffect(() => {
    // Reset state when the 'text' prop changes (for new lines in SequentialTypewriter)
    setDisplayedText('');
    setIsDeleting(false);
    setTypingDelay(typingSpeed);
    setAnimationFinished(false);
  }, [text, typingSpeed, deletingSpeed, pauseDuration]);

  // Effect to manage the typing/deleting animation
  useEffect(() => {
    // If the animation is finished (e.g., text is fully typed and no deletion is needed), stop the ticker.
    if (animationFinished) {
      return;
    }

    let ticker = setInterval(() => {
      tick();
    }, typingDelay);

    return () => {
      clearInterval(ticker); // Cleanup: Clear the interval when component unmounts or dependencies change
    };
  }, [displayedText, isDeleting, typingDelay, text, typingSpeed, deletingSpeed, pauseDuration, animationFinished]);

  const tick = () => {
    const currentText = text; // The full target text for this instance of TypewriterEffect

    if (isDeleting) {
      // If deletingSpeed is 0, it means we don't want to delete, so we just stop.
      if (deletingSpeed === 0) {
        setAnimationFinished(true); // Mark as finished
        if (onComplete) onComplete(); // Call callback if provided
        return;
      }
      // Normal deletion logic if deletingSpeed > 0
      setDisplayedText(prevValue => currentText.substring(0, prevValue.length - 1));
      setTypingDelay(deletingSpeed);
    } else {
      // Typing phase: add one character at a time
      setDisplayedText(prevValue => currentText.substring(0, prevValue.length + 1));
      setTypingDelay(typingSpeed);
    }

    // Logic to switch between typing and deleting phases
    if (!isDeleting && displayedText === currentText) {
      // Finished typing the current text
      if (deletingSpeed > 0) {
        // If deletion is enabled, pause then switch to deleting
        setTypingDelay(pauseDuration);
        setIsDeleting(true);
      } else {
        // If no deletion (deletingSpeed is 0), mark as finished immediately
        setAnimationFinished(true);
        if (onComplete) onComplete();
      }
    } else if (isDeleting && displayedText === '') {
      // Finished deleting (only if deletingSpeed > 0)
      setAnimationFinished(true); // Mark as finished
      if (onComplete) onComplete(); // Call callback
    }
  };

  return (
    <>
      {displayedText}
      {/* Show cursor only if animation is not finished and we are actively typing or deleting */}
      {!animationFinished && (
        <span className="typewriter-cursor"></span>
      )}
      {/* Inline style for the cursor animation - ensures it's scoped */}
      <style jsx>{`
        .typewriter-cursor {
          /* Use the text-dark-primary variable for the cursor color in bright mode */
          border-right: 0.1em solid var(--text-dark-primary);
          animation: blink-caret 0.75s step-end infinite; /* Blinking animation */
        }

        @keyframes blink-caret {
          from, to { border-right-color: transparent }
          /* Use the text-dark-primary variable for the cursor color in bright mode */
          50% { border-right-color: var(--text-dark-primary); }
        }
      `}</style>
    </>
  );
};

export default TypewriterEffect;