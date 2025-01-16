import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo on the Left */}
        <h1 className="text-2xl font-bold text-white cursor-pointer">
          Sujal Soni 
        </h1>

        {/* Dark Mode Toggle in the Center */}
        <div
          className={`flex items-center justify-between w-24 h-10 bg-gray-200 dark:bg-gray-800 rounded-full px-1 cursor-pointer`}
          onClick={toggleDarkMode}
        >
          {/* Knob with Sun/Moon Icon */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full transform transition-transform duration-300 ${
              darkMode
                ? "translate-x-14 bg-gray-700"
                : "translate-x-0 bg-yellow-400"
            }`}
          >
            {darkMode ? <FaMoon className="text-white" /> : <FaSun className="text-white" />}
          </div>
        </div>

        {/* Hamburger Menu or Desktop Menu */}
        <div className="lg:flex hidden space-x-6 text-white text-lg">
          {["Projects", "CV", "Certifications", "Education", "Contact Me"].map((item) => (
            <Link
              key={item}
              to={item === "Contact Me" ? "contact" : item.toLowerCase().replace(" ", "-")}
              smooth={true}
              duration={500}
              className="hover:text-yellow-400 transition cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg z-50 transform transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          ✖
        </button>
        <ul className="flex flex-col mt-16 space-y-6 text-white text-lg text-center">
          {["Projects", "CV", "Certifications", "Education", "Contact Me"].map((item) => (
            <Link
              key={item}
              to={item === "Contact Me" ? "contact" : item.toLowerCase().replace(" ", "-")}
              smooth={true}
              duration={500}
              offset={-50} // Adjust for fixed navbar
              onClick={() => setMenuOpen(false)} // Close the menu on click
              className="hover:text-yellow-400 transition"
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
