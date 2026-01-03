import React from "react";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "Python",
    level: "Advanced",
    description:
      "Used to build websites and software, automate tasks, and analyse data",
  },
  {
    name: "C++",
    level: "Advanced",
    description:
      "Developing massive software infrastructure and resource-constrained applications.",
  },
  {
    name: "Java",
    level: "Intermediate",
    description:
      "Wide range of applications from web to mobile, focusing on oop and design patterns.",
  },
  {
    name: "C",
    level: "Advanced",
    description:
      "Low-level programming, system-level development, and embedded systems.",
  },
  {
    name: "React",
    level: "Advanced",
    description:
      "Experience building SPA, hooks‑based state management, custom components, and integrating REST APIs.",
  },
  {
    name: "Node.js & Express", 
    level: "Intermediate",
    description:
      "Building RESTful APIs, authentication, middleware, and connecting to databases.",
  },
  {
    name: "JavaScript / TypeScript",
    level: "Advanced",
    description:
      "Writing clean, modular code; asynchronous patterns; ES6+ features and type‑safe codebases.",
  },
  {
    name: "Databases(SQL & MySQL)",
    level: "Intermediate",
    description:
      "Working with SQL and NoSQL databases, schema design, and query optimization basics.",
  },
  {
    name: "HTML & CSS",
    level: "Advanced",
    description:
      "Responsive layouts, flexbox, grid, and component‑based styling practices.",
  },
];

const Skills = () => {
  return (
    <div className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
      <p className="hint-text">Click any skill card to view more details.</p>
    </div>
  );
};

export default Skills;
