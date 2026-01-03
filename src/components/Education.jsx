// src/components/Education.jsx
import React from "react";

const educationData = [
  {
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "",
    period: "2022 – 2026",
    college: "Rajeev Gandhi Memorial College of Engineering & Technology, Nandyal",
    cgpaLabel: "CGPA",
    cgpa: "8.70",
    icon: "🎓",
  },
  {
    title: "Higher Secondary (MPC)",
    subtitle: "",
    period: "2020 – 2022",
    college: "GSR Junior College, Nandyal",
    cgpaLabel: "CGPA",
    cgpa: "9.59",
    icon: "📜",
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <h2 className="section-title">Education</h2>

        <div className="education-list">
          {educationData.map((item) => (
            <div key={item.title} className="education-card">
              <div className="education-icon-wrap">
                <span className="education-icon">{item.icon}</span>
              </div>

              <div className="education-content">
                <div className="education-header-row">
                  <h3 className="education-title">{item.title}</h3>
                  <span className="education-period">{item.period}</span>
                </div>

                {item.subtitle && (
                  <p className="education-subtitle">{item.subtitle}</p>
                )}

                <p className="education-college">{item.college}</p>

                <p className="education-cgpa">
                  <span className="education-cgpa-label">{item.cgpaLabel}:</span>{" "}
                  {item.cgpa}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
