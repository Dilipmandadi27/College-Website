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
import Videoplayer from './Components/Videoplayer'
import { useState } from 'react'
import Notify from './Components/Notify'

const App = () => {

  const[playstate, setPlayState] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">

        <Title subTitle="What We Offer" title = "OUR PROGRAM"/>
        <Programs/>

        <AboutUs setPlayState={setPlayState}/>

        <Title subTitle="Campus Photos" title = "GALLERY" />
        <Campus/>

        <Title subTitle="What Student Says" title = "TESTIMONIALS" />
        <Testimonials/>

        <Title subTitle="Get in Touch" title = "CONTACT US" />
        <ContactUs/>

        <Footer/>

      </div>
      <Videoplayer playstate={playstate} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
