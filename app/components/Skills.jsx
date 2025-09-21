"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    // Frontend Development
    { category: 'Frontend Development', name: 'HTML', icon: 'https://api.iconify.design/vscode-icons/file-type-html.svg', color: 'from-orange-500 to-red-500' },
    { category: 'Frontend Development', name: 'CSS', icon: 'https://api.iconify.design/vscode-icons/file-type-css.svg', color: 'from-blue-500 to-blue-600' },
    { category: 'Frontend Development', name: 'JavaScript', icon: 'https://api.iconify.design/vscode-icons/file-type-js-official.svg', color: 'from-yellow-400 to-yellow-500' },
    { category: 'Frontend Development', name: 'TypeScript', icon: 'https://api.iconify.design/vscode-icons/file-type-typescript-official.svg', color: 'from-blue-500 to-blue-600' },
    { category: 'Frontend Development', name: 'React.js', icon: 'https://api.iconify.design/vscode-icons/file-type-reactjs.svg', color: 'from-cyan-400 to-blue-500' },
    { category: 'Frontend Development', name: 'Next.js', icon: 'https://api.iconify.design/vscode-icons/file-type-light-next.svg', color: 'from-gray-500 to-gray-600' },
    { category: 'Frontend Development', name: 'Flutter', icon: 'https://api.iconify.design/vscode-icons/file-type-flutter.svg', color: 'from-blue-400 to-blue-500' },

    // Backend Development
    
    { category: 'Backend Development', name: 'C', icon: 'https://api.iconify.design/vscode-icons/file-type-c.svg', color: 'from-blue-500 to-blue-600' },
    { category: 'Backend Development', name: 'C#', icon: 'https://api.iconify.design/vscode-icons/file-type-csharp2.svg', color: 'from-purple-500 to-purple-600' },
      { category: 'Backend Development', name: 'ASP.NET Core', icon: 'https://api.iconify.design/vscode-icons/file-type-asp.svg', color: 'from-blue-500 to-blue-600' },
    { category: 'Backend Development', name: 'Java', icon: 'https://api.iconify.design/vscode-icons/file-type-java.svg', color: 'from-orange-500 to-red-500' },
    { category: 'Backend Development', name: 'PHP', icon: 'https://api.iconify.design/vscode-icons/file-type-php.svg', color: 'from-indigo-500 to-indigo-600' },
    { category: 'Backend Development', name: 'Laravel', icon: 'https://api.iconify.design/simple-icons/laravel.svg', color: 'from-red-500 to-red-600' },
    { category: 'Backend Development', name: 'Python', icon: 'https://api.iconify.design/vscode-icons/file-type-python.svg', color: 'from-yellow-400 to-yellow-500' },
    { category: 'Backend Development', name: 'Dart', icon: 'https://api.iconify.design/vscode-icons/file-type-dartlang.svg', color: 'from-blue-400 to-blue-500' },

    // Database & Cloud
    { category: 'Database & Cloud', name: 'MS SQL', icon: 'https://api.iconify.design/vscode-icons/file-type-sql.svg', color: 'from-gray-500 to-gray-600' },
    { category: 'Database & Cloud', name: 'MySQL', icon: 'https://api.iconify.design/vscode-icons/file-type-mysql.svg', color: 'from-teal-500 to-teal-600' },
    { category: 'Database & Cloud', name: 'Firebase', icon: 'https://api.iconify.design/vscode-icons/file-type-firebase.svg', color: 'from-yellow-500 to-red-500' },
  ];

  // Animation variants (same as About/Projects)
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

  // Section animation for each category
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Title */}
      <div id="skills" className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          My Skills
        </h1>
      </div>

      {/* Skills Sections */}
      {['Frontend Development', 'Backend Development', 'Database & Cloud'].map((category) => (
        <motion.div
          key={category}
          className="mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-white mb-12 text-left">
            {category}
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Skill Icon */}
                  <div className="mb-6 relative">
                    <div className="relative w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 hover:from-purple-400 hover:via-pink-500 hover:to-red-400 transition-all duration-500 hover:scale-110">
                      <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"
                          style={{
                            background: `linear-gradient(45deg, ${
                              skill.color.includes('orange')
                                ? '#f97316, #dc2626'
                                : skill.color.includes('blue')
                                ? '#3b82f6, #1d4ed8'
                                : skill.color.includes('yellow')
                                ? '#eab308, #ca8a04'
                                : skill.color.includes('cyan')
                                ? '#06b6d4, #0284c7'
                                : skill.color.includes('green')
                                ? '#10b981, #059669'
                                : skill.color.includes('red')
                                ? '#ef4444, #dc2626'
                                : skill.color.includes('teal')
                                ? '#14b8a6, #0f766e'
                                : '#8b5cf6, #7c3aed'
                            })`,
                          }}
                        />
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Skill Name */}
                  <div className="text-center">
                    <p className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>

                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                  
                  
                </div>
              ))}
          </div>
        </motion.div>
      ))}
  </motion.div>
  );
};

export default Skills;