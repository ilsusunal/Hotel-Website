import React from 'react'
import Button from '../shared/button'

export default function RoomCard({ roomDetails, onBookNow }) {
  return (
    <div className='border-2 rounded-2xl flex flex-col md:flex-row'>
      {/*Room image */}
      <img src={roomDetails.images[0]} alt="" className='rounded-2xl md:w-1/2 object-cover' />
      <section className='p-4 md:p-12'>
        <h2 className='font-playfair text-2xl font-semibold mb-4'>{roomDetails.type}</h2>
        {/* Description */}
        <section className='gap-2 font-light border-b-2 py-8 text-sm'>
          <p>{roomDetails.description}</p>
          <div className='flex justify-start gap-8'>
            <p className='mt-4 gap-4'>
              <i className="fa-solid fa-bed mr-4" />
              {roomDetails.bedType}
            </p>
            <p className='mt-4'>
              <i className="fa-solid fa-user-group mr-4" />
              {roomDetails.maxPersons.adults} adults, {roomDetails.maxPersons.children} children
            </p>
          </div>
        </section>
        {/* Services */}
        <section className='flex justify-between gap-2 border-b-2 py-4 font-light text-sm'>
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
        <div className='flex justify-between py-4 items-center'>
          <div className='flex gap-4 items-end'>
            <p className='font-playfair text-xl font-semibold'>${roomDetails.price_per_night}</p>
            <p className='text-sm'>per night</p>
          </div>
          <Button onClick={onBookNow} label="Book Now" variant="filled" />
        </div>
      </section>
    </div>
  )
}
