import React from 'react'
import aboutImg from "../assets/projects/project-2.jpg" 
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 p-3'>
        <h1 className='my-20 text-center text-4xl'>About me</h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'> 
            <img src='https://c1.wallpaperflare.com/path/78/305/104/hand-type-keyboard-money-2100e06c2cedbaa91c677222ff4afa3a.jpg' className='w-full h-auto object-cover rounded-md opacity-60'
            />
            </div>
            </div>
            <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'> {ABOUT_TEXT} </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About
