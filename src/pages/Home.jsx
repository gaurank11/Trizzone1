import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "../components/hero"; // Importing the Hero component

const Home = () => {
  const text = "rizzone";
  const [reverseText, setReverseText] = useState(false);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const hasPlayed = localStorage.getItem("animationPlayed");
    if (hasPlayed === "true") {
      setReverseText(true);
      setTimeout(() => {
        setShowHero(true); // Show Hero after animation ends
      }, text.length * 50 + 500); // Wait for animation to complete
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-[70px] md:text-[280px] font-bold relative">
      {/* Reverse Animation */}
      {!showHero && (
        <motion.div className="flex">
          <span>T</span>
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: reverseText ? 0 : 1 }}
              transition={{ delay: 0.05 * index, duration: 0.2 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* Show Hero Component after animation */}
      {showHero && <Hero />}
    </div>
  );
};

export default Home;
