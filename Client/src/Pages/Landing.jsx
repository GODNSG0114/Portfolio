import React from 'react'
import Header from '../Components/Header'
import AboutMe from '../Components/AboutMe'
import Experience from '../Components/Experience'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import Navbar from '../Components/Navbar'
import Education from '../Components/Education'
import Footer from '../Components/Footer'
const Landing = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  )
}

export default Landing