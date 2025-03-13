import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();
  const text = "rizzone";
  const [showText, setShowText] = useState(false);
  const [reverseText, setReverseText] = useState(false);
  const [showCityscape, setShowCityscape] = useState(false);
  const [showPhrase, setShowPhrase] = useState(false);
  const [startFill, setStartFill] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 3000);
    setTimeout(() => setShowPhrase(true), 1000);
    setTimeout(() => setShowPhrase(false), 2500);
    setTimeout(() => setShowCityscape(true), 0);
    setTimeout(() => setStartFill(true), 500); // Start filling after 1 sec
    setTimeout(() => setReverseText(true), 8000);
    setTimeout(() => navigate("/"), 12000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-[70px] md:text-[280px] font-bold relative">
      {/* "T" moves to the left, then reverses */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: showText ? -80 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex"
      >
        <span>T</span>
        {showText &&
          text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: reverseText ? 0 : 1,
              }}
              transition={{ delay: 0.05 * index, duration: 0.2 }}
            >
              {char}
            </motion.span>
          ))}
      </motion.div>

      {/* Animated Phrase - Appearing One by One in Row, Disappearing Together */}
      <div className="flex gap-4 mt-4">
        {["Cities.", "People.", "Design."].map((word, index) => (
          <motion.div
            key={index}
            className="text-2xl md:text-4xl"
            initial={{ opacity: 0 }}
            animate={showPhrase ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              delay: showPhrase ? index * 0.5 : 0,
              duration: showPhrase ? 0.5 : 0.5,
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Cityscape SVG with Fill Animation */}
      {showCityscape && (
        <motion.div className="flex justify-center items-center mt-10 w-full">
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
            {[
              { x: 20, h: 60 },
              { x: 60, h: 40 },
              { x: 100, h: 30 },
              { x: 140, h: 50 },
              { x: 180, h: 20 },
              { x: 220, h: 80 },
              { x: 260, h: 60 },
              { x: 300, h: 30 },
              { x: 340, h: 70 },
              { x: 380, h: 50 },
              { x: 420, h: 90 },
              { x: 460, h: 60 },
              { x: 500, h: 30 },
              { x: 540, h: 80 },
              { x: 580, h: 40 },
            ].map(({ x, h }, index) => (
              <motion.rect
                key={index}
                x={x}
                y={h}
                width="20"
                height={120 - h}
                stroke="white"
                strokeWidth="2"
                initial={{ fill: "rgba(255, 255, 255, 0)" }}
                animate={{ fill: startFill ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)" }}
                transition={{
                  delay: startFill ? index * 0.1 : 0,
                  duration: 2,
                }}
              />
            ))}
          </motion.svg>
        </motion.div>
      )}
    </div>
  );
};

export default Loader;
