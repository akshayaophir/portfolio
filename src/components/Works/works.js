// src/components/Works/works.js
import React, { useEffect, useState } from "react";
import "./works.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Works() {
  const [projects, setProjects] = useState([
    // fallback data so UI looks fine even if Firebase fails
    {
      id: "local-1",
      title: "Portfolio Website",
      tech: "Built using HTML,CSS",
      github: "#",
      demo: "#",
    },
    {
      id: "local-2",
      title: "KITS CAI WEBSITE",
      tech: "HTML, CSS",
      github: "#",
      demo: "#",
    },
  ]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snapshot = await getDocs(collection(db, "projects"));
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Only override if Firestore actually has data
        if (list.length > 0) {
          setProjects(list);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        // keep fallback projects
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id || project.title}>
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
