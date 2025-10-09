"use client";

import React, { useState, useEffect } from 'react';

const UnblurEffect = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'
      }`}
    >
      {children}
    </div>
  );
};

export default UnblurEffect;