
import React from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";



const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 p-3'>
     <h2 className='my-20 text-center text-4xl'>Technologies</h2>
     <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-500 p-4'>
            <FaReact className='text-6xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-500 p-4'>
            <TbBrandTypescript className='text-6xl text-blue-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-500 p-4'>
            <IoLogoJavascript className='text-6xl text-yellow-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-500 p-4'>
            <SiMongodb className='text-6xl text-green-600'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-500 p-4'>
            <FaNodeJs className='text-6xl text-green-300'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-500 p-4'>
            <FaDocker className='text-6xl text-blue-600'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-500 p-4'>
            <FaAws className='text-6xl text-yellow-700'/>
        </div>
     </div>
   </div>
  )
}

export default Technologies
