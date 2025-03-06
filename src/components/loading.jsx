import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();
  const text = "rizzone"; // The text that appears letter by letter
  const [showReverse, setShowReverse] = useState(false);

  useEffect(() => {
    const revealTime = 1000 + text.length * 300 + 1000; // 1s for T + (letters appearing) + 1s hold
    const reverseTime = revealTime + text.length * 300; // (letters disappearing)

    setTimeout(() => setShowReverse(true), revealTime);
    setTimeout(() => navigate("/home"), reverseTime + 1000); // Navigate after full animation
  }, [navigate, text]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white text-6xl md:text-[140px] font-bold">
      {/* "T" stays always */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        T
      </motion.span>
      
      {/* Reveal rizzone letter by letter */}
      {!showReverse &&
        text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + 0.3 * index, duration: 0.3 }}
          >
            {char}
          </motion.span>
        ))}

      {/* Reverse animation: remove rizzone letter by letter */}
      {showReverse &&
        text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.3 * (text.length - index), duration: 0.3 }}
          >
            {char}
          </motion.span>
        ))}
    </div>
  );
};

export default Loader;
