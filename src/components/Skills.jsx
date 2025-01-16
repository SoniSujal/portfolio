import React, { useEffect } from "react";
import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaCuttlefish, FaDatabase } from "react-icons/fa"; // Add other icons
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS for animations

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing function
      once: true  // Run animation only once
    });
  }, []);

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-darkBg text-black dark:text-darkText">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Skills</h2>
        
        {/* Programming Languages */}
        <div className="mt-8" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-blue-500">Programming Languages</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <FaJava className="text-4xl text-orange-500" />
              <p className="mt-2">Java</p>
            </div>
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <FaPython className="text-4xl text-yellow-400" />
              <p className="mt-2">Python</p>
            </div>
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <FaCuttlefish className="text-4xl text-gray-700" />
              <p className="mt-2">C</p>
            </div>
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <FaHtml5 className="text-4xl text-red-500" />
              <p className="mt-2">JavaScript</p>
            </div>
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="mt-12" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-green-500">Backend Technologies</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <FaNodeJs className="text-4xl text-green-500" />
              <p className="mt-2">Node.js</p>
            </div>
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <FaDatabase className="text-4xl text-blue-700" />
              <p className="mt-2">Spring Boot</p>
            </div>
          </div>
        </div>

        {/* Frontend Technologies */}
        <div className="mt-12" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-blue-500">Frontend Technologies</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <FaReact className="text-4xl text-blue-500" />
              <p className="mt-2">React</p>
            </div>
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <FaHtml5 className="text-4xl text-red-500" />
              <p className="mt-2">HTML</p>
            </div>
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <FaCss3Alt className="text-4xl text-blue-400" />
              <p className="mt-2">CSS</p>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="mt-12" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-purple-500">Databases</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <FaDatabase className="text-4xl text-blue-700" />
              <p className="mt-2">MySQL</p>
            </div>
            <div className="flex flex-col items-center hover:scale-105 transition-all">
              <FaDatabase className="text-4xl text-green-500" />
              <p className="mt-2">MongoDB</p>
            </div>
          </div>
        </div>

        {/* Other Skills */}
        <div className="mt-12" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-indigo-500">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            <div className="text-lg font-semibold">Data Structures</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
