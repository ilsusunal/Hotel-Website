import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/contact/ContactForm'
import HotelLocation from '../components/common/HotelLocation'

export default function ContactPage() {
  return (
    <div className='w-2/3 m-12 space-y-8'>
      <nav className='flex gap-2 items-center'>
        <Link to="/" className="custom-hover text-gray-500 text-sm">Home</Link>
        <i className="fa-solid fa-chevron-right" />
        <Link to="/contact" className="custom-hover text-sm text-oceanBlue">Contact</Link>
      </nav>

      {/* Title*/}
      <section>
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold mb-8'>Get In Touch</h1>
      </section>

      {/* Contact Form*/}
      <section className='flex flex-col md:flex-row items-center gap-12 my-20 md:p-8 p-2'>
        <p className='font-light md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <ContactForm />
      </section>

      {/* Services*/}
      <section className='py-16'>
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold mb-8 text-center'>Location</h1>
        <HotelLocation />
      </section>

    </div>
  )
}
