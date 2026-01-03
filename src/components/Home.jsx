// src/components/Home.js
import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";

const roles = [
  "Full Stack Developer",
  "Python  Enthusiast"
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const currentRole = roles[roleIndex];

  // Resume button handler
  const handleViewResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/12q3tOgVZZfgYQE6kxWsgWC6Nf_2MWklB/view?usp=drive_link";
    window.open(resumeUrl, "_blank");
  };

  // Random role changer
   useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length); // next role in order
    }, 2000); // change every 3 seconds (slower)

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-center">
      <div className="hero-center-inner">
        {/* Circle photo */}
        <div className="hero-photo-ring">
          <img src={profileImg} alt="Khaji Shanur" className="hero-photo" />
        </div>

        {/* Text content */}
        <div className="hero-text-block">
          <p className="hero-hello">Hello,</p>

          <p className="hero-name-line">
            I am <span className="hero-name">Khaji Shanur</span>
          </p>

          {/* RANDOM ROLE */}
          <p className="hero-role">{currentRole}</p>

          <p className="hero-description">
            Building scalable web applications and solving real-world problems
            using modern full-stack technologies.
          </p>

          <button className="hero-btn" onClick={handleViewResume}>
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;