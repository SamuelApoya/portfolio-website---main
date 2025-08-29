// components/ProjectCard.jsx
import React from 'react'

function ProjectCard({ title, description, link, image }) {
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
          <a href={link.replace('github.com', 'github.com')} target="_blank" rel="noopener noreferrer" className="demo-link">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard