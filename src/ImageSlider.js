// ImageSlider.js
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ImageSlider.css'; // Import your CSS file for styling

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
  'image8.jpg',
  // Add more images as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="column left">
        <TransitionGroup>
          <CSSTransition key={currentIndex} timeout={1000} classNames="fade">
            <img src={images[currentIndex]} alt={`left-${currentIndex}`} />
          </CSSTransition>
        </TransitionGroup>
      </div>

      <div className="column right">
        <TransitionGroup>
          <CSSTransition
            key={(currentIndex + 1) % images.length}
            timeout={1000}
            classNames="fade"
          >
            <img
              src={images[(currentIndex + 1) % images.length]}
              alt={`right-${(currentIndex + 1) % images.length}`}
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default ImageSlider;

