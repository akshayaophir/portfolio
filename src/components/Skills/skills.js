import React from "react";
import "./skills.css"; // or "./App.css" if you keep everything in one file

const skills = [
  { name: "HTML & CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Firebase", level: "Beginner" },
  { name: "Git & GitHub", level: "Intermediate" },
];

function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <span>{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
