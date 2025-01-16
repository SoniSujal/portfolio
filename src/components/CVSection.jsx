// CVSection.jsx
import React from "react";
import CV from "../assets/CV.pdf"; // Import the CV.pdf file from src/assets

const CVSection = () => {
  return (
    <section
      id="cv"
      className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl"></div>

      {/* Content Section */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Professional Profile</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Explore my detailed CV to learn more about my professional journey, 
          educational background, skills, and experiences. Download it or view 
          it directly in your browser.
        </p>
        <div className="flex justify-center gap-6">
          <button
            className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open(CV, "_blank")}
          >
            Open CV
          </button>
          <button
            className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => {
              const link = document.createElement("a");
              link.href = CV;
              link.download = "CV.pdf";
              link.click();
            }}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
