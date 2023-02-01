import { useState } from 'react'
import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <BrowserRouter>
    <header class="conatiner max-w-screen-sm mx-auto sm:text-md px-5">
      <nav class="hover:text-red-600">
        <Link to="/">HOME</Link>
      </nav>
      <nav class="hover:text-red-600">
      <NavLink to="about">ABOUT</NavLink>
      </nav>
      <nav class="hover:text-red-600">
      <NavLink to="projects" >PROJECTS</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
    </Routes>
    </BrowserRouter>
      
  
      
  );
}
export default App
