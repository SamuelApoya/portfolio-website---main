import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectCard({ title, description, link, image }) {
  const navigate = useNavigate();

  const handleLiveDemoClick = (e) => {
    e.preventDefault();
    navigate('/live-demo');
  };

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image || '/placeholder-project.jpg'} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
          </a>
          <a href="#" onClick={handleLiveDemoClick} className="demo-link">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard