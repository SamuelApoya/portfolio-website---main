// src/pages/Contact.jsx
import React, { useState } from 'react';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin, FaGithub, FaCheckCircle, FaTimes } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submitMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        // Auto-hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      {/* Success Modal */}
      {showSuccess && (
        <div className="success-modal-overlay">
          <div className="success-modal">
            <button 
              className="close-btn" 
              onClick={() => setShowSuccess(false)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <div className="success-content">
              <FaCheckCircle className="success-icon" />
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          </div>
        </div>
      )}

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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
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

      <style jsx>{`
        .success-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }

        .success-modal {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          position: relative;
          animation: slideIn 0.3s ease-out;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #666;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background-color: #f0f0f0;
          color: #333;
        }

        .success-content {
          text-align: center;
        }

        .success-icon {
          font-size: 3rem;
          color: #10b981;
          margin-bottom: 1rem;
        }

        .success-modal h3 {
          color: #1f2937;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }

        .success-modal p {
          color: #6b7280;
          font-size: 1rem;
          line-height: 1.5;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .contact-form input:disabled,
        .contact-form textarea:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .success-modal {
            margin: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;