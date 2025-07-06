// components/SequentialTypewriter.jsx
import React, { useState, useEffect, useRef } from 'react';
import TypewriterEffect from './TypewriterEffect'; // Assuming TypewriterEffect is in components/TypewriterEffect.jsx

const SequentialTypewriter = ({ lines, typingSpeed, deletingSpeed, pauseDuration, loopDelay }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  // Stores the final, fully typed content for each line. This ensures layout stability.
  const [lineContent, setLineContent] = useState(() => lines.map(line => ''));
  // Controls whether a TypewriterEffect instance is actively typing.
  const [isTypingActive, setIsTypingActive] = useState(false);
  // Tracks if all lines have been typed at least once in the current sequence.
  const [allLinesCompleted, setAllLinesCompleted] = useState(false);
  const timeoutRef = useRef(null);

  // Effect to manage the overall sequence and resets
  useEffect(() => {
    // Reset all states when the 'lines' prop changes or on initial mount
    setLineContent(lines.map(line => '')); // Clear all displayed content
    setCurrentLineIndex(0);
    setIsTypingActive(false);
    setAllLinesCompleted(false);
    clearTimeout(timeoutRef.current); // Clear any pending timeouts
  }, [lines]);

  // Effect to control the typing flow for each line
  useEffect(() => {
    // If all lines have been completed, we enter the pause/reset phase
    if (allLinesCompleted) {
      setIsTypingActive(false); // Ensure no typewriter is active
      timeoutRef.current = setTimeout(() => {
        // After the main pause, reset for the next loop
        setLineContent(lines.map(line => '')); // Clear content to start fresh
        setCurrentLineIndex(0); // Go back to the first line
        setAllLinesCompleted(false); // Reset the completion flag
      }, loopDelay); // Use loopDelay for the pause before restarting
      return () => clearTimeout(timeoutRef.current);
    }

    // If there are still lines to type
    if (currentLineIndex < lines.length) {
      // Start the typewriter effect for the current line
      setIsTypingActive(true);
    } else {
      // This case is hit when currentLineIndex becomes equal to lines.length,
      // meaning all lines have been processed and the sequence is complete.
      setAllLinesCompleted(true);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [currentLineIndex, lines, loopDelay, allLinesCompleted]);

  // Callback function passed to TypewriterEffect, triggered when a line finishes typing
  const handleTypewriterComplete = () => {
    // Update the lineContent state with the fully typed text for the current line
    setLineContent(prev => {
      const newContent = [...prev];
      newContent[currentLineIndex] = lines[currentLineIndex].text;
      return newContent;
    });

    setIsTypingActive(false); // The typewriter for this line is no longer active

    // Move to the next line after a brief delay
    if (currentLineIndex < lines.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
      }, pauseDuration / 2); // Use a portion of pauseDuration for inter-line delay
    } else {
      // If this was the last line, mark the entire sequence as completed
      setAllLinesCompleted(true);
    }
  };

  return (
    <>
      {lines.map((line, index) => (
        <span
          key={index}
          className={`hero__animated-line hero__animated-line--${line.classNameModifier}`}
          style={{
            // Ensure each line occupies its own block space
            display: 'block',
            textAlign: 'center',
            // Use opacity for smooth visual transitions without affecting layout space
            opacity: (index < currentLineIndex || (index === currentLineIndex && !isTypingActive && !allLinesCompleted)) ? 1 :
                     (index === currentLineIndex && isTypingActive) ? 1 :
                     (allLinesCompleted && index >= currentLineIndex) ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out', // Smooth fade for lines
            // Crucial for layout stability: ensure consistent height for each line
            // Adjust '1.2em' based on the actual line-height of your text in hero.css
            minHeight: '1.2em',
            lineHeight: '1.2em',
          }}
        >
          {/*
            Conditionally render TypewriterEffect only for the line currently being typed.
            Otherwise, display the full, stored text content for that line.
          */}
          {index === currentLineIndex && isTypingActive && !allLinesCompleted ? (
            <TypewriterEffect
              text={line.text}
              typingSpeed={typingSpeed}
              deletingSpeed={0} // IMPORTANT: Ensure TypewriterEffect does NOT delete here
              pauseDuration={0} // IMPORTANT: Ensure TypewriterEffect does NOT pause after typing
              onComplete={handleTypewriterComplete} // Callback when this line is done typing
            />
          ) : (
            // Display the full content from state for non-active or completed lines
            lineContent[index]
          )}
        </span>
      ))}
    </>
  );
};

export default SequentialTypewriter;
