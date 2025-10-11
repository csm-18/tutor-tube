import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Nav({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-black w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo (Your original code) */}
          <div className="flex-shrink-0">
            <Link to="/">
              {theme === "dark" ? (
                <img
                  className="h-[3.5rem] md:h-[4rem]"
                  src="logo3_transparent_white_text.png"
                  alt="logo"
                />
              ) : (
                <img
                  className="h-[3.5rem] md:h-[4rem]"
                  src="logo3_transparent.png"
                  alt="logo"
                />
              )}
            </Link>
          </div>

          {/* Centered Desktop Navigation Links (Your Links) */}
          <div className="hidden md:flex md:items-center md:space-x-8 font-baloo">
            
            <Link className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" to="/">
              Home
            </Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" to="/courses">
              Courses
            </Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" to="/autocourse">
              Auto Course Builder
            </Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" to="/about">
              About
            </Link>
           
          </div>

          {/* Right side Actions: Theme Toggle + CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <Link
              to="/" // Change this link to wherever you want
              className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-2 text-center font-baloo">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
             <Link
              to="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Courses
            </Link>
            <Link
              to="/autocourse"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Auto Course Builder
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
           
            <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
            <div className="flex justify-center py-2">
                <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;