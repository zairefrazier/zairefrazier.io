import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App= () => {
  return (
    <Router>
    <div className="App">
      <div class="conatiner max-w-screen-sm mx-auto">
          <div ><a href="/"><p class="hover:text-red-600">HOME</p></a></div>
          <div><a href="/about"><p class="hover:text-red-600">ABOUT</p></a></div>
          <div><a href="/projects"><p class="hover:text-red-600">PROJECTS</p></a></div>
        </div>
          <section class="hero container max-w-screen-sm mx-auto">
      
        <img class="mx-auto" src="src/IMG_3603 2.jpg" alt="screenshot" />
        <p class="text-align: left"> zaire frazier</p>
      </section>
    </div>
    </Router>
  )
}
export default App
