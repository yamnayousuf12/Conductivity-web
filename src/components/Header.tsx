

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaSun as Sun, FaMoon as Moon, FaBars as Bars, FaTimes as Close } from "react-icons/fa";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("theme") === "dark";
    setIsDarkMode(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white dark:bg-[#535050] text-darkBlue dark:text-white py-4 px-8 flex justify-between items-center shadow-md z-50"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-center w-52 h-70 px-2 ml-3"
      >
        <Image src="/Capture.png" alt="Conductivity Logo" width={250} height={100} priority />
      </motion.div>

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:flex"
      >
        <ul className="flex space-x-6 items-center">
          {["Home", "About", "Services", "Team", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="hover:text-orange-400 font-semibold"
            >
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}

          {/* Dark mode toggle */}
          <li>
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className={`ml-4 w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${
                isDarkMode ? "bg-gray" : "bg-yellow"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-sm ${
                  isDarkMode ? "translate-x-6 bg-white text-gray" : "translate-x-0 bg-white text-yellow"
                }`}
              >
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </div>
            </button>
          </li>
        </ul>
      </motion.nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-2xl">
          {menuOpen ? <Close /> : <Bars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.5 }}
          className="absolute top-20 left-0 w-full bg-white dark:bg-[#535050] flex flex-col items-center gap-6 py-6 shadow-md md:hidden"
        >
          {["Home", "About", "Services", "Team", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange font-semibold text-lg"
            >
              {item}
            </a>
          ))}
          {/* Dark Mode Toggle inside mobile menu */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${
              isDarkMode ? "bg-gray" : "bg-yellow"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-sm ${
                isDarkMode ? "translate-x-6 bg-white text-gray" : "translate-x-0 bg-white text-yellow"
              }`}
            >
              {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </div>
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
