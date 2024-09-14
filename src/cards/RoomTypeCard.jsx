import React from 'react'
import Pool from "/Pool.jpg"

export default function RoomTypeCard() {
  return (
    <div className='relative grid grid-cols-1 md:grid-cols-5 gap-4 my-8 items-center'>
      {/* Room Type Card */}
      <section className='relative md:h-4/5 md:col-span-2 bg-stone-50 border-stone-100 border-2 rounded-2xl p-8 space-y-8 z-10 md:-mr-24'>
        <h2 className='text-2xl font-medium font-playfair'>Room Name</h2>
        <p className='font-light'>Room description</p>
        {/* Services */}
        <div className='flex justify-between'>
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-instagram" />
        </div>
        {/* Buttons*/}
        <div className='flex justify-between'>
          <button>Book Now</button>
          <button>see more  <i className="fa-solid fa-chevron-right" /></button>
        </div>
      </section>
      {/* Image(slider) */}
      <section className="md:col-span-3">
        <img src={Pool} alt="img" className="rounded-3xl w-full h-auto" />
        {/* ----TODO : Slider gelecek----- */}
      </section>
    </div>
  )
}
