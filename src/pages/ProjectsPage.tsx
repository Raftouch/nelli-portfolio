import React from 'react'
import { Projects } from '../components/Projects'
import { projects } from '../data/project'

export function ProjectsPage() {
    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center m-20'>  
            {projects.map(project => <Projects project={project} key={project.id} />)}
        </div>
      )
}