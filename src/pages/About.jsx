import React, { useEffect, useState } from 'react';

const images = [
  '/aa.jpg',
  '/ab.jpg',
  '/abo.jpg',
  '/abou.jpg'
];

const paragraphs = [
  'OUR TEAM CONSISTS OF ARCHITECTURE AND DESIGN-TRAINED PROFESSIONALS AS WELL AS A SUPPORT TEAM WHO SHARE A PASSION FOR EXCELLENCE,AND WHOSE DEDICATION, TALENT AND EXPERIENCE RESULT IN WORKS OF SENSORY RESONANCE AND INTEGRITY.',
  'THE COLLECTIVE POTENTIAL OF THE TALENTED AND COMMITTED INDIVIDUALS WHO WORK WITH WOW IS THE FIRM’S GREATEST ASSET.',
  'WE CAPITALIZE ON THE DIVERSITY OF CULTURE, CHARACTER AND TALENT THAT OUR TEAM BRINGS TO THE STUDIO.',
  'OUR SUCCESS IS DUE TO THE TALENTED ARCHITECTS, INTERIOR DESIGNERS, TECHNICIANS, AND ADMINISTRATORS WORKING AS AN EFFICIENT TEAM.'
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [paragraphs]);

  return (
    <div className="relative w-full h-screen pb-20 overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        <p className="text-white text-2xl md:text-4xl font-semibold px-4 text-center">
          {paragraphs[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;