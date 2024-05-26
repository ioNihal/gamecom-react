import React, { useState, useEffect } from 'react';
import '../styles/ImageSlider.css';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const numImages = images.length;
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numImages);
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [images, interval]);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={
            index === currentIndex
              ? 'slideIn'
              : index === (currentIndex - 1 + images.length) % images.length
              ? 'slideLeft'
              : index === (currentIndex + 1) % images.length
              ? 'slideRight'
              : 'slideBack'
          }
        />
      ))}
    </div>
  );
};

export default ImageSlider;

