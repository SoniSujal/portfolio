import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationalBackground = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const education = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Engineering",
      institution: "L.J Institute Of Engineering & Technology",
      graduationYear: "2025",
      percentage: 75, // Percentage as a grade for ongoing education
    },
    {
      degree: "Higher Secondary Education",
      field: "Science",
      institution: "Shree Gayatri High School",
      graduationYear: "2021",
      percentage: 80.66, // Actual completed education with passing percentage
    },
    {
      degree: "Secondary Education",
      field: "10th",
      institution: "Shree Sadguru High School",
      graduationYear: "2019",
      percentage: 83.66, // Actual completed education with passing percentage
    },
  ];

  return (
    <section
      id="education"
      className="py-16 px-4 bg-gradient-to-r from-green-100 to-green-200 dark:from-darkBg dark:to-darkHover text-black dark:text-darkText"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Educational Background
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all hover:scale-105 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
            >
              <h3 className="font-semibold text-lg text-green-500 dark:text-green-400">
                {edu.degree}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{edu.field}</p>
              <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
              <p className="text-gray-700 dark:text-gray-300">{edu.graduationYear}</p>

              {/* Passing Percentage (formatted properly) */}
              <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                Passing Percentage: <span className="text-green-600 dark:text-green-400">{edu.percentage}%</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalBackground;
