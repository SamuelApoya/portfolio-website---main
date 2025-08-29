// pages/Portfolio.jsx
import React from 'react'
import ProjectCard from '../components/ProjectCard'

function Portfolio() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      link: "https://github.com/yourusername/ecommerce-project",
      image: "/project1.jpg"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, built using React and Firebase for real-time updates.",
      link: "https://github.com/yourusername/task-manager",
      image: "/project2.jpg"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays current weather and forecasts using OpenWeather API, built with React and Chart.js.",
      link: "https://github.com/yourusername/weather-dashboard",
      image: "/project3.jpg"
    },
    {
      title: "Social Media Clone",
      description: "A social media application with real-time messaging, post sharing, and user profiles. Built with React, Express, and Socket.io.",
      link: "https://github.com/yourusername/social-clone",
      image: "/project4.jpg"
    }
  ];

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Here are some of the projects I've worked on. Each project showcases different skills and technologies.</p>
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