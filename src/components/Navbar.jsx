import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogIn } from "lucide-react";
import React from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-10 relative z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-hindi-orange font-bold text-2xl">हिंदी</span>
          <span className="text-hindi-blue font-bold text-xl">Safar</span>
          <span className="text-hindi-gold font-bold text-xl">Seekho</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {["Lessons", "Alphabet", "Practice", "Leaderboard"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="font-medium hover:text-hindi-orange transition-colors"
            >
              {item}
            </Link>
          ))}
          <div className="flex items-center space-x-2">
            <button className="border border-hindi-blue text-hindi-blue hover:bg-hindi-blue hover:text-white px-4 py-2 rounded-md">
              <LogIn className="mr-1 h-4 w-4 inline" /> Login
            </button>
            <button className="bg-hindi-orange hover:bg-orange-600 text-white px-4 py-2 rounded-md">
              <User className="mr-1 h-4 w-4 inline" /> Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-hindi-blue" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {["Lessons", "Alphabet", "Practice", "Leaderboard"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="font-medium hover:text-hindi-orange transition-colors py-2"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <button className="w-full border border-hindi-blue text-hindi-blue hover:bg-hindi-blue hover:text-white px-4 py-2 rounded-md">
                <LogIn className="mr-2 h-4 w-4 inline" /> Login
              </button>
              <button className="w-full bg-hindi-orange hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                <User className="mr-2 h-4 w-4 inline" /> Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
