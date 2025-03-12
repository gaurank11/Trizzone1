import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();
  const text = "rizzone";
  const [showText, setShowText] = useState(false);
  const [showBlinkingText, setShowBlinkingText] = useState(false);
  const [showCityscape, setShowCityscape] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 2000);
    setTimeout(() => setShowBlinkingText(true), 1000);
    setTimeout(() => setShowBlinkingText(false), 2500);
    setTimeout(() => setShowCityscape(true),0);
    setTimeout(() => navigate("/"), 7000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-[70px] md:text-[280px] font-bold relative">
      {/* "T" moves to the left */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: showText ? -80 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex"
      >
        <span>T</span>
        {showText &&
          text.split("" ).map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 * index, duration: 0.1 }}
            >
              {char}
            </motion.span>
          ))}
      </motion.div>

      {/* Blinking Text */}
      {showBlinkingText && (
        <motion.div
          className="text-2xl md:text-4xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0] }}
          transition={{ duration: 3 }}
        >
          Cities. People. Design.
        </motion.div>
      )}

      {/* Acknowledgment and Cityscape */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center w-full mt-10 px-4 max-w-5xl"
        animate={{ marginTop: showBlinkingText ? 50 : 10 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p className="text-center text-sm md:text-lg md:w-1/2">
          Archipelago acknowledges the Turrbal and Yuggera people as the Traditional Custodians of the land on which our office is located, where we are privileged to design and create. We pay our respects to Elders past, present, and emerging.
        </motion.p>

        {/* Cityscape Animation */}
        {showCityscape && (
        <motion.svg
          width="80%"
          height="150"
          viewBox="0 0 600 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ stroke: "rgba(255, 255, 255, 0.3)", strokeWidth: 1 }}
          animate={{ stroke: "rgba(255, 255, 255, 1)", strokeWidth: 2 }}
          transition={{ duration: 2 }}
        >
          {/* Sample Buildings - Customize More as Needed */}
          <motion.path d="M20 120 L20 60 L40 60 L40 120" stroke="white" strokeWidth="2" />
          <motion.path d="M60 120 L60 40 L80 40 L80 120" stroke="white" strokeWidth="2" />
          <motion.path d="M100 120 L100 30 L120 30 L120 120" stroke="white" strokeWidth="2" />
          <motion.path d="M140 120 L140 50 L160 50 L160 120" stroke="white" strokeWidth="2" />
          <motion.path d="M180 120 L180 20 L200 20 L200 120" stroke="white" strokeWidth="2" />
          <motion.path d="M220 120 L220 80 L240 80 L240 120" stroke="white" strokeWidth="2" />
          <motion.path d="M260 120 L260 60 L280 60 L280 120" stroke="white" strokeWidth="2" />
          <motion.path d="M300 120 L300 30 L320 30 L320 120" stroke="white" strokeWidth="2" />
          <motion.path d="M340 120 L340 70 L360 70 L360 120" stroke="white" strokeWidth="2" />
          <motion.path d="M380 120 L380 50 L400 50 L400 120" stroke="white" strokeWidth="2" />
          <motion.path d="M420 120 L420 90 L440 90 L440 120" stroke="white" strokeWidth="2" />
          <motion.path d="M460 120 L460 60 L480 60 L480 120" stroke="white" strokeWidth="2" />
          <motion.path d="M500 120 L500 30 L520 30 L520 120" stroke="white" strokeWidth="2" />
          <motion.path d="M540 120 L540 80 L560 80 L560 120" stroke="white" strokeWidth="2" />
          <motion.path d="M580 120 L580 40 L600 40 L600 120" stroke="white" strokeWidth="2" />
        </motion.svg>
      )}
      </motion.div>
    </div>
  );
};

export default Loader;
