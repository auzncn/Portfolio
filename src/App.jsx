import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ParticleBackground from './components/Particle'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App