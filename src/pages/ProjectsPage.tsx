import React from 'react'
import { Projects } from '../components/Projects'
import { projects } from '../data/project'

export function ProjectsPage() {
    return (
        <div className='h-full grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 justify-items-center pt-40 pb-20 pl-20 pr-20'>  
            {projects.map(project => <Projects project={project} key={project.id} />)}
        </div>
      )
}