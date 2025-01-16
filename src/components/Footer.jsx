import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-10 bg-gray-800 text-white text-center"
    >
      <div className="mb-6">
        <p className="text-lg">
          Contact me at:{" "}
          <a
            href="mailto:sujalsoni1768@gmail.com"
            className="text-yellow-400 hover:underline"
          >
            sujalsoni1768@gmail.com
          </a>{" "}
          | Phone:{" "}
          <a
            href="tel:+8780290182"
            className="text-yellow-400 hover:underline"
          >
            +91 8780290182
          </a>
        </p>
      </div>
      <div className="flex justify-center gap-8 mb-6">
        <a
          href="https://github.com/SoniSujal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/sujal-soni-240661240/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="mailto:sujalsoni1768@gmail.com"
          className="text-white hover:text-yellow-400 transition"
        >
          <FaEnvelope size={30} />
        </a>
        <a
          href="https://leetcode.com/u/Sujal_Soni/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition"
        >
          <FaCode size={30} />
        </a>
      </div>
      <p className="mt-4 text-sm">&copy; 2025 Sujal Soni. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
