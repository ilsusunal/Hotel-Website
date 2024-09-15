import React from 'react'
import { Link } from 'react-router-dom'
import Comments from '../components/Comments'

export default function AboutPage() {
  return (
    <div className='w-2/3 m-12 space-y-8'>
      <nav className='flex gap-2 items-center'>
        <Link to="/" className="custom-hover text-gray-500 text-sm">Home</Link>
        <i className="fa-solid fa-chevron-right" />
        <Link to="/about" className="custom-hover text-sm">About</Link>
      </nav>

      {/* Title*/}
      <section>
        <h1 className='text-lightpink font-playfair text-3xl font-semibold mb-8'>Vision & Mission</h1>
      </section>
      <p className='font-light w-2/3 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
      {/* Services*/}
      <section>
        <h1 className='text-lightpink font-playfair text-3xl font-semibold mb-8 text-center'>Services</h1>
      </section>

      {/* Top Comments*/}
      <section>
        <h1 className='text-lightpink font-playfair text-3xl font-semibold text-center'>Comments</h1>
        <Comments/>
      </section>
    </div>
  )
}
