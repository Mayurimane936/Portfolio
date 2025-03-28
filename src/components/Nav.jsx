import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram, FaFacebook} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"

export default function Nav() {
  return (
    <div className='bg-blue-300 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        helo
    </div>
    <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
        <FaLinkedin/>
        <FaFacebook/>
        <FaGithub/>
        <FaInstagram/>
        <FaSquareXTwitter/>
    </div>
    </div>
  )
}
