import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => handleScroll("home")}>
        <span>Portfolio</span>
      </div>

      <button
        className="nav-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <ul className={`nav-links ${open ? "nav-open" : ""}`}>
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("about")}>About</li>
        <li onClick={() => handleScroll("skills")}>Skills</li>
        <li onClick={() => handleScroll("projects")}>Projects</li>
        <li onClick={() => handleScroll("education")}>Education</li>
        <li onClick={() => handleScroll("contact")}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;

