import React from 'react'
import "./App.css"
import Student from './pages/Student'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

function App() {
  return (

    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <ToastContainer/>

      <Footer/>

    </>
  )
}

export default App