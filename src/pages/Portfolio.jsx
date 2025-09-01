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
      description: "A research project at the Insite Lab where I worked as a Research Assistant, exploring how blind and low-vision users experience visual art through textual descriptions. I helped design and build a full-stack system that generates AI-powered art descriptions and adapts them to different accessibility needs.",
      link: "https://github.com/SamuelApoya/MLArtConnected",
      image: mlartImg
    },

    {
      title: "Portfolio Analyzer", 
      description: "A web-based tool that evaluates investment portfolios by calculating risk metrics, visualizing asset allocation, and simulating market scenarios. It helps users understand potential returns and risks, supporting smarter financial decision-making.",
      link: "https://github.com/SamuelApoya/Portfolio-risk-analyzer",
      image: portfolioAnalyzertImg
    },

    {
      title: "curriculum Learning Assistant", 
      description: "An intelligent tutoring system powered by reinforcement learning that adapts to student strengths and weaknesses. It uses a Deep Q-Network to personalize activity selection and features interactive dashboards to visualize progress and learning trends.",
      link: "https://github.com/SamuelApoya/Curriculum-Learning-Agent",
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