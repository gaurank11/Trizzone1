import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Hero() {
  const images = ["/h1.jpg", "/h2.jpg", "/h3.jpg"];
  

  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
      />

      {/* Left Side Buttons */}
      <div className="absolute right-8 md:left-12 bottom-28 md:bottom-20 flex flex-row  md:space-x-4">
        {["Architectures", "Interiors", "Landscape"].map((text, index) => (
          <button
            key={index}
            onClick= {() => navigate('/properties')}
            className="px-3 md:px-6 py-1 md:py-2  text-white text-sm md:text-lg font-semibold rounded-md hover:text-gray-400 transition duration-300"
          >
            {text}

          </button>
        ))}
      </div>

    

      {/* Right Side Big "TRIZZONE" */}
      <div className="absolute right-12 bottom-1/4 md:bottom-20 text-white text-5xl md:text-7xl font-bold uppercase">
        TRIZZONE
      </div>
    </div>
  );
}

export default Hero;
