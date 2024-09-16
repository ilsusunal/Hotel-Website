import React from 'react';
import HotelPolicy from './HotelPolicy';

export default function RoomDetails({ roomDetails }) {
  if (!roomDetails) return null;

  return (
    <div className='px-4 flex-1 space-y-8'>
      <h2 className='font-playfair text-2xl  font-semibold'>{roomDetails.type}</h2>
      <section className='gap-2 border-b-2 px-6 pb-8 font-light'>
        <p>{roomDetails.description}</p>
        <div className='flex justify-around mt-4 text-stone-400 '>
          <p className='mt-2 gap-4'>
            <i className="fa-solid fa-bed mr-4" />
            {roomDetails.bedType}
          </p>
          <p className='mt-2'>
            <i className="fa-solid fa-user-group mr-4" />
            {roomDetails.maxPersons.adults} adults, {roomDetails.maxPersons.children} children
          </p>
        </div>
      </section>
      <h3 className='text-sunsetCoral font-playfair text-xl font-semibold'>What Do We Offer</h3>
      <section className='gap-2 border-b-2 px-6 pb-8 text-stone-400'>
        <p className='mt-2'>
          <i className="fa-solid fa-maximize mr-4" />
          {roomDetails.sq2} m²
        </p>
        <p className='mt-2'>
          <i className="fa-solid fa-wifi mr-4" />
          {roomDetails.wifi ? 'Free Wifi' : 'Wifi with fee'}
        </p>
        <p className='mt-2'>
          <i className="fa-solid fa-fire-burner mr-4" />
          {roomDetails.kitchen ? 'Kitchen' : 'Breakfast '}
        </p>
      </section>
      <HotelPolicy />
    </div>
  );
}
