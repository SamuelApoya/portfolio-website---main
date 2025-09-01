import React from 'react'
import DemoVideoCard from '../components/DemoVideoCard.jsx'

function LiveDemo() {
  const demoVideos = [
    {
      title: "Spotlight App",
      description: "Watch a full walkthrough of the Spotlight social media platform, showcasing user registration, challenge creation, post interactions, and community features in action.",
      videoId: "",
      githubLink: "https://github.com/SamuelApoya/SpotlightApp"
    },
    {
      title: "MLArt Description", 
      description: "See the MLArt application in action, demonstrating machine learning-powered art analysis and description generation capabilities.",
      videoId: "",
      githubLink: "https://github.com/SamuelApoya/MLArtConnected"
    },
    {
      title: "Portfolio Analyzer", 
      description: "Live demonstration of the Portfolio Risk Analyzer, showing real-time portfolio analysis, risk assessment, and investment recommendations.",
      videoId: "",
      githubLink: "https://github.com/SamuelApoya/Portfolio-risk-analyzer"
    },
    {
      title: "Curriculum Learning Assistant", 
      description: "Experience Curriculum Learning Assistant's intelligent learning features, including personalized activity recommendations, adaptive knowledge tracking, and real-time progress visualization.",
      videoId: "", // Replace with your YouTube video ID
      githubLink: "https://github.com/SamuelApoya/Curriculum-Learning-Agent"
    }
  ];

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>Live Demonstrations</h1>
        <p>Watch my projects in action! These videos showcase the features and functionality of each application.</p>
      </div>
      
      <div className="projects-grid">
        {demoVideos.map((demo, index) => (
          <DemoVideoCard 
            key={index}
            title={demo.title}
            description={demo.description}
            videoId={demo.videoId}
            githubLink={demo.githubLink}
          />
        ))}
      </div>
    </div>
  )
}

export default LiveDemo