import React from 'react'

export default function RoomCard({ roomDetails }) {
  return (
    <div className='border-2 rounded-2xl flex'>
      {/*Room image */}
      <img src={roomDetails.images[0]} alt="" className='w-1/3' />
      <section className='p-12'>
        <h2 className='font-playfair text-2xl font-semibold'>{roomDetails.type}</h2>
        {/* Description */}
        <section className='flex justify-between gap-2 border-b-2 px-6 pb-8'>
          <p className='mt-2 gap-4'>
            <i className="fa-solid fa-bed mr-4" />
            {roomDetails.bedType}
          </p>
          <p className='mt-2'>
            <i className="fa-solid fa-user-group mr-4" />
            {roomDetails.maxPersons.adults} adults, {roomDetails.maxPersons.children} children
          </p>
        </section>
        {/* Services */}
        <section className='flex justify-between gap-2 border-b-2 px-6 pb-8'>
          <p className='mt-2'>
            <i className="fa-regular fa-square mr-4" />
            {roomDetails.sq2} m²
          </p>
          <p className='mt-2'>
            <i className="fa-solid fa-wifi mr-4" />
            {roomDetails.wifi ? 'Available' : 'Not available'}
          </p>
          <p className='mt-2'>
            <i className="fa-solid fa-fire-burner mr-4" />
            {roomDetails.kitchen ? 'Available' : 'Not available'}
          </p>
        </section>
        {/* Buttons*/}
        <div className='flex justify-between'>
          <div className='flex gap-4 items-end'>
            <p className='font-playfair text-3xl font-semibold'>${roomDetails.price_per_night}</p>
            <p>per night</p>
          </div>
          <button>Book Now</button>
        </div>
      </section>
    </div>
  )
}
