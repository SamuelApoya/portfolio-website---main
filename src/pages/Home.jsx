// src/pages/Home.jsx
import React from 'react'
import profilePic from '../assets/profile.jpg'

function Home() {
  return (
    <div className="home">
      <div className="hero-section" style={{ textAlign: 'center' }}>
        <img
          src={profilePic}
          alt="My portrait"
          className="profile-pic"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            marginBottom: '15px'
          }}
        />
        <h1>Samuel Apoya</h1>
        <p className="welcome-text">Technological leadership is the driving force for innovation!</p>
        <p style={{ fontStyle: 'italic', marginTop: '0.5rem', fontSize: '1rem', color: '#666' }}>— Samuel Apoya</p>
      </div>
      
      <section className="about-section">
        <h2>About Me</h2>
        <p>I'm a versatile Computer Scientist passionate about AI/ML and Software Engineering.
           I enjoy solving complex problems through clean, impactful code and believe that technology can drive meaningful innovation. Beyond tech, I explore economic theory, play piano, and hike
           — my favorite sources of creativity and fresh ideas.</p>
        <p>With experience in modern technologies, I focus on creating user-friendly applications 
           that solve real-world problems. My passion lies in continuous learning and staying up-to-date 
           with the latest industry trends.</p>
      </section>
    </div>
  )
}

export default Home