import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaStethoscope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Apply saved theme or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const finalTheme = storedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(finalTheme);
    document.documentElement.classList.toggle("dark", finalTheme === "dark");
  }, []);

  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // // Theme toggle
  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  //   document.documentElement.classList.toggle("dark", newTheme === "dark");
  // };

  // Show navbar only on home route
  if (location.pathname !== "/") return null;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white dark:bg-neutral-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-primary">
          <div className="bg-primary p-2 rounded-full text-white">
            <FaStethoscope className="text-xl" />
          </div>
          <span className="text-lg font-bold text-gray-800 dark:text-white">MediConnect</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary">How It Works</a>
          <a href="#testimonials" className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary">Reviews</a>
          <a href="#pricing" className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary">Pricing</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme toggle */}
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            title="Toggle theme"
          >
            {theme === "light" ? (
              <FaSun className="text-yellow-500 text-lg" />
            ) : (
              <FaMoon className="text-blue-400 text-lg" />
            )}
          </button> */}

          {/* Auth buttons */}
          <div className="hidden md:flex space-x-2">
            <button className="px-4 py-1 rounded-md text-sm font-medium text-gray-800 dark:text-white hover:text-primary transition">
              Sign In
            </button>
            <button className="px-4 py-1 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          >
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 border-t bg-white dark:bg-gray-900">
          <a href="#features" className="block text-sm text-gray-700 dark:text-gray-300">Features</a>
          <a href="#how-it-works" className="block text-sm text-gray-700 dark:text-gray-300">How It Works</a>
          <a href="#testimonials" className="block text-sm text-gray-700 dark:text-gray-300">Reviews</a>
          <a href="#pricing" className="block text-sm text-gray-700 dark:text-gray-300">Pricing</a>
          <div className="pt-2 flex flex-col space-y-2">
            <button className="text-left px-4 py-1 rounded-md text-sm font-medium hover:text-primary transition">Sign In</button>
            <button className="text-left px-4 py-1 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
