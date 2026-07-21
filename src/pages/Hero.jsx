import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between min-h-screen items-center bg-gray-100'>

      {/* left contents */}
      <div className='text-center w-full max-w-3xl m-10'>
        <h1 className='md:text-3xl text-xl uppercase font-bold text-green-500 text-center'>Ajay Kumar Shrestha</h1>
        <h2 className='md:text-xl text-sm font-semibold p-3 text-green-500 text-center'>Full Stack Developer and Instructor</h2>

        <p className='text-sm p-4 text-justify text-green-500'>I design highly scalable and responsive web applications using MongoDB , Express , React and Nodejs.I have 2 years of experience of working as a Full Stack Developer and instructor in Clouds Web Nepal Pvt. Ltd.</p>

        <div className='flex gap-5 text-center justify-center m-5'>

          <a href="/cv.pdf" download>
            <button className='bg-green-400 p-4 text-white font-bold hover:scale-105 transition duration-700'>Download CV</button>
          </a>



          <Link to="/project">
            <button className='font-bold uppercase border border-gray-400 p-3 text-green-500 hover:scale-105 transition duration-700'>View Projects</button>
          </Link>


        </div>

        <div className='flex gap-5 p-4 items-center justify-center  '>
          <a href="https://www.facebook.com/" target='_blank'><FaFacebook className='text-3xl text-green-500 hover:scale-110 duration-700' /></a>
          <a href="https://www.instagram.com/" target='_blank'><FaInstagram className='text-3xl text-green-500 hover:scale-110 duration-700' /></a>
          <a href="https://www.github.com/" target='_blank'><FaGithub className='text-3xl text-green-500 hover:scale-110 duration-700' /></a>
          <a href="https://www.linkedin.com/" target='_blank'><FaLinkedin className='text-3xl text-green-500 hover:scale-110 duration-700' /></a>
        </div>
      </div>

      {/* right contents */}
      <div>

        <img src="/bpic.jpg" alt="profile" className='md:h-82 h-62 rounded-full md:mr-15 md:mb-25 mt-10' />
      </div>
    </div>
  )
}

export default Hero