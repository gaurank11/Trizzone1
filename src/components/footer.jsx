import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-black  p-10 text-white flex flex-col space-y-4">
      {/* Main Sections in Row */}
      <div className="flex items-start space-x-10">
        {/* PRACTICE */}
        <div>
          <h3
            className="font-bold cursor-pointer hover:text-gray-500"
            onClick={() => toggleSection("practice")}
          >
            PRACTICE
          </h3>
          <h3
            className="font-bold cursor-pointer hover:text-gray-500"
            onClick={() => toggleSection("practice")}
          >
            PRACTICE
          </h3>
          <h3
            className="font-bold cursor-pointer hover:text-gray-500"
            onClick={() => toggleSection("practice")}
          >
            PRACTICE
          </h3>
          <h3
            className="font-bold cursor-pointer hover:text-gray-500"
            onClick={() => toggleSection("services")}
          >
            Services
          </h3>
          
        </div>

    

        {/* SERVICES */}
        {openSection === "services" && (
          <>
            <div>
              <p className="hover:text-gray-500 cursor-pointer">ETHOS</p>
              <p className="hover:text-gray-500 cursor-pointer">PUBLICATIONS</p>
              <p className="hover:text-gray-500 cursor-pointer">AWARDS</p>

              {/* ARCHITECTURE Expand */}
              <h3
                className="font-bold cursor-pointer mt-3 hover:text-gray-500"
                onClick={() => toggleSection("architecture")}
              >
                ARCHITECTURE
              </h3>
            </div>

            {/* Vertical Line Separator */}
            <div className="w-px h-full bg-gray-500"></div>
          </>
        )}

        {/* ARCHITECTURE */}
        {openSection === "architecture" && (
          <div>
            <p className="hover:text-gray-500 cursor-pointer">INTERIOR DESIGN</p>
            <p className="hover:text-gray-500 cursor-pointer">LANDSCAPE</p>
            <p className="hover:text-gray-500 cursor-pointer">MASTER PLANNING</p>
            <p className="hover:text-gray-500 cursor-pointer">COMMERCIAL</p>
            <p className="hover:text-gray-500 cursor-pointer">HOSPITALITY</p>
            <p className="hover:text-gray-500 cursor-pointer">RESIDENTIAL</p>
          </div>
        )}
      </div>

      {/* Social Media & Language */}
      <div className=" flex flex-col items-end">
        <h2 className="mb-5 text-xl font-bold "> TRIZZONE</h2>
        <div className="flex space-x-4 text-xl">
          <FaFacebook className="hover:text-gray-500 cursor-pointer" />
          <FaLinkedin className="hover:text-gray-500 cursor-pointer" />
          <FaInstagram className="hover:text-gray-500 cursor-pointer" />
          <FaPinterest className="hover:text-gray-500 cursor-pointer" />
        </div>
        <div className="mt-4">
          <span className="hover:text-gray-500 cursor-pointer">ENGLISH</span> |
          <span className="hover:text-gray-500 cursor-pointer"> 中文</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
