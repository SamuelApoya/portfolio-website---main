// src/pages/Portfolio.jsx
import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import spotlightImg from '../assets/spotlightIcon.png'
import mlartImg from '../assets/MLArt Review.png'
import portfolioAnalyzertImg from '../assets/PortfolioRiskAnalyzer.png'
import SmartCartImg from '../assets/Curriculum.jpg'

function Portfolio() {
  const projects = [
    {
      title: "Spotlight App",
      description: "A full-stack social media platform built with React, Node.js, and hosted on Google Cloud (Firebase) that enables users to engage in friendly challenges. It addresses the problem of shallow online interactions by using challenges as the core mechanic to spark creativity, drive participation, and strengthen community connections.",
      link: "https://github.com/SamuelApoya/SpotlightApp",
      image: spotlightImg
    },
    {
      title: "MLArt Description", 
      description: "A responsive task management application with drag-and-drop functionality.",
      link: "https://github.com/yourusername/task-manager",
      image: mlartImg
    },

    {
      title: "Portfolio Analyzer", 
      description: "A responsive task management application with drag-and-drop functionality.",
      link: "https://github.com/yourusername/task-manager",
      image: portfolioAnalyzertImg
    },

    {
      title: "SmartCart", 
      description: "A responsive task management application with drag-and-drop functionality.",
      link: "https://github.com/yourusername/task-manager",
      image: SmartCartImg
    }
  ];

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Here are some of the projects I've worked on.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio