import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function RoomPage() {
  const filteredRooms = useSelector(state => state.hotel.filteredRooms);
  console.log('Filtered Rooms from Redux:', filteredRooms);
  const roomTypes = Array.from(new Set(filteredRooms.map(room => room.type)));
  console.log("filtered ", roomTypes);

  return (
    <div className='my-12 space-y-6'>
      <nav className='flex gap-8 items-center'>
        <Link to="/" className="custom-hover">Home</Link>
        <i className="fa-solid fa-chevron-right" />
        <Link to="/rooms" className="custom-hover">Rooms</Link>
      </nav>
      {/* Title and Room Types */}
      <section className='space-y-4'>
        <div className='flex justify-between'>
          <h1 className='text-lightpink font-playfair text-3xl font-semibold'>Rooms & Suits</h1>
          <p> per night</p>
        </div>
        <div className='flex justify-between'>
          <nav className='flex gap-8'>
            {roomTypes.map((type, index) => (
              <li key={index} className="custom-hover">{type} Rooms</li>
            ))}
          </nav>
          <button>Book Now</button>
        </div>
      </section>
      {/* Room Images */}
      <section>

      </section>
      {/* Room Description & Reservation Box */}
      <section className='flex'>
        <div>

        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
