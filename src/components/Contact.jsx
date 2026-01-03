import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. I will get back to you soon!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-wrapper">
        {/* LEFT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-label">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contact-label">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contact-label">
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>

        {/* RIGHT CONTACT DETAILS */}
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>khajishanur2005@gmail.com</span>
          </div>

          <div className="contact-item highlight">
            <FaLinkedin className="contact-icon linkedin" />
            <a
              href="https://www.linkedin.com/in/khaji-shanur-948a63363"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/khaji-shanur
            </a>
          </div>

          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a
              href="https://github.com/Khaji-Shanur"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Khaji-Shanur
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
