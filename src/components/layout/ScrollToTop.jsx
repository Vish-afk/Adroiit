// src/components/layout/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page instantly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // This makes the scroll instantaneous
    });
  }, [pathname]);

  return null; // This component doesn't render any UI
}

export default ScrollToTop;