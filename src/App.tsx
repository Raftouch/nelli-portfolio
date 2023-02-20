import React from 'react'
import { Navigation } from './components/Navigation'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
    </>
  )
}

export default App;
