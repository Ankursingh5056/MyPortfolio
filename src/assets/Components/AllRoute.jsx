import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Project from './Pages/Project'
import About from './Pages/About'

function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Project" element={<Project/>}/>
    </Routes>
  )
}

export default AllRoute
