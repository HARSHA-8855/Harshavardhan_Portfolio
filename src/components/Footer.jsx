import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" backdrop-blur-md text-center py-6">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/HARSHA-8855" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-gray-700 hover:text-black transition" />
        </a>
        <a href="https://www.linkedin.com/in/harsha-vandranki/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-[#0077B5] hover:scale-110 transition" />
        </a>
        <a href="mailto:harshavardhan.vandranki@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl text-red-500 hover:scale-110 transition" />
        </a>
        <a href="https://www.instagram.com/h_a_r_s_h_a_8_8_5_5_?igsh=MTNlbnhkdms3dmJwaw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl text-pink-600 hover:scale-110 transition" />
        </a>
        <a href="https://wa.me/your_number_here" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-2xl text-green-500 hover:scale-110 transition" />
        </a>
      </div>
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Harshavardan Vandranki</p>
    </footer>
  );
};

export default Footer;
