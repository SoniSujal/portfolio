import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from 'react-icons/fa'; // GitHub icon

const AcademicProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const projects = [
    {
      title: "Expense-Tracker",
      description: [
        "Web application for managing and tracking expenses.",
        "Backend built with Express.js for user authentication and CRUD operations.",
        "MongoDB used to store user data and expenses.",
        "React.js for dynamic content rendering and user interface updates."
      ],
      githubLink: "https://github.com/SoniSujal/Expense-Tracker",
      icon: <FaGithub />, // Add GitHub icon to the project
    },
    {
      title: "Travell-Management",
      description: [
        "Responsive travel blog website using HTML5, CSS, and JavaScript.",
        "Focused on frontend design with interactive elements.",
        "Showcases personal writing and web design skills.",
        "Visually appealing layouts and enhanced user experience."
      ],
      githubLink: "https://github.com/SoniSujal/Travell-Management",
      icon: <FaGithub />, // Add GitHub icon to the project
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-blue-100 to-blue-300 dark:from-darkBg dark:to-darkHover text-black dark:text-darkText">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">Academic Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-50 dark:bg-darkCard dark:hover:bg-darkHover"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
            <ul className="text-gray-600 mt-4 space-y-2">
              {project.description.map((point, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <i className="fas fa-check-circle text-blue-500 mt-1"></i>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={project.githubLink}
              className="mt-4 flex items-center justify-center text-white py-2 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.icon}
              <span className="ml-2">View Code on GitHub</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicProjects;
