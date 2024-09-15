import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function RoomReservationPage({history}) {
    const filteredRooms = useSelector(state => state.hotel.filteredRooms);

    useEffect(() => {
        if (!filteredRooms || filteredRooms.length === 0) {
            history.push('/rooms');
        }
    }, [filteredRooms, history]);

    const roomTypes = Array.from(new Set(filteredRooms.map(room => room.type)));
    const [selectedType, setSelectedType] = useState(roomTypes[0] || '');

    const roomsByType = filteredRooms.filter(room => room.type === selectedType);
    const roomDetails = roomsByType.length > 0 ? roomsByType[0] : null;

    if (!filteredRooms || filteredRooms.length === 0) {
        return "Loading...";
    }

    return (
        <div className='w-3/5 m-12 space-y-4'>
            <nav className='flex gap-2 items-center'>
                <Link to="/" className="custom-hover text-gray-500 text-sm">Home</Link>
                <i className="fa-solid fa-chevron-right" />
                <Link to="/rooms" className="custom-hover text-gray-500 text-sm">Rooms</Link>
                <i className="fa-solid fa-chevron-right" />
                <Link to="/rooms/id" className="custom-hover text-sm">Reservation</Link>
            </nav>

            {/* Title and Room Types */}
            <section className='space-y-4'>
                <div className='flex justify-between'>
                    <h1 className='text-lightpink font-playfair text-3xl font-semibold'>Rooms & Suits</h1>
                    <p> per night</p>
                </div>
                <div className='flex justify-between'>
                    <nav className='flex gap-8 list-none cursor-pointer'>
                        {roomTypes.length > 0 ? (
                            roomTypes.map((type, index) => (
                                <li
                                    key={index}
                                    className={`custom-hover ${selectedType === type ? 'font-bold text-lightpink' : ''}`}
                                    onClick={() => setSelectedType(type)}
                                >
                                    {type}
                                </li>
                            ))
                        ) : (
                            <li>No rooms available</li>
                        )}
                    </nav>
                    <button>Book Now</button>
                </div>
            </section>
            {/* Room Images */}
            <section className='flex gap-2'>
                {roomDetails.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Room Image ${index + 1}`}
                        className='w-60 h-40 object-cover rounded'
                    />
                ))}
            </section>
            {/* Room Description & Reservation Box */}
            <section className='flex flex-col md:flex-row gap-6'>
                <div className='flex-1'>
                    <h2 className='text-xl font-semibold'>{roomDetails.type}</h2>
                    <p className='mt-2'>Bed Type: {roomDetails.bedType}</p>
                    <p className='mt-2'>Price per night: ${roomDetails.price_per_night}</p>
                    <p className='mt-2'>Square meters: {roomDetails.sq2} m²</p>
                    <p className='mt-2'>WiFi: {roomDetails.wifi ? 'Available' : 'Not available'}</p>
                    <p className='mt-2'>Kitchen: {roomDetails.kitchen ? 'Available' : 'Not available'}</p>
                    <p className='mt-2'>Max Persons: {roomDetails.maxPersons.adults} adults, {roomDetails.maxPersons.children} children</p>
                </div>
                <div className='flex-1'>
                    {/* Additional reservation details or options can go here */}
                    <h3 className='text-lg font-semibold mb-2'>Reservation Details</h3>
                    <p>Check-in: [Date]</p>
                    <p>Check-out: [Date]</p>
                    {/* Add form or other reservation details as needed */}
                </div>
            </section>
        </div>
    )
}
