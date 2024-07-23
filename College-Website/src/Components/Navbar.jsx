import React from 'react'
import logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <nav className='container'>
        
      <div className="logo">
          <img src={logo} alt="brand-logo" />
      </div>
      <div className="navigations">
        <a href="#">Home</a>
        <a href="#">Programs</a>
        <a href="#">About Us</a>
        <a href="#">Campus</a>
        <a href="#">Testimonials</a>
        <button className='btn'>Contact Us</button>
        </div>
    
    </nav>
  )
}

export default Navbar
