"use client";

import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ message: '', isError: false });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !formData.subject || !formData.message) {
      setStatus({ message: 'All fields are required.', isError: true });
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setStatus({ message: 'Please enter a valid email address.', isError: true });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      to_email: 'navijaye@gmail.com',
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send('service_4o8a9ma', 'template_te779ov', templateParams, 'JbY4Of6_QqQoBZLbx')
      .then((response) => {
        setStatus({ message: 'Message sent successfully!', isError: false });
        setFormData({ email: '', subject: '', message: '' }); // Reset form
      })
      .catch((error) => {
        setStatus({ message: 'Failed to send message. Please try again.', isError: true });
        console.error('EmailJS error:', error);
      });
  };

  return (
    <div id="contact" className="mb-12 animate-fade-in">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Contact Me
        </h1>
      </div>

      {/* Contact Content */}
      <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8  transition-all duration-500  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section - Let's Connect */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-4">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed group-hover:text-blue-300 transition-colors duration-300">
                Don't hesitate to send me a message or an email. I will get back to you as fast as I can.
              </p>
            </div>

            {/* Email Section */}
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 group-hover:border-blue-400/50 transition-all duration-300">
              <Mail className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <a
                href="mailto:navijaye@gmail.com"
                className="text-gray-300 text-lg group-hover:text-blue-300 transition-colors duration-300"
              >
                navijaye@gmail.com
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="space-y-6">
            {/* Status Message */}
            {status.message && (
              <div className={`text-center p-2 rounded ${status.isError ? 'text-red-400' : 'text-green-400'}`}>
                {status.message}
              </div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                required
              />
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                required
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Let's talk about..."
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-blue-400 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg shadow-blue-500/25"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        
           </div>

      {/* Fade-in Animation */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;