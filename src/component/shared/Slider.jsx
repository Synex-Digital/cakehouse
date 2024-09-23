import React, { useState, useEffect } from 'react';

const SimpleSlider = ({ cards, autoSlide = false, slideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + cards.length) % cards.length
    );
  };

  useEffect(() => {
    if (autoSlide) {
      const intervalId = setInterval(nextSlide, slideInterval);
      return () => clearInterval(intervalId);
    }
  }, [autoSlide, slideInterval]);

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={prevSlide}>&lt;</button>
      <div style={{ display: 'inline-block', padding: '20px', border: '1px solid #ccc' }}>
        {cards[currentIndex]}
      </div>
      <button onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default SimpleSlider;
