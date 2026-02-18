import React from "react";
import "./intro.css";

function Intro() {
  return (
    <section id="home" className="intro">
      <div className="intro-content">
        <div className="intro-text">
          <p className="intro-badge">Full Stack Developer</p>
          <h1>
            Hello, I'm <span>Akshaya</span> 👋
          </h1>
          <p className="intro-subtitle">
            I build modern web applications using React, Node.js, and Firebase.
          </p>
          <p className="intro-description">
            Passionate about crafting clean UIs, writing maintainable code, and
            turning ideas into real products.
          </p>

          <div className="intro-actions">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="intro-image-wrapper">
          <div className="intro-image-border">
            <img
                  src={`${process.env.PUBLIC_URL}/assets/PROFILE.jpeg`} 
                  alt="Akshaya Mamillapalli"
                  className="intro-image"/>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
