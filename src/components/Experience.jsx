import React from 'react'
import { EXPERIENCES } from '../constants'
import Technologies from './Technologies'

const Experience = () => {
  return (
    <div className='border-b border-neutral-800 pb-4 p-3'>
      <h1 className='my-20 text-center text-4xl'>Experience</h1>
      <div className='flex-col justify-evenly items-center'>
        {EXPERIENCES.map((experience, index)=> (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/2'>
                    <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        {experience.role} - <span className='text-sm text-purple-200'>
                            {experience.company}
                        </span>
                    </h6>
                    <p className='mb-4 text-neutral-400'>
                        {experience.description}
                    </p>
                    {experience.technologies.map((Technology, index)=> (
                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 text-sm font-medium text-purple-800'>{Technology}</span>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
