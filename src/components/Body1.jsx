import React from 'react'
import { HERO_CONTENT } from '../constants'
import { motion, useSpring } from "framer-motion"

const Body1 = () => {
  return (
    <div className='flex flex-col lg:flex-row flex-wrap items-center justify-evenly p-3'>
    <div className='lg:w-1/2'>
      <motion.h1 initial = {{x:-100, opacity:0}} animate={{ x: 0, opacity:1 }} transition={{duration:0.5, delay:0.5}} className='pb-16 text-4xl sm:text-3xl md:text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
        Mayuri Mane
      </motion.h1>
      <motion.div initial = {{x:-100, opacity:0}} animate={{ x: 0, opacity:1 }} transition={{duration:0.5, delay:1}} className='md:text-2xl sm:text-1xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
        Software Engineer
      </motion.div>
      <motion.p initial = {{x:-100, opacity:0}} animate={{ x: 0, opacity:1 }} transition={{duration:0.5, delay:1.5}} className='my-2 max-w-xl py-6 font-light tracking-tighter'>
        {HERO_CONTENT}
      </motion.p>
    </div>
    
    <div className='w-full lg:w-1/2 lg:p-8'>
      <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5, delay:0.5}}
        className='flex justify-center z-0'>
        <img
          src='https://c1.wallpaperflare.com/path/325/617/134/computer-keyboard-apple-electronics-5f6c98e13ee8d6f4043792b53338fef9.jpg' 
          alt='Keyboard'
        />
      </motion.div>
    </div>
  </div>
  )
}

export default Body1
