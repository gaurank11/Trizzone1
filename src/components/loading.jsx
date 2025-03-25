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
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPhrase(true), 1000);
    setTimeout(() => setShowPhrase(false), 4000);
    setTimeout(() => setShowCityscape(true), 0);
    setTimeout(() => setShowText(true), 4500);
    setTimeout(() => setShowCurtain(true), 5800);

    setTimeout(() => {
      navigate("/");
    }, 6000);
  }, [navigate]);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-[70px] md:text-[280px] font-bold relative">
      {/* "T" moves to the left, then reverses */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: showText ? -10 : 0 }}
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
        {["Architectures.", "Interiors.", "Landscape."].map((word, index) => (
          <motion.div
            key={index}
            className="text-xl md:text-4xl"
            initial={{ opacity: 0 }}
            animate={showPhrase ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              delay: showPhrase ? index * 1 : 0,
              duration: showPhrase ? 0.5 : 0.5,
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Cityscape SVG Animation */}
     {showCityscape && (
  <motion.div className="flex justify-center items-center w-full">
    <motion.svg
      viewBox="0 0 2048 512"
      width="800"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
    <motion.path
        d="M1215 93l3 3 12 38 2 10 1 29 8 4 2 3 1 58 6 4 2 4v81h3v-88h8v-17h55v17h8v84h11l-1-75-2-2v-7l11-1 1-7 6-1v-33l-2-2-1-5 2-2h5l2-4h10l1-23 2-30h2l1 2 3 50 10 1 2 4 5 1 1 1v5l-2 1-1 35h8v8h10l1 1v6l-2 2-1 75h10l3 10h4l1 68h10l1 1v10h10v-163l2-6 6-3 1-61 10-4 1-34 27-15 3-2h3l1 50 9 5 1 1 1 59 8 6v76l8 1 12 3 1 1v10h7l1 92 13 8 1-191 7-1 1-33 1-1h7v-16l7-8 14-14 7 6 12 12 3 5v15h7l1 1 1 33 6 1 1 15v181l9-2h5v10h8v-209l1-1h8v-17h54v17h8l1 1 1 90 21 9 6 3v10h48v-19h18v-10h23v10h17v124l15-9h3l4-7 5-3h8l5 3 4 4 3 10 4 6v8l-3 5 3 1 1 20 21 1-1-10-6-4-4-7-1-12 3-12 6-12 4-4 6 8 5 12 2 4 4-9 5-8 4 1 6 8 4 10v15l-4 6-4 3h-2v11h82v16h-2048v-16h85l-1-10-6-4-5-8v-11l3-8 7-8 4-1 5 4 5 8 1 4v12l-4 7-5 4h-2v11h21l-1-16-7-14v-14l6-8 1-1 1-91h51v-19h29l2-8 1-2h18l4 9 4 2v104l14-1 1-159 1-1h7v-43l18 4 31 9 1 3v26l1-54h11v-12l11-1 1-17 19-13 11-8 7 4 16 12 8 5v18l10-1 2 1v12h11l1 16 13-3h3l1 42 7 1 1 170h5l1-203h7v-35h9v-17l11-12 9-9 7 6 15 15 1 17h7l1 34 7 1v40h29v-49h35v-42l3-3 20-14 9-5 16 12 13 9 1 17h11l1 7v5l10 1 1 43h2v-9l7-1v-20h8v20l7 1v7l7 1 1 1v8h5l1 12 5 3v11h8l1 5v11l8 1 20 5v-97l8-4 3-12 4-15 4-1 3-5 8-5 4-6 1-21h7l1 20 3 5 5 5 6 3 1 5h5l5 24v3l6 2 3 2v14l10 2 22 6 3 2v29h2v-24l10-50 2-5h8v-19l6-1 1-13 2-12 4-1 1-22 5-1 1-8 4-1 2 2 1 5-4 2h6v-9l5 1-1 9h6l1 1 1 20 3 1 5 26 5 1 1 19h7l2 5 3 16v-24l-2-1v-6l7-2 1-3h10l1-25 2-26 3-1 3 52h11v5l12-7 14-10 11 7 14 10 6 4v17h11l1 1v12h11v55h4v-43l11 2 29 8h4l5-6 2-1 1-58 6-6 4-1 1-31 14-45 2-3h2l12 36 3 11 1 32 7 3 3 3h5l2-4 3-19 4-4 1-21h6v-9l5-1 1 1v8h2l1-8 4-1 2 4-3 1 3 4 5 1 12-37z"
        stroke="white"
        strokeWidth="3"
        fill="transparent"
        initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
        animate={{ pathLength: 1, fill: "rgba(255, 255, 255, 1)" }}
        transition={{ duration: 3, ease: "easeInOut", fill: { delay: 3, duration: 4 } }}
      />
    </motion.svg>
  </motion.div>
)}

 {/* Curtain Transition Effect */}
 {showCurtain && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full bg-black z-50"
        />
      )}
    </div>
  );
};

export default Loader;
