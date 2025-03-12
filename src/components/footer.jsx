import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const [selectedFirstCol, setSelectedFirstCol] = useState(null);
  const [selectedSecondCol, setSelectedSecondCol] = useState(null);

  // Static first column
  const firstColumn = ["Practice", "Projects", "People", "Contact"];

  // Dynamic second column options based on first column selection
  const secondColumnOptions = {
    Practice: ["Ethos", "Publications", "Awards"],
    Projects: ["Architecture", "Interior Design", "Landscape"],
    People: ["Team", "Leadership", "Careers"],
    Contact: ["Support", "Inquiry", "Location"],
  };

  // Dynamic third column options based on second column selection
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
        <div className="flex space-x-16">
          {/* First Column */}
          <div>
            <ul>
              {firstColumn.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-gray-400"
                  onClick={() => {
                    setSelectedFirstCol(item);
                    setSelectedSecondCol(null); // Reset third column
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Second Column (Appears when first column is clicked) */}
          {selectedFirstCol && secondColumnOptions[selectedFirstCol] && (
            <div>
              <h3 className="font-bold">{selectedFirstCol}</h3>
              <ul>
                {secondColumnOptions[selectedFirstCol].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-gray-400"
                    onClick={() => setSelectedSecondCol(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Third Column (Appears when second column is clicked) */}
          {selectedSecondCol && thirdColumnOptions[selectedSecondCol] && (
            <div>
              <h3 className="font-bold">{selectedSecondCol}</h3>
              <ul>
                {thirdColumnOptions[selectedSecondCol].map((item) => (
                  <li key={item} className="hover:text-gray-400">{item}</li>
                ))}
              </ul>
            </div>
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