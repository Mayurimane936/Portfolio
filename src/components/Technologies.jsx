
import React from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import {animate, motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial : {y:-10},
    animate : {
        y: [10, -10],
        transition : {
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 p-3'>
     <motion.h2
     whileInView={{opacity:1, y:0}}
     initial={{opacity:0, y:-100}}
     transition={{duration:1.5}} 
      className='my-20 text-center text-4xl'>Technologies</motion.h2>
     <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}} 
        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div   variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
            <FaReact className='text-6xl text-cyan-400'/>
        </motion.div>
        <motion.div   variants={iconVariants(2.2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
            <TbBrandTypescript className='text-6xl text-blue-400'/>
        </motion.div>
        <motion.div   variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
            <IoLogoJavascript className='text-6xl text-yellow-400'/>
        </motion.div>
        <motion.div variants={iconVariants(2.2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
            <SiMongodb className='text-6xl text-green-600'/>
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
            <FaNodeJs className='text-6xl text-green-300'/>
        </motion.div>
        <motion.div variants={iconVariants(2.2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
            <FaDocker className='text-6xl text-blue-600'/>
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-500 p-4'>
            <FaAws className='text-6xl text-yellow-700'/>
        </motion.div>
     </motion.div>
   </div>
  )
}

export default Technologies
