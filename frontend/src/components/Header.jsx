import React from "react";

const Header = () => {
  return (
    <header className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
         
          <span className="text-2xl font-bold text-red-800">Ritaxes</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-red-600">
            Home
          </a>
          <a href="#" className="hover:text-red-600">
            About
          </a>
          <a href="#" className="hover:text-red-600">
            Services
          </a>
          <a href="#" className="hover:text-red-600">
            Pages
          </a>
          <a href="/contact" className="hover:text-red-600">
            Contact
          </a>
        </nav>

        {/* Contact Button */}
        <div>
          <a
            href="#"
            className="px-5 py-2 bg-red-700 text-white rounded-full hover:bg-red-800 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
