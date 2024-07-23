import React from 'react'
import logo from "../assets/logo.png"
import { useState,useEffect } from 'react'


const Navbar = () => {

const [Sticky, setSticky] = useState(false)

useEffect(()=>{
 window.addEventListener('scroll', ()=>{
   window.scrollY > 50 ? setSticky(true) : setSticky(false)
 })
},[])

  return (
    <nav className={`container ${Sticky ? "dark-nav" : ""} `}>
        
      <div className="logo">
          <img src={logo} alt="brand-logo" />
      </div>
      <div className="navigations">
        <a href="#Home">Home</a>
        <a href="#Programs">Programs</a>
        <a href="#About Us">About Us</a>
        <a href="#Campus">Campus</a>
        <a href="#Testimonials">Testimonials</a>
        <button className='btn'>Contact Us</button>
        </div>
    
    </nav>
  )
}

export default Navbar
