import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pythonAiCert from "../assets/python_Ai.pdf";
import AlgoP1 from "../assets/Algo_part1.pdf";
import AlgoP2 from "../assets/Algo_part2.pdf";
import sql from "../assets/dbms.pdf";
import data_stru from "../assets/data_structure.pdf";
import WEB from "../assets/webDev.pdf";

const Certifications = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const certifications = [
    {
      title: "Data Structures",
      issuer: "University of California San Diego [Coursera]",
      pdfLink: data_stru,
    },
    {
      title: "HTML, CSS and Javascript for Web Developers",
      issuer: "Johns Hopkins Universityw [Coursera]",
      pdfLink: WEB,
    },
    {
      title: "Building Generative AI-Powered Applications with Python",
      issuer: "IBM [Coursera]",
      pdfLink: pythonAiCert,
    },
    {
      title: "The Structured Query Language (SQL)",
      issuer: "University of Colorado Boulder[Coursera]",
      pdfLink: sql,
    },
    {
      title: " Algorithmic Thinking (Part 1)",
      issuer: "Rice University [Coursera]",
      pdfLink: AlgoP1,
    },
    {
      title: " Algorithmic Thinking (Part 2 )",
      issuer: "Rice University [Coursera]",
      pdfLink: AlgoP2,
    },
  ];

  return (
    <section
      id="certifications"
      className="py-16 px-4 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-darkBg dark:to-darkHover text-black dark:text-darkText"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Certifications
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl dark:bg-darkCard dark:text-white dark:hover:bg-blue-800 dark:hover:shadow-xl hover:bg-blue-50 hover:text-white"
            >
              <h3 className="font-semibold text-lg text-blue-500 dark:text-white transition-all duration-300 hover:text-yellow-400">
                {cert.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{cert.issuer}</p>
              <button
                onClick={() => window.open(cert.pdfLink, "_blank")}
                className="mt-4 bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-105"
              >
                Open Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
