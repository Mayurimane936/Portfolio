import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-4 p-3'>
    <h2 className='my-20 text-center text-4xl'>
         Projects
    </h2>

    {PROJECTS.map((project, index) => (
<div className='flex flex-col items-center'>
  <div key={index} className='w-full lg:w-1/2 lg:p-8'>
    <div className='flex flex-col lg:flex-row items-center mb-8'>
      <div className='w-full lg:w-1/2 mb-4 lg:mb-0'>
        <img 
          src={project.image} 
          alt={project.title} 
          className='opacity-60 rounded-md w-full h-auto object-cover' 
        />
      </div>
      <div className='w-full lg:w-1/2 lg:pl-8'>
        <h6 className='text-xl font-semibold'>{project.title}</h6>
        <p className='text-neutral-600 pb-3'>{project.description}</p>
        {project.technologies.map((tech, index)=>(
            <span key={index} className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
        ))}
      </div>
    </div>
  </div>
</div>

  
))}
    </div>
      
  )
}

export default Projects
