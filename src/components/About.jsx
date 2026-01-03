import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <h2 className="section-title">About Me</h2>

        <p className="section-text">
          I am a passionate Computer Science student with a strong foundation in
          web development and Python programming.
          My journey in technology is driven by a constant desire to learn and
          create innovative solutions. I thrive in collaborative environments and approach challenges with
          adaptability and enthusiasm.
        </p>
        

        {/* Stats row */}
        <div className="about-stats">
          <div className="about-stat-card">
            <span className="about-stat-number">8.70</span>
            <span className="about-stat-label">CGPA</span>
          </div>

          <div className="about-stat-card">
            <span className="about-stat-number">4+</span>
            <span className="about-stat-label">Projects</span>
          </div>

          <div className="about-stat-card">
            <span className="about-stat-number">4+</span>
            <span className="about-stat-label">Certifications</span>
          </div>

          <div className="about-stat-card">
            <span className="about-stat-number">DSA</span>
            <span className="about-stat-label">Using C++</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
