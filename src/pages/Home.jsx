import React from 'react'
import profile from '../assets/profile.jpg'

function Home() {
  return (
    <section id="home" className="home">
      <img src={profile} alt="My portrait" className="profile-pic" />
      <h2>Hello, I'm [Your Name]</h2>
      <p>Welcome to my purple-themed portfolio!</p>
    </section>
  )
}

export default Home
