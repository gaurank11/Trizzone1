import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const text = "Trizzone";
  const images = ["/h1.jpg", "/h2.jpg", "/h3.jpg"];
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reverseText, setReverseText] = useState(false);
  const [showAnimation, setShowAnimation] = useState(
    localStorage.getItem("hasSeenAnimation") !== "true"
  );

  useEffect(() => {
    if (showAnimation) {
      // Set the flag in localStorage so it won't run again
      localStorage.setItem("hasSeenAnimation", "true");

      // Start image transition
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      // Start disappearing effect after 2 seconds
      setTimeout(() => {
        setReverseText(true);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [showAnimation]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen text-white font-bold">
      {/* Background Image */}
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
      />

      {/* "Trizzone" Text with Reverse Disappear Effect */}
      {showAnimation && (
        <motion.div className="absolute text-[70px] md:text-[280px] uppercase">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{
                opacity:
                  reverseText && index !== 0 // All letters except "T"
                    ? 0
                    : reverseText && index === 0 // "T" disappears last after 2 seconds
                    ? 0
                    : 1,
              }}
              transition={{
                delay: reverseText
                  ? index === 0 // If it's "T"
                    ? 2.2 // Extra 2 seconds before fading
                    : 0.2 * (text.length - index) // Other letters disappear sequentially
                  : 0,
                duration: 0.2,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* Left Side Buttons */}
      <div className="absolute right-8 md:left-12 bottom-28 md:bottom-20 flex flex-row md:space-x-4">
        {["Architectures", "Interiors", "Landscape"].map((text, index) => (
          <button
            key={index}
            onClick={() => navigate("/properties")}
            className="px-3 md:px-6 py-1 md:py-2 text-white text-sm md:text-lg font-semibold rounded-md hover:text-gray-400 transition duration-300"
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
