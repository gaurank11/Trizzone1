import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const [selectedFirstCol, setSelectedFirstCol] = useState(null);
  const [selectedSecondCol, setSelectedSecondCol] = useState(null);

  const firstColumn = ["Practice", "Projects", "People", "Contact"];

  const secondColumnOptions = {
    Practice: ["Ethos", "Publications", "Awards"],
    Projects: ["Architecture", "Interior Design", "Landscape"],
    People: ["Team", "Leadership", "Careers"],
    Contact: ["Support", "Inquiry", "Location"],
  };

  const thirdColumnOptions = {
    Ethos: ["Mission", "Values"],
    Publications: ["Research", "Articles"],
    Awards: ["National", "International"],
    Architecture: ["Commercial", "Residential"],
    "Interior Design": ["Luxury Homes", "Hotels"],
    Landscape: ["Parks", "Urban Design"],
    Team: ["Designers", "Engineers"],
    Leadership: ["CEO", "Directors"],
    Careers: ["Open Positions", "Internships"],
    Support: ["FAQs", "Help Center"],
    Inquiry: ["Business", "General"],
    Location: ["Headquarters", "Branches"],
  };

  return (
    <div className="bg-black p-10 text-white relative">
      <div className="flex justify-between">
        {/* Left Section - Three Column Menu */}
        <div className="flex space-x-10">
          {/* First Column */}
          <div>
            <ul>
              {firstColumn.map((item) => (
                <motion.li
                  key={item}
                  className="cursor-pointer p-2 text-center bg-white text-black rounded-md mb-2 hover:bg-gray-300"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedFirstCol(item);
                    setSelectedSecondCol(null);
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Second Column (Animated Expansion) */}
          {selectedFirstCol && secondColumnOptions[selectedFirstCol] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-white text-black rounded-md shadow-lg"
            >
              <h3 className="font-bold">{selectedFirstCol}</h3>
              <ul>
                {secondColumnOptions[selectedFirstCol].map((item) => (
                  <motion.li
                    key={item}
                    className="cursor-pointer p-2 text-center bg-gray-200 rounded-md mt-2 hover:bg-gray-300"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSecondCol(item)}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Third Column (Animated Expansion) */}
          {selectedSecondCol && thirdColumnOptions[selectedSecondCol] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-white text-black rounded-md shadow-lg"
            >
              <h3 className="font-bold">{selectedSecondCol}</h3>
              <ul>
                {thirdColumnOptions[selectedSecondCol].map((item) => (
                  <motion.li
                    key={item}
                    className="p-2 text-center bg-gray-200 rounded-md mt-2 hover:bg-gray-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Right Section - Social Media Links */}
        <div className="text-right space-y-4">
          <div className="flex space-x-4 text-xl justify-end">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-gray-400" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="hover:text-gray-400" />
            </a>
          </div>
          <div>
            <span className="hover:text-gray-400 cursor-pointer">ENGLISH</span> |
            <span className="hover:text-gray-400 cursor-pointer"> 中文</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 mt-6">
        © 2025 Copyright All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
