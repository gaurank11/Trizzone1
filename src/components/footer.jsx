import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const [selectedFirstCol, setSelectedFirstCol] = useState(null);
  const [selectedSecondCol, setSelectedSecondCol] = useState(null);
  const [language, setLanguage] = useState("ENGLISH");

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

  const toggleLanguage = () => {
    setLanguage(language === "ENGLISH" ? "HINDI" : "ENGLISH");
  };

  return (
    <div className="bg-black p-10 text-white relative">
      <div className="flex justify-between">
        {/* Left Expandable Menu */}
        <div className="flex space-x-5 md:space-x-28 text-[7px] md:text-xl">
          {/* First Column */}
          <div>
            <ul>
              {firstColumn.map((item) => (
                <motion.li
                  key={item}
                  className="cursor-pointer py-2 md:mx-8 hover:text-gray-400"
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

          {/* Second Column - Expandable */}
          {selectedFirstCol && secondColumnOptions[selectedFirstCol] && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="pl-4 border-l border-gray-500"
            >
              <ul>
                {secondColumnOptions[selectedFirstCol].map((item) => (
                  <motion.li
                    key={item}
                    className="cursor-pointer py-2 hover:text-gray-400"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSecondCol(item)}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Third Column - Expandable */}
          {selectedSecondCol && thirdColumnOptions[selectedSecondCol] && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="pl-4 border-l border-gray-500"
            >
              <ul>
                {thirdColumnOptions[selectedSecondCol].map((item) => (
                  <motion.li key={item} className="cursor-pointer py-2 hover:text-gray-400">
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

      


        {/* Right Section - Logo, Language & Social Media */}
        <div className="text-right space-y-4">
          <div className="text-sm md:text-2xl font-bold">TRIZZONE</div>
          <div className="flex justify-end space-x-4 text-xs md:text-xl">
            <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
          </div>
          <div>
            <span className="hover:text-gray-400 cursor-pointer text-sm md:text-md" onClick={toggleLanguage}>{language}</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="text-center text-gray-400 mt-6 border-t border-gray-400 pt-4 text-xs md:text-sm">
        © 2025 Copyright All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
