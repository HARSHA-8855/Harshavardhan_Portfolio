import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-28 pb-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side: Name + Typed text + description + buttons + social */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-center md:text-left text-white"
        >
          {/* Name */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
            Hello I'm <span className="text-black">Vandranki Harshavardhan</span>
          </h1>

          {/* Typed text */}
          <h2 className="text-base sm:text-lg md:text-2xl font-semibold leading-normal text-white">
            I am a{' '}
            <span className="text-black inline-block text-sm sm:text-base md:text-lg font-medium">
              <ReactTyped
                strings={[
                  'Web Developer',
                  'AI &amp; ML Explorer',
                  'Full-Stack Developer',
                  'Software Engineer'
                ]}
                typeSpeed={70}
                backSpeed={40}
                loop
                showCursor={true}
                cursorChar="|"
                smartBackspace={true}
              />
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-100 max-w-xl mx-auto md:mx-0">
            Where smooth design meets smart scalability.
          </p>

          {/* Resume Buttons */}
          <div className="flex flex-row flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2 rounded-xl shadow hover:bg-gray-800 transition"
            >
              View Resume
            </a>
            <a
              href="/resume.pdf"
              download
              className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
          </div>


          {/* Social Links */}
          <div className="flex gap-6 text-2xl sm:text-3xl text-white justify-center md:justify-start mt-4">
            <a
              href="https://github.com/HARSHA-8855"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/harsha-vandranki/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/h_a_r_s_h_a_8_8_5_5_?igsh=MTNlbnhkdms3dmJwaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Right side: Profile image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group">
            {/* Bottom glass layer */}
            <div className="absolute inset-0 rounded-[25px] rotate-[8deg] z-0 shadow-2xl scale-110 transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-[1.13] backdrop-blur-md bg-white/20 border border-white/30" />
            {/* Middle white layer */}
            <div className="absolute inset-0 bg-white rounded-[25px] rotate-[-8deg] z-10 shadow-md scale-105 transition-all duration-500 group-hover:rotate-[-10deg] group-hover:scale-[1.08]" />
            {/* Profile Image */}
            <motion.img
              whileHover={{ y: -6, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 120 }}
              src="/Harsha_linkden.jpg"
              alt="Profile"
              className="relative w-full h-full object-cover rounded-[25px] z-20 shadow-lg border-4 border-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
