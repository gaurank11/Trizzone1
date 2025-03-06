import React from "react";
import { motion } from "framer-motion";

const Contact_Hero = () => {
  return (
    <motion.section
      className="relative h-[270px] md:h-[95vh] flex items-center justify-center overflow-hidden"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ transformOrigin: "top" }} // Starts from a closed state (top)
    >
      {/* Lazy Loaded Hero Image */}
      <img
        src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Title */}
      <h1 className="relative text-3xl md:text-6xl text-white font-bold px-6 py-4 rounded-md">
        Contact Us
      </h1>
    </motion.section>
  );
};

export default Contact_Hero;
