// components/SequentialTypewriter.jsx
import React, { useState, useEffect, useRef } from 'react';
import TypewriterEffect from './TypewriterEffect'; // Assuming TypewriterEffect is in components/TypewriterEffect.jsx

const SequentialTypewriter = ({ lines, typingSpeed, deletingSpeed, pauseDuration, loopDelay }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedLines, setTypedLines] = useState(Array(lines.length).fill(false)); // To track which lines are fully typed
  const [allTypedAndPaused, setAllTypedAndPaused] = useState(false); // To track if the whole phrase is done and paused
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Reset when lines prop changes (if it ever does) or on initial mount
    setCurrentLineIndex(0);
    setTypedLines(Array(lines.length).fill(false));
    setAllTypedAndPaused(false);
  }, [lines]);

  useEffect(() => {
    if (allTypedAndPaused) {
      // Phase 4: All typed and paused, now clear all and restart
      const restartTimer = setTimeout(() => {
        setTypedLines(Array(lines.length).fill(false)); // Clear all typed lines
        setCurrentLineIndex(0); // Reset to the first line
        setAllTypedAndPaused(false); // Reset this state
      }, loopDelay); // Wait for the specified loop delay before restarting

      return () => clearTimeout(restartTimer);
    } else if (currentLineIndex < lines.length) {
      // Phase 1, 2, 3: Typing out each line sequentially

      const currentLineText = lines[currentLineIndex].text;
      const typeTime = currentLineText.length * typingSpeed;

      timeoutRef.current = setTimeout(() => {
        // Mark current line as typed
        setTypedLines(prev => {
          const newTyped = [...prev];
          newTyped[currentLineIndex] = true;
          return newTyped;
        });

        // Move to the next line or trigger full-phrase pause
        if (currentLineIndex < lines.length - 1) {
          // If not the last line, move to next
          setCurrentLineIndex(prev => prev + 1);
        } else {
          // If it's the last line, all are typed, now pause before clearing
          setAllTypedAndPaused(true);
        }
      }, typeTime); // Wait for the typing of the current line to finish

    } else if (currentLineIndex === lines.length && !allTypedAndPaused) {
        // This state should theoretically not be hit much due to allTypedAndPaused handling.
        // It implies all lines are typed but we haven't triggered the full pause/clear yet.
        // This acts as a safeguard.
        setAllTypedAndPaused(true);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [currentLineIndex, lines, typingSpeed, deletingSpeed, pauseDuration, loopDelay, allTypedAndPaused]);


  return (
    <>
      {lines.map((line, index) => (
        <span
          key={index}
          className={`hero__animated-line hero__animated-line--${line.classNameModifier}`}
          style={{
            // Visually hide if not yet typed or if the whole sequence is cleared
            visibility: typedLines[index] || index <= currentLineIndex ? 'visible' : 'hidden',
            // To ensure space is always allocated, even if hidden
            height: typedLines[index] || index <= currentLineIndex ? 'auto' : '1.1em', // Adjust height based on your line-height
            overflow: 'hidden', // Hide content that might still be typing
            display: 'block', // Ensure each line gets its own block
            textAlign: 'center', // Center each line
          }}
        >
          {/* Only render TypewriterEffect for the current typing line, or if already typed */}
          {index === currentLineIndex && !allTypedAndPaused ? (
            <TypewriterEffect
              text={line.text}
              typingSpeed={typingSpeed}
              // Deleting speed and pause duration are NOT used per line here
              // The entire phrase deletes after the whole sequence
              deletingSpeed={0}
              pauseDuration={0}
            />
          ) : (
            // If line was already typed or current index is past it, show its full text
            typedLines[index] ? line.text : '' // Show full text if typed, else empty (hidden by visibility)
          )}
        </span>
      ))}
    </>
  );
};

export default SequentialTypewriter;