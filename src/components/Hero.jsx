import React, { useState, useEffect } from "react";
import AOS from "aos";
import { Link } from "react-scroll";
import "aos/dist/aos.css";
import profilePic from "../assets/images/profile.jpg"; // Update with your actual image path

const Hero = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Set greeting based on time
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting("Good Morning");
    } else if (hours < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-purple-900 via-black to-gray-900 text-white flex flex-col lg:flex-row items-center justify-center px-6">
      {/* Left Side: Profile Picture */}
      <div
        className="w-full lg:w-1/2 flex justify-center"
        data-aos="fade-right"
      >
        <img
          src={profilePic}
          alt="Sujal Soni"
          className="profile-img"
        />
      </div>

      {/* Right Side: Content */}
      <div
        className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0"
        data-aos="fade-left"
      >
        <h1 className="text-4xl sm:text-6xl font-bold animate-fadeIn mb-4">
          {greeting}, I'm Sujal Soni
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto lg:mx-0 mb-4">
        I am a passionate and motivated software engineering student specializing in Java, Spring Boot, and full-stack development. With hands-on experience in building dynamic web applications using React.js, MongoDB, and Express.js, I am eager to apply my technical expertise to solve real-world challenges. My strong foundation in critical thinking and data-driven decision-making enables me to contribute effectively to development teams. I am excited to bring my skills to a dynamic organization as an intern or entry-level developer.
        </p>
        <p className="mt-2 italic text-lg text-gray-400 mb-6">
          "Turning innovative ideas into digital solutions."
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-lg text-lg"
        >
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            Contact Me
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
