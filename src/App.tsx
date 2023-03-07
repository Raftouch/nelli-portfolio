import React, { useContext, useState, useMemo } from 'react'
import { Navigation } from './components/Navigation'
import { Route, Routes } from 'react-router-dom'
import { Modal } from './components/Modal'
import { Contact } from './components/Contact'
import { ModalContext } from './context/ModalContext'
import { AboutPage } from './pages/AboutPage'
import { ProjectPart } from './components/ProjectPart'
import cv from './images/cv.png'
import { Resume } from './components/Resume'

function App() {
  const {modal, open ,close} = useContext(ModalContext)
  const [dark, setDark] = useState(false)

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  return (
    <div style={themeStyles}>
    
    <Navigation />

    <Routes >
      <Route path="/" element={<AboutPage />} />
       <Route path="/projects" element={<ProjectPart />} />
    </Routes>
    <Contact />

      {modal && <Modal onClose={close}>
        {/* <img className='m-auto pt-10 w-[450px]' src={cv} /> */}
        <Resume />
      </Modal>}
      
      <div className='fixed bottom-1/4 right-4 flex flex-col items-end space-y-5 '>
        <button onClick={open}>
          <img className='rounded-full border-white bg-white border-2 w-[50px] hover:bg-slate-500' src='../images/exp.png' alt='experience'/>
        </button>
        <button onClick={() => setDark(prevDark => !prevDark)}>
          <img className='rounded-full border-white bg-white border-2 w-[50px] hover:bg-slate-500' src='../images/lightDark.png' alt='light-dark icon'/>
        </button>
      </div>

    </div>
  )
}

export default App;