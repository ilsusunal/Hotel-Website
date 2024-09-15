import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Comments from '../components/Comments'
import mockAbout from '../mock/mockAbout.js';

export default function AboutPage() {
  const [selectedSection, setSelectedSection] = useState("History");

  const getSelectedText = () => {
    const selectedIntro = mockAbout.find(item => item.name === selectedSection);
    return selectedIntro ? selectedIntro.text : "";
  }

  const getSelectedImage = () => {
    const selectedIntro = mockAbout.find(item => item.name === selectedSection);
    return selectedIntro ? selectedIntro.image : "";
  }

  return (
    <div className='w-2/3 m-12 space-y-8'>
      <nav className='flex gap-2 items-center'>
        <Link to="/" className="custom-hover text-gray-500 text-sm">Home</Link>
        <i className="fa-solid fa-chevron-right" />
        <Link to="/about" className="custom-hover text-sm">About</Link>
      </nav>

      {/* Title */}
      <section className='space-y-4'>
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold'>Who Are We?</h1>
        <div className='flex justify-between mb-8'>
          <ul className='flex gap-8 list-none cursor-pointer'>
            {mockAbout.map((item, index) => (
              <li key={index}
                className={`custom-hover ${selectedSection === item.name ? 'active' : ''}`}
                onClick={() => setSelectedSection(item.name)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Intro Text */}
      <section className="flex flex-col md:flex-row items-center gap-12 my-20 p-8">
        <p className='font-light px-18 w-1/2'>{getSelectedText()}</p>
        <div className="relative p-2 md:w-1/2 h-auto">
          <div className="absolute w-full h-full bg-sandyBeige/20 rounded-2xl rotate-6 top-2 left-1"></div>
          <img src={getSelectedImage()} alt="Some Hotel" className="w-full h-full rounded-2xl shadow-lg relative z-10" />
        </div>
      </section>

      {/* Services*/}
      <section className="py-16">
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold text-center pb-16'>Services</h1>
        <div className='flex justify-around text-stone-400 py-8'>
          <div className='flex flex-col items-center hover:text-oceanBlue'>
            <i className="fa-solid fa-utensils fa-2x mb-2" />
            <p className='mt-2 text-center'>Restaurant</p>
          </div>
          <div className='flex flex-col items-center hover:text-oceanBlue'>
            <i className="fa-solid fa-swimmer fa-2x mb-2" />
            <p className='mt-2 text-center'>Pool</p>
          </div>
          <div className='flex flex-col items-center hover:text-oceanBlue'>
            <i className="fa-solid fa-spa fa-2x mb-2" />
            <p className='mt-2 text-center'>Spa</p>
          </div>
          <div className='flex flex-col items-center hover:text-oceanBlue'>
            <i className="fa-solid fa-table-tennis-paddle-ball fa-2x mb-2" />
            <p className='mt-2 text-center'>Fitness Center</p>
          </div>
        </div>
      </section>

      {/* Top Comments*/}
      <section>
        <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold text-center'>Testimonials</h1>
        <Comments />
      </section>
    </div>
  )
}
