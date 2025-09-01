"use client";

import React, { useState, useEffect } from 'react';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/about-me';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import WorkExperience from '../components/Expirence';
import Extracurricular from '../components/Extracurricular';

const HomePage = () => {
  const [particles, setParticles] = useState([]);

  // Generate particles only on the client side
  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#06b6d4'][Math.floor(Math.random() * 5)],
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: 0.6,
            animationDelay: `${particle.delay}s`,
            animationDuration: '3s',
          }}
        />
      ))}

      {/* Background Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-40 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
      <div
        className="absolute bottom-20 left-40 w-2 h-2 bg-yellow-400 rounded-full animate-ping"
        style={{ animationDelay: '1s' }}
      ></div>

      {/* Main Content */}
      <Navbar />
      <div className="relative z-10 mx-auto px-8 py-16">        
        <Header />
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <Extracurricular />
        <Contact />
        
      </div>
    </div>
  );
};

export default HomePage;