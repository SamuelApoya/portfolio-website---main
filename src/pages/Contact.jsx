// pages/Contact.jsx
import React, { useState } from 'react'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
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
            <a href="mailto:your-email@example.com" className="social-link email">
              <span className="social-icon">📧</span>
              <span>your-email@example.com</span>
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/yourusername" className="social-link github" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">⚡</span>
              <span>GitHub</span>
            </a>
            <a href="https://facebook.com/yourprofile" className="social-link facebook" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">📘</span>
              <span>Facebook</span>
            </a>
            <a href="https://snapchat.com/add/yourprofile" className="social-link snapchat" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">👻</span>
              <span>Snapchat</span>
            </a>
            <a href="https://twitter.com/yourusername" className="social-link twitter" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">🐦</span>
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact