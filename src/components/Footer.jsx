import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-zinc-500 text-white p-10'>
      <div className='max-w-6xl mx-auto px-6 flex md:flex-row justify-between items-center flex-col'>
        <div>
          <h1 className='text-xl font-bold text-center p-4'>Ajay Kumar Shrestha</h1>
          <p>I design and build highly scalable web application using react and tailwind css.</p>
        </div>

        <div className='flex p-5 gap-6 font-bold text-xl'>
          <a href="https://www.facebook.com/" target="_blank"><FaFacebook/></a>
          <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
          <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin/></a>
          <a href="https://www.tiktok.com/" target="_blank"><FaTiktok/></a>
        </div>

        <div className='text-sm p-6'>
          @ All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer 