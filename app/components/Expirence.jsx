"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [mounted, setMounted] = useState(false);

  const experiences = [
    {
      year: '2025',
      title: 'Associate Software Engineer - Intern',
      company: 'BuildUps Consultancy Private Limited',
      description: 'As an Associate Software Engineer Intern, I gained hands-on experience with diverse programming languages and development areas. I contributed to digital transformation and web development projects, supporting the design and optimization of enterprise applications while enhancing problem-solving skills, teamwork, and exposure to the full software development lifecycle.',
    },
    {
      year: '2024',
      title: 'Digital Transformation Strategist',
      company: 'BuildUps Consultancy Private Limited',
      description: 'As a Digital Transformation Strategist, I played a key role in guiding organizations through their digital transformation journeys. I collaborated with cross-functional teams to identify opportunities for leveraging technology to improve business processes and customer experiences. My work involved conducting assessments, developing roadmaps, and implementing solutions that drive innovation and efficiency.',
    },
    {
      year: '2021',
      title: 'Trainee',
      company: 'Peoples Bank - Kesbewa',
      description: 'Associated with the account handling section and get the opportunity to solve the problem of the customers daily. Apart from that i get the opportunity hands on digitalizing part beacuase most of the things are on the ledgers and books.',
    },
  ];

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('[data-timeline-item]');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      id="work"
      className="mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="text-center mb-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Professional Experience
        </motion.h1>
        <motion.p
          className="text-slate-400 text-lg max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          My journey through the world of software development
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="relative mb-16">
          {/* Glowing Line Animation */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-30 transform -translate-y-1/2"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
          />
          <div className="flex justify-between items-center relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center relative"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="w-0.5 h-12 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-50 mb-4"
                  initial={{ height: 0 }}
                  animate={{ height: '48px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />
                <motion.div
                  className="relative z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.1, duration: 0.6 }}
                >
                  <motion.div
                    className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white text-sm md:text-base shadow-2xl transition-all duration-500`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.year}
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-30"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.div>
                <motion.div
                  className="w-0.5 h-12 bg-gradient-to-b from-transparent via-purple-500 to-blue-500 opacity-50 mt-4"
                  initial={{ height: 0 }}
                  animate={{ height: '48px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-auto mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              data-timeline-item
              data-index={index}
              className="group bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.h2
                className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {exp.title}
              </motion.h2>
              <motion.h3
                className="text-base md:text-lg font-semibold text-blue-400 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {exp.company}
              </motion.h3>
              <motion.p
                className="text-slate-300 leading-relaxed text-sm line-clamp-6"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              >
                {exp.description}
              </motion.p>
              <motion.div
                className="mt-6 flex justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="w-2 h-2 bg-purple-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
                <motion.div
                  className="w-2 h-2 bg-cyan-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0"
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {mounted && (
        <motion.div
          className="fixed inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1 + Math.random(), delay: Math.random() * 2 }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Experience;