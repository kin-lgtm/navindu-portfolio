"use client";

import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm w-full fixed px-4 sm:px-6 lg:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50">
      {/* Logo */}
      <a href="#"><h1 className="w-24 text-center text-lg text-blue-400 font-regular border border-blue-400 rounded hover:border-white p-2">Home</h1></a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-4 lg:gap-6  px-8 sm:px-10 lg:px-12 py-2 sm:py-3 text-white">
        <li>
          <a className="font-Ovo text-sm sm:text-base hover:text-blue-300 transition-colors duration-300" href="#about">
            About me
          </a>
        </li>
        <li>
          <a className="font-Ovo text-sm sm:text-base hover:text-blue-300 transition-colors duration-300" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="font-Ovo text-sm sm:text-base hover:text-blue-300 transition-colors duration-300" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="font-Ovo text-sm sm:text-base hover:text-blue-300 transition-colors duration-300" href="#work">
            Work Experience
          </a>
        </li>
        <li>
          <a className="font-Ovo text-sm sm:text-base hover:text-blue-300 transition-colors duration-300" href="#extra">
            Extra Curricular
          </a>
        </li>
      </ul>

      {/* Desktop Contact Button */}
      <div className="hidden lg:flex">
        <a
          href="#contact"
          className="text-white flex items-center gap-2 px-6 sm:px-8 lg:px-10 py-2 sm:py-2.5 border border-blue-400/50 rounded-full hover:border-blue-300 hover:bg-blue-400/20 transition-all duration-300"
        >
          Contact
          <Image
            src={assets.arrow_icon || '/images/arrow-icon.png'}
            className="w-2.5 sm:w-3"
            alt="Arrow"
            width={12}
            height={12}
          />
        </a>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-800/90 backdrop-blur-sm text-white flex flex-col items-center gap-4 py-6 z-40 animate-slide-in">
          <a
            className="font-Ovo text-base hover:text-blue-300 transition-colors duration-300"
            href="#"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            className="font-Ovo text-base hover:text-blue-300 transition-colors duration-300"
            href="#about"
            onClick={toggleMenu}
          >
            About me
          </a>
          <a
            className="font-Ovo text-base hover:text-blue-300 transition-colors duration-300"
            href="#skills"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            className="font-Ovo text-base hover:text-blue-300 transition-colors duration-300"
            href="#projects"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            className="font-Ovo text-base hover:text-blue-300 transition-colors duration-300"
            href="#work"
            onClick={toggleMenu}
          >
            Work Experience
          </a>
          <a
            className="font-Ovo text-base hover:text-blue-300 transition-colors duration-300"
            href="#extra"
            onClick={toggleMenu}
          >
            Extra Curricular
          </a>
          <a
            href="#contact"
            className="text-white flex items-center gap-2 px-6 py-2 border border-blue-400/50 rounded-full hover:border-blue-300 hover:bg-blue-400/20 transition-all duration-300"
            onClick={toggleMenu}
          >
            Contact
            <Image
              src={assets.arrow_icon || '/images/arrow-icon.png'}
              className="w-3"
              alt="Arrow"
              width={12}
              height={12}
            />
          </a>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;