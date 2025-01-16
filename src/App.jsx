import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";  // Added
import EducationalBackground from "./components/EducationalBackground";  // Added
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import CVSection from "./components/CVSection";

function App() {
  return (
    <div className="bg-white dark:bg-darkBg dark:text-darkText min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <Certifications /> {/* Added */}
      <EducationalBackground /> {/* Added */}
      <Projects />
      <CVSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
