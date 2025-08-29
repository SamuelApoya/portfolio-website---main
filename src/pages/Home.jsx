// pages/Home.jsx
import React from 'react'

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <img src="/profile.jpg" alt="My portrait" className="profile-pic" />
        <h1>Hello, I'm [Your Name]</h1>
        <p className="welcome-text">Welcome to my portfolio!</p>
      </div>
      
      <section className="about-section">
        <h2>About Me</h2>
        <p>I'm a developer passionate about building cool projects with React and making ideas come alive. 
           I love creating innovative solutions and turning concepts into reality through clean, efficient code.</p>
        <p>With experience in modern web technologies, I focus on creating user-friendly applications 
           that solve real-world problems. My passion lies in continuous learning and staying up-to-date 
           with the latest industry trends.</p>
      </section>
    </div>
  )
}

export default Home