import React from "react";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Intro from "./components/Intro/intro";

function App() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <Intro />

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Works />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
