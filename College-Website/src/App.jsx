import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Title from './Components/Title/Title'
import Programs from './Components/Programs'
import AboutUs from './Components/AboutUs'
import Campus from './Components/Campus'
import Testimonials from './Components/Testimonials'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">

        <Title subTitle="What We Offer" title = "OUR PROGRAM"/>
        <Programs/>

        <AboutUs/>

        <Title subTitle="Campus Photos" title = "GALLERY" />
        <Campus/>

        <Title subTitle="What Student Says" title = "TESTIMONIALS" />
        <Testimonials/>

        <Title subTitle="Get in Touch" title = "CONTACT US" />
        <ContactUs/>

        <Footer/>

      </div>
    </div>
  )
}

export default App
