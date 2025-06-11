import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  ...props 
}) {
  const baseClasses = 'font-poppins font-semibold transition-all transform hover:scale-105 rounded-full inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-deep-purple hover:bg-light-purple text-white shadow-lg',
    secondary: 'bg-soft-off-white text-deep-purple hover:bg-light-purple',
    outline: 'border-2 border-deep-purple text-deep-purple hover:bg-deep-purple hover:text-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
