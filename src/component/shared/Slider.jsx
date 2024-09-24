import React, { useEffect, useState } from "react";
import LeftButton from "./LeftButton";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const SimpleSlider = ({ cards, autoSlide = false, slideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 4; // Always show 4 divs
  const totalSlides = cards.length;

  // Move to the next slide (shift by one div)
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % totalSlides // Loop back to the beginning if reaching the end
    );
  };

  // Move to the previous slide (shift by one div)
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides // Loop back to the end if reaching the start
    );
  };

  // Auto-slide effect (move to the next slide every interval)
  useEffect(() => {
    if (autoSlide) {
      const intervalId = setInterval(nextSlide, slideInterval);
      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [autoSlide, slideInterval]);

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "50px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "25px",
        }}
      >
        <LeftButton />
      </button>

      {/* Display exactly 4 slides */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
          transition: "transform 0.3s ease",
        }}
      >
        {Array(slidesToShow)
          .fill(0)
          .map((_, i) => {
            const cardIndex = (currentIndex + i) % totalSlides;
            return (
              <div
                key={cardIndex}
                style={{
                  width: "270px",
                  height: "391px",
                  textAlign: "center",
                }}
              >
                {cards[cardIndex]}
              </div>
            );
          })}
      </div>

      {/* Next button */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "50px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "25px",
        }}
      >
        <HiOutlineArrowNarrowRight />
      </button>
    </div>
  );
};
export default SimpleSlider;
