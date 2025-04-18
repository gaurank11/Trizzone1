import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current page is Properties
  const isPropertiesPage = location.pathname === "/properties";

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent p-5 flex justify-between items-center z-50">
      {/* Logo */}
      <Link to="/">
        <img
          src="/trizzone_logo.png"
          alt="Logo"
          className="h-12 w-auto"
          style={{  filter: isPropertiesPage ? "none" : "invert(1)" }}
        />
      </Link>

      {/* Burger Menu Button */}
      <button onClick={() => setMenuOpen(true)}>
        <Bars3Icon
          className={`w-8 h-8 ${isPropertiesPage ? "text-black" : "text-white"}`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-xl font-bold"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5">
            <XMarkIcon className="w-10 h-10 text-white" />
          </button>

          {/* Menu Links */}
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 text-white">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 text-white">About</Link>
          <Link to="/service" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 text-white">Services</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 text-white">Contact</Link>
        </motion.nav>
      )}
    </header>
  );
}
