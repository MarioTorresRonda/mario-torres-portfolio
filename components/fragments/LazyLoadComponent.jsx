import React, { useEffect, useState, useRef } from 'react';

const LazyLoadComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible( entry.isIntersecting );
      },
      { threshold: 0.1 } // Load when at least 10% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect(); // Clean up the observer
  }, []);

  return (
    <div ref={elementRef}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyLoadComponent;