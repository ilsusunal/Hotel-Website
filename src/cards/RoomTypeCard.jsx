import React from 'react'
import Pool from "/Pool.jpg"
import { useSelector } from 'react-redux';
import Button from '../shared/button';

export default function RoomTypeCard() {
  const selectedRoomType = useSelector((state) => state.hotel.selectedRoomType);
  const rooms = useSelector((state) => state.hotel.rooms);

  const room = rooms.find(room => room.type === selectedRoomType);
  const firstImage = room && room.images && room.images[0];

  if (!room) return <p>No room found for this type.</p>;

  return (
    <div className='relative grid grid-cols-1 md:grid-cols-5 gap-4 my-8 items-center'>
      {/* Room Type Card */}
      <section className='relative md:h-4/5 md:col-span-2 bg-white border-stone-200 border-2 rounded-2xl p-8 space-y-8 z-10 md:-mr-24'>
        <h2 className='text-2xl font-medium font-playfair'>{room.type}</h2>
        <p className='font-light'>{room.description}</p>
        {/* Services */}
        <div className='flex justify-around text-stone-400 my-4'>
          <div className='flex flex-col items-center'>
            <i className="fa-solid fa-maximize mr-4" />
            <p className='mt-2'>{room.sq2} m²</p>
          </div>
          <div className='flex flex-col items-center'>
            <i className="fa-solid fa-wifi mr-4" />
            <p className='mt-2'>{room.wifi ? 'Free Wifi' : 'Wifi'}</p>
          </div>
          <div className='flex flex-col items-center'>
            <i className="fa-solid fa-fire-burner mr-4" />
            <p className='mt-2'>{room.kitchen ? 'Kitchen' : 'Breakfast Service'}</p>
          </div>
        </div>
        {/* Buttons*/}
        <div className='flex justify-between'>
          <Button to="/rooms" label="Book Now" variant="filled" />
          <Button to="/rooms" label="see more" variant="text" />
        </div>
      </section>
      {/* Image(slider) */}
      <section className="md:col-span-3">
        <img src={firstImage} alt={room.type} className="rounded-3xl w-full h-auto" />
        {/* ----TODO : Slider gelecek----- */}
      </section>
    </div>
  )
}
