import React, { useState } from 'react'
import { toast } from 'react-toastify'
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", form.name)
    localStorage.setItem("email", form.email)
    localStorage.setItem("subject", form.subject)
    localStorage.setItem("message", form.message)
    // alert("Form submitted successfully")
    toast.success("Form submitted successfully!")
    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""

    })
  }
  return (
    <div className='flex min-h-screen justify-center items-center '>

      <form onSubmit={handleSubmit} className='rounded-sm w-full max-w-md'>
        <h1 className='text-center text-green-400 font-bold text-xl'>Contact Form</h1>
        <div className='flex flex-col gap-2'>
          <input type="text"

            name='name'
            value={form.name}
            onChange={handleChange}

            placeholder='Full Name' className='border border-gray-400 p-2 m-2 rounded-sm' required />

          <input type="email"
            name='email'
            value={form.email}
            onChange={handleChange}

            placeholder='Email' className='border border-gray-400 p-2 m-2 rounded-sm' required />

          <input type="text"
            name='subject'
            value={form.subject}
            onChange={handleChange}
            placeholder='Subject' className='border border-gray-400 p-2 m-2 rounded-sm' required />

          <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Your Message'

            className='border border-gray-400 p-2 m-2 rounded-sm' required></textarea>

          <button className='bg-green-500 text-white font-bold p-2 m-2'>Send Message</button>

        </div>

      </form>
    </div>
  )
}

export default Contact

