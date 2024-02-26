import React from 'react'
import Header from './components/Header'
import ToggleMenu from './components/ToggleMenu'
import './assets/toggleMenu.css'
import Section from './components/Section'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'






function App() {
 
  return (
      <div className="">
        <Header />
        <ToggleMenu />
        <Section />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
