import React from 'react'
import btnarrow from "../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="hero-content container">
      <h1>We Ensure better education for a better world</h1>
      <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and <br /> experiences needed to excel in the dynamic field of education</p>
<button className='btn'>Explore now <img src={btnarrow} alt="btnarrow" /></button>
    </div>
</div>
  )
}

export default Hero
