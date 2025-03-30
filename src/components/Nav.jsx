import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram, FaFacebook} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si";

export default function Nav() {
  return (
    <div className='flex items-center justify-between py-3'>
    <div className='flex flex-shrink-0 items-center'>
    </div>
    <div className='m-8 flex item-center justify-center gap-4 text-2xl cursor-pointer '>
        <FaLinkedin />
        <SiLeetcode />
        <FaGithub/>
    </div>
    </div>
  )
}
