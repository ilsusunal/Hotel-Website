import React from 'react';
import HotelPolicy from '../components/HotelPolicy';

export default function RoomDetails({ roomDetails }) {
  if (!roomDetails) return null; 

  return (
    <div className='flex-1 space-y-8'>
      <h2 className='font-playfair text-2xl font-semibold'>{roomDetails.type}</h2>
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
      <h3 className='text-lightpink font-playfair text-xl font-semibold'>What Do We Offer</h3>
      <section className='gap-2 border-b-2 px-6 pb-8'>
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
      <HotelPolicy />
    </div>
  );
}
