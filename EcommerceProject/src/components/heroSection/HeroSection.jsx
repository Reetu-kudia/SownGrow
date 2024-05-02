import React, { useState, useEffect } from 'react';
import imgh1 from '../heroSection/imgh1.png';
import imgh2 from '../heroSection/imgh2.png';
import imgh3 from '../heroSection/imgh3.png';

function HeroSection() {
  const images = [imgh1, imgh2, imgh3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000); // Change image every 5 seconds (adjust as needed)
    return () => clearInterval(timer); // Clean up the timer when component unmounts
  }, []);

  return (
    <div>
      <img src={images[currentImageIndex]} alt="" style={{ width: '100%', height: '80vh' }} />
    </div>
  );
}

export default HeroSection;
