import React from "react";
import heartImg from "../assets/heart-disease.jpg";
import recipeImg from "../assets/recipe.jpg";
import evotingImg from "../assets/evoting.jpg";

const projects = [
  {
    title: "Heart Disease Prediction",
    tech: "Machine Learning",
    description:
      "Developed a heart disease prediction web app where users enter BP, sugar, ECG, height, and weight to get an instant risk assessment.",
      link: "#",
      image: heartImg,
  },
  {
    title: "Food Recipe Website",
    tech: "React, CSS, Public API",
    description:
      "A responsive recipe finder that lets users search dishes, view ingredients, and follow step‑by‑step instructions.",
    link: "#",
    image: recipeImg,
  },
  {
    title: "E‑Voting System",
    tech: "C, OOP",
    description:
      "A console‑based secure voting system with authentication and real‑time vote counting.",
    link: "#",
    image: evotingImg,
  },
];

const Projects = () => {
  return (
    <div className="section">
      <h2 className="section-title">Projects</h2>

      <div className="cards-grid">
        {projects.map((proj) => (
          <div key={proj.title} className="project-card">
            
            {/* Project Image */}
            <div className="project-image">
              <img src={proj.image} alt={proj.title} />
            </div>

            {/* Project Content */}
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p className="project-tech">{proj.tech}</p>
              <p>{proj.description}</p>

              {proj.link !== "#" && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link-btn"
                >
                  View Project
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
