"use client";


// Clean up old comets less frequently for slower comets
  

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/about-me';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import WorkExperience from '../components/Expirence';
import Extracurricular from '../components/Extracurricular';

const HomePage = () => {
  const [stars, setStars] = useState([]);
  const [comets, setComets] = useState([]);
  useEffect(() => {
    const cleanup = setInterval(() => {
      setComets(prevComets => prevComets.slice(-40)); // Keep only last 40 comets
    }, 6000); // Clean up every 6 seconds

    return () => clearInterval(cleanup);
  }, []);

  useEffect(() => {
    // Generate stars
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 24 + 4,
      color: ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#06b6d4'][Math.floor(Math.random() * 5)],
      delay: Math.random() * 2,
    }));
    setStars(newStars);

    // Generate slower, more graceful comet rain
    const generateComets = () => {
      const newComets = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i + Math.random(), // Ensure unique IDs
        startX: Math.random() * 100, // Random horizontal position
        delay: Math.random() * 2, // Delay up to 2 seconds for staggering
        speed: Math.random() * 3 + 6, // 6-9 seconds duration (much slower)
        trailLength: Math.random() * 80 + 100, // 100-180px trail length
      }));
      return newComets;
    };

    setComets(generateComets());

    // Generate new comets every 4 seconds for graceful timing
    const interval = setInterval(() => {
      setComets(prev => [...prev, ...generateComets()]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: star.delay,
          }}
        />
      ))}

      {/* Realistic Comet Rain */}
      {comets.map((comet) => (
        <motion.div
          key={comet.id}
          className="fixed pointer-events-none"
          style={{
            width: '200px',
            height: '8px',
            zIndex: 99999, // Even higher z-index
          }}
          initial={{
            x: `${comet.startX}vw`,
            y: '-100px', // Start higher above screen
            opacity: 0,
          }}
          animate={{
            x: `${comet.startX + 15}vw`, // Gentler diagonal movement
            y: 'calc(100vh + 100px)', // End lower below screen
            opacity: [0, 0.8, 1, 1, 1, 0.8, 0], // More gradual fade
          }}
          transition={{
            duration: comet.speed, // Now 6-9 seconds
            delay: comet.delay,
            ease: 'linear',
            opacity: {
              times: [0, 0.1, 0.2, 0.4, 0.7, 0.9, 1], // Smooth fade in and out
            }
          }}
        >
          {/* Comet Trail */}
          <div
            className="absolute"
            style={{
              width: `${comet.trailLength}px`,
              height: '4px', // Slightly thicker
              background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.5) 20%, rgba(0, 255, 255, 0.9) 60%, rgba(255, 255, 255, 1) 100%)',
              transform: 'rotate(-25deg)', // Slightly less steep
              transformOrigin: 'right center',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.7), 0 0 40px rgba(0, 255, 255, 0.3)',
              borderRadius: '2px',
            }}
          />
          
          {/* Comet Head */}
          <div
            className="absolute rounded-full"
            style={{
              right: '-4px',
              top: '-3px',
              width: '10px',
              height: '10px',
              background: 'radial-gradient(circle, #ffffff 0%, #00ffff 60%, rgba(0, 255, 255, 0.3) 100%)',
              boxShadow: '0 0 25px #00ffff, 0 0 45px rgba(255, 255, 255, 0.9), 0 0 60px rgba(0, 255, 255, 0.5)',
            }}
          />
          
          {/* Secondary Glow */}
          <div
            className="absolute"
            style={{
              width: `${comet.trailLength * 0.7}px`,
              height: '8px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.5) 100%)',
              transform: 'rotate(-25deg)',
              transformOrigin: 'right center',
              top: '-2px',
              filter: 'blur(2px)',
            }}
          />
        </motion.div>
      ))}

      {/* Background Grid Lines */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>

      {/* Main Content */}
      <Navbar />
      <div className="relative z-0 mx-auto px-8 py-16">        
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