import React, { useState } from 'react'
import { navLinks } from '../constants/navLinks'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behaviour: "smooth"
    })
  }
  return (
    <nav className='bg-green-400 fixed w-full font-bold text-white '>
      <div className='flex items-center justify-between p-2'>

        <NavLink to="/" className="">
          <img src="/bpic.jpg" alt="image" className='h-10 ml-4' />
          <h1>Ajay Shrestha</h1>
        </NavLink>

        <button onClick={() => setOpen(!open)} className='md:hidden text-xl font-bold bg-blue-400 p-2 text-white'>{open ? <HiOutlineX /> : <HiOutlineMenu />}</button>

        <ul className='md:flex gap-10 hidden mr-10'>

          {
            navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} onClick={scrollTop}>{link.name}</Link>
              </li>

            ))
          }
        </ul>

      </div>

      {
        open &&
        <ul className='p-4 space-y-6 bg-gray-500 font-bold text-white'>

          {
            navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} onClick={() => {
                  onClick = { scrollTop }
                  setOpen(false)

                }


                }>{link.name}</Link>
              </li>

            ))
          }
        </ul>
      }
    </nav>
  )
}

export default Navbar