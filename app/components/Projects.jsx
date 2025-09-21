"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image'; // Import the Image component

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "V Pass App",
      description: "Mobile App - Allows vehicle owners to manage their vehicle details and documents with NET File Manager Service Center center. \n\n Admin panel - Used to manage service centers, bookings, and other features. Built with NET, React (Next.js), Tailwind CSS.",
      image: "/VPassApp.jpg", // Ensure this file exists in the public folder
      deviceType: "laptop",
      githubUrl: "https://github.com/NeonCoders-UoM",
      liveUrl: "#",
      tags: ["Next.js","Flutter", "Tailwind CSS", "ASP.NET Core", "MS SQL"],
    },
    {
      id: 2,
      title: "Smart Soil Tracker",
      description: "A device designed to simplify and enhance modern farming. This AgriTech solution gives farmers real-time insights into the health of their soil. By offering an easy-to-understand summary of nutrient levels, the Smart Soil Tracker helps farmers make optimized data of resources that boost crop yields and sustainability.",
      image: "/SoilTracker.png", // Ensure this file exists in the public folder
      deviceType: "laptop",
      githubUrl: "https://github.com/nethmalgunawardhana/NPK-Data-Tracker",
      liveUrl: "https://npk-data-tracker-655de.web.app/",
      tags: ["Arduino", "Microcontrollers", "NPK Sensor", "Firestore", "React.js", "HTML", "CSS"],
    },
    
    {
      id: 3,
      title: "TripSuthra - National Tourism Solution",
      description: "Competition project - application to showcase travel suggestions. Managed the creation of a comprehensive plan to simplify in Sri Lanka. Includes an administrative dashboard for managing visas, an AI-powered chat bot for trip recommendations, as well as a trip data-rich interactive map.",
      image: "/TripSuthra.PNG", // Ensure this file exists in the public folder
      deviceType: "laptop",
      githubUrl: "https://github.com/ashiduDissanayake/TripSuthra",
      
      tags: ["Next.js", "Tailwind CSS", "Firebase", "AI", "SQL", "Tailwind CSS", "Gemini API"],
    },
    
    {
      id: 4,
      title: "Crossline",
      description: "E-commerce platform that we developed for Exports Tea, Herbals, spices  in Sri Lanka by using HTML,CSS, Java Script, PHP.",
      image: "/Crossline.PNG", // Updated to a valid path; replace with actual image if available
      deviceType: "laptop",
      
      liveUrl: "https://crosslinelk.com/", // Corrected to a valid path or remove if not a URL
      tags: ["React", "CSS", "JavaScript", "PHP", "WordPress"],
    },
    {
      id: 5,
      title: "Serenicraft Web Development Project",
      description: "E-commerce platform that we developed for handicrafts in Sri Lanka by using HTML,CSS, Java Script, PHP.",
      image: "/Serenicraft.PNG", // Ensure this file exists in the public folder
      deviceType: "laptop",
      githubUrl: "https://github.com/First-Year-Web-Technology-Project/SeriniCraft",
      liveUrl: "https://first-year-web-technology-project.github.io/SeriniCraft/",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      id: 6,
      title: "Personal Portfolio",
      description: " Developed a platform to showcase myself and my work. Built with Next.js, Tailwind CSS, and Framer Motion to ensure a responsive, modern, and interactive design",
      image: "/portfolio.png", // Updated to a valid path; replace with actual image if available
      deviceType: "laptop",
      githubUrl: "https://github.com/kin-lgtm/navindu-portfolio",
      liveUrl: "https://navindu-portfolio-lyart.vercel.app/", // Corrected to a valid path or remove if not a URL
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "email.js"],
    },
    {
      id: 7,
      title: "Renventure",
      description: "A platform for a company that progress through integrated solutions in energy, infrastructure, and strategic ventures.",
      image: "/renventure.PNG", // Updated to a valid path; replace with actual image if available
      deviceType: "laptop",
      
      liveUrl: "https://renventure.lk/", // Corrected to a valid path or remove if not a URL
      tags: ["React", "CSS", "SCSS", "Firebase" , "JavaScript"],
    },
  ];

  const DeviceMockup = ({ project }) => {
    if (project.deviceType === 'mobile') {
      return (
        <div id="projects" className="relative mx-auto">
          {/* Mobile Frame */}
          <div className="relative w-40 h-72 bg-gray-800 rounded-3xl p-2 shadow-2xl">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
              {/* Mobile Screen Content */}
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={160} // Adjusted to fit within w-40 (160px content area)
                height={320} // Adjusted to fit within h-72 (320px content area)
                className="object-cover w-full h-full"
              />
              {/* Mobile Notch */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div  id="projects" className="relative">
        {/* Laptop Frame */}
        <div className="relative w-full max-w-sm mx-auto">
          {/* Screen */}
          <div className="bg-gray-900 rounded-t-lg p-1">
            <div className="bg-white rounded-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={320} // Adjusted to fit within max-w-sm (e.g., 320px width)
                height={200} // Adjusted based on 16:10 aspect ratio
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Laptop Base */}
          <div className="w-full h-2 bg-gray-700 rounded-b-lg relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-8 h-1 bg-gray-600 rounded-t"></div>
          </div>
        </div>
      </div>
    );
  };

  // Animation variants (similar to About Me)
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

  return (
    <motion.div
      className="mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          My Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {/* Project Image/Mockup */}
            <div className="mb-6 relative">
              <DeviceMockup project={project} />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs bg-slate-700/70 text-blue-300 rounded-md border border-slate-600/50 hover:bg-slate-600/70 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href={project.githubUrl}
                  className="flex items-center justify-center w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors duration-300 group/btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href={project.liveUrl}
                  className="flex items-center justify-center w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors duration-300 group/btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Hover Border Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;