"use client";

import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Header = () => {
  // Typewriter effect for two-line header text
  const line1 = "Hello I'm";
  const line2 = "Navindu Prabath Jayalath";
  const [displayedLine1, setDisplayedLine1] = useState("");
  const [displayedLine2, setDisplayedLine2] = useState("");
  useEffect(() => {
    let currentIndex = 0;
    let typingLine = 1;
    let timeout;
    let isMounted = true;
    function type() {
      if (!isMounted) return;
      if (typingLine === 1) {
        if (currentIndex <= line1.length) {
          setDisplayedLine1(line1.slice(0, currentIndex));
          setDisplayedLine2("");
          currentIndex++;
          timeout = setTimeout(type, 90);
        } else {
          typingLine = 2;
          currentIndex = 0;
          timeout = setTimeout(type, 350);
        }
      } else if (typingLine === 2) {
        if (currentIndex <= line2.length) {
          setDisplayedLine2(line2.slice(0, currentIndex));
          currentIndex++;
          timeout = setTimeout(type, 90);
        } else {
          setTimeout(() => {
            if (!isMounted) return;
            setDisplayedLine1("");
            setDisplayedLine2("");
            typingLine = 1;
            currentIndex = 0;
            setTimeout(type, 700);
          }, 1200);
        }
      }
    }
    type();
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);
  return (
    <header className="py-8 sm:py-12 text-white flex items-center justify-center px-4 sm:px-6 mb-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
              Full Stack Developer
            </p>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="typewriter-text">
                {displayedLine1}
                {displayedLine1 && <span className="typewriter-cursor">|</span>}
              </span>
              <br />
              <span className="text-blue-400 block mt-1 sm:mt-2 typewriter-text">
                {displayedLine2}
                {!displayedLine1 && displayedLine2 && <span className="typewriter-cursor">|</span>}
              </span>
            </h1>
          </div>
          
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a href="https://github.com/kin-lgtm" className="bg-blue-400 hover:bg-blue-400 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              DOWNLOAD CV ↓
            </a>
            
            <div className="flex space-x-3">
              <a href="https://github.com/kin-lgtm" className="bg-slate-800SSS w-8 sm:w-10 h-8 sm:h-10 border-2 border-slate-600 hover:border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-400/20">
                <Github size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="http://www.linkedin.com/in/navindu-prabath-jayalath" className="bg-slate-800 w-8 sm:w-10 h-8 sm:h-10 border-2 border-slate-600 hover:border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-400/20">
                <Linkedin size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="navijaye@gmail.com" className="bg-slate-800 w-8 sm:w-10 h-8 sm:h-10 border-2 border-slate-600 hover:border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-400/20">
                <Mail size={16} className="sm:w-5 sm:h-5" />
              </a>
              
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image with Animation */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Animated Border Circle */}
            <div className="absolute inset-1 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full border-4 border-transparent animate-spin-medium">
              <div className="w-full h-full rounded-full border-dashed border-blue-400 border-3 sm:border-4"></div>
            </div>
            
            {/* Static Dashed Circle */}
            <div className="absolute inset-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full border-3 sm:border-4 border-dashed border-blue-400"></div>
            
            {/* Profile Image Container */}
            <div className="relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 mx-auto overflow-hidden bg-slate-800 flex items-center justify-center rounded-full group">
              <Image
                src={assets.navindu || '/navindu.png'}
                alt="Profile Image"
                width={360}
                height={360}
                className="w-[90%] h-[90%] object-cover rounded-full border-2 border-blue-500/50 group-hover:border-blue-300 transition-all duration-300"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-blue-400 rounded-full animate-bounce delay-100"></div>
            <div className="absolute top-1/4 -left-4 sm:-left-6 w-3 sm:w-4 h-3 sm:h-4 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-1/4 -right-6 sm:-right-8 w-4 sm:w-6 h-4 sm:h-6 bg-blue-400/50 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .typewriter-text {
          display: inline-block;
          min-width: 1ch;
          letter-spacing: 0.02em;
        }
        .typewriter-cursor {
          display: inline-block;
          width: 1ch;
          color: #60a5fa;
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes spin-medium {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-medium {
          animation: spin-medium 10s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;