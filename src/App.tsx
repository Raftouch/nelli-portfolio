import React, { useContext, useState } from 'react'
import { Navigation } from './components/Navigation'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { Modal } from './components/Modal'
import { Contact } from './components/Contact'
import emailLogo from './images/emailLogo.png'
import { ModalContext } from './context/ModalContext'

function App() {
  const {modal, open ,close} = useContext(ModalContext)

  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
    {modal && <Modal onClose={close}>
      <Contact />
    </Modal>}
    <button className='fixed bottom-5 right-5' onClick={open}>
      <img className='w-[50px]' src={emailLogo} alt={emailLogo}/>
    </button>
    </>
  )
}

export default App;
