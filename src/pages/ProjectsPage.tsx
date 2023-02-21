import React from 'react'
import { Projects } from '../components/Projects'
import { projects } from '../data/project'

export function ProjectsPage() {
    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center m-20'>  

            {projects.map(project => <Projects project={project} key={project.id} />)}


          {/* { loading && <Loader /> }
          { error && <ErrorMsg error={error} /> } */}
         
        
          {/* {modal && <Modal title='Create new product' onClose={close}>
            <CreateProduct onCreate={createHandler} />
          </Modal>} */}
    
          {/* <button 
          className='fixed bottom-5 right-5 rounded-full bg-red-800 hover:text-red-200 text-white text-2xl px-5 py-3'
          onClick={open}
          >
            +
          </button> */}
        </div>
      )
}