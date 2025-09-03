// src/pages/Contact.jsx
import React, { useState } from 'react';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent! Thank you for reaching out.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Let's connect! Feel free to reach out through the form below or connect with me on social media.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <h2>Send me a message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="social-section">
          <h2>Connect with me</h2>
          <div className="social-links">
            <a href="mailto:sapoya26@colby.edu" className="social-link email">
              <SiGmail className='social-icon' />
              <span>sapoya26@colby.edu</span>
            </a>
            <a href="https://www.linkedin.com/in/samuel-apoya/" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/SamuelApoya" className="social-link github" target="_blank" rel="noopener noreferrer">
              <span className="social-icon"><FaGithub/></span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;