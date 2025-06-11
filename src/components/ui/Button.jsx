// Button.jsx (UI Component)
import React from 'react';

export default function Button({ 
  children, 
  onClick,
  outline = false,
  className = '',
  ...props 
}) {
  const buttonClasses = `btn ${outline ? 'btn--outline' : ''} ${className}`.trim();
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
}