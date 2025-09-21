"use client";

import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Image from 'next/image';
import { assets } from '@/assets/assets';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const statVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      id="about"
      className="mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          variants={itemVariants}
        >
          About Me
        </motion.h1>
      </motion.div>
      
      {/* Title */}
      <motion.div
        className="bg-gray-800/50 p-12 rounded-md mb-6"
        variants={itemVariants}
      >
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <motion.li
            className="group-hover:text-blue-300 transition-colors duration-300"
            variants={itemVariants}
          >
            I am an IT undergraduate at the University of Moratuwa, specializing in Software Engineering and keen to learn Artificial Intelligence and Data Science and related areas.
          </motion.li>
          <motion.li
            className="group-hover:text-blue-300 transition-colors duration-300"
            variants={itemVariants}
          >
            I enjoy combining creativity with technology to design meaningful user experiences and develop efficient, scalable systems.
          </motion.li>
          <motion.li
            className="group-hover:text-blue-300 transition-colors duration-300"
            variants={itemVariants}
          >
            My interests also extend to Data Science and Cloud Computing, and I am eager to enhance my expertise through hands-on projects while contributing to innovative and impactful solutions.
          </motion.li>
        </ul>
      </motion.div>

      {/* About Content */}
      <motion.div
        className="group relative backdrop-blur-sm rounded-2xl p-4"
        variants={itemVariants}
      >
        <div className="flex items-start gap-6">
          <div className="flex-1">
            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
              variants={itemVariants}
            >
              <motion.div
                className="bg-gray-800/50 p-4 rounded-md border border-blue-400"
                variants={statVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.p
                  className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  variants={itemVariants}
                >
                  2+
                </motion.p>
                <motion.p className="text-gray-300" variants={itemVariants}>
                  Years Coding
                </motion.p>
              </motion.div>
              <motion.div
                className="bg-gray-800/50 p-4 rounded-md border border-blue-400"
                variants={statVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.p
                  className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  variants={itemVariants}
                >
                  5+
                </motion.p>
                <motion.p className="text-gray-300" variants={itemVariants}>
                  Projects
                </motion.p>
              </motion.div>
              <motion.div
                className="bg-gray-800/50 p-4 rounded-md border border-blue-400"
                variants={statVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.p
                  className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  variants={itemVariants}
                >
                  5+
                </motion.p>
                <motion.p className="text-gray-300" variants={itemVariants}>
                  Tech Stacks
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hover Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0"
          animate={{ opacity: 1 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default About;