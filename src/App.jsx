import React from 'react'
import Nav from './components/Nav'
import Body1 from './components/Body1'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-300'>
    <div className='fixed top-0 -z-10 h-full w-full'>
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </div>
     <Nav/>
    <Body1 />
    <About />
    <Technologies />
    <Experience />
    <Projects />
    <Contact />
    </div>
  )
}

export default App