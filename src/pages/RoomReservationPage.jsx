import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import HotelPolicy from '../components/HotelPolicy';
import CheckInPicker from '../shared/CheckInPicker';
import CheckOutPicker from '../shared/CheckOutPicker';
import GuestControl from '../shared/GuestControl';


export default function RoomReservationPage({ history }) {
    const { filteredRooms, checkInDate, checkOutDate, guests } = useSelector(state => state.hotel);

    useEffect(() => {
        if (!filteredRooms || filteredRooms.length === 0) {
            history.push('/rooms');
        }
    }, [filteredRooms, history]);

    //To show filtered results
    const roomTypes = Array.from(new Set(filteredRooms.map(room => room.type)));
    const [selectedType, setSelectedType] = useState(roomTypes[0] || '');
    const roomsByType = filteredRooms.filter(room => room.type === selectedType);
    const roomDetails = roomsByType.length > 0 ? roomsByType[0] : null;

    //Calculations for reservation box
    const calculateNights = () => {
        if (!checkInDate || !checkOutDate) return 0;
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        return Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    };

    const nights = calculateNights();
    const roomPrice = roomDetails ? roomDetails.price_per_night : 0;
    const totalRoomCost = roomPrice * nights;
    const breakfastCost = 200 * nights;
    const taxes = totalRoomCost * 0.2;
    const finalTotal = totalRoomCost + breakfastCost + taxes;

    if (!filteredRooms || filteredRooms.length === 0) {
        return "Loading...";
    }

    return (
        <div className='w-2/3 m-12 space-y-8'>
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
                    <h1 className='text-lightpink font-playfair text-3xl font-semibold'>Book Your Room</h1>
                    <p>${roomDetails.price_per_night} per night</p>
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
            <section className='grid grid-cols-5 gap-2 grid-rows-2 h-80'>
                <img
                    src={roomDetails.images[0]}
                    alt="Room Image 1"
                    className='col-span-3 row-span-2 object-cover w-full h-full rounded'
                />
                {roomDetails.images.slice(1, 3).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Room Image ${index + 2}`}
                        className='object-cover w-full h-full rounded'
                    />
                ))}
                {roomDetails.images.slice(3, 5).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Room Image ${index + 4}`}
                        className='object-cover w-full h-full rounded'
                    />
                ))}
            </section>
            {/* Room Description & Reservation Box */}
            <section className='flex flex-col md:flex-row gap-6'>
                {/* Room Descriptionx */}
                <div className='flex-1 space-y-8'>
                    <h2 className='font-playfair text-2xl font-semibold'>{roomDetails.type}</h2>
                    <div className='flex justify-between gap-2 border-b-2 px-6 pb-8'>
                        <p className='mt-2 gap-4'><i className="fa-solid fa-bed mr-4" />{roomDetails.bedType}</p>
                        <p className='mt-2'><i className="fa-solid fa-user-group mr-4" /> {roomDetails.maxPersons.adults} adults, {roomDetails.maxPersons.children} children</p>
                    </div>
                    <h3 className='text-lightpink font-playfair text-xl font-semibold'>What Do We Offer</h3>
                    <div className='gap-2 border-b-2 px-6 pb-8'>
                        <p className='mt-2'><i className="fa-regular fa-square mr-4" />{roomDetails.sq2} m²</p>
                        <p className='mt-2'><i className="fa-solid fa-wifi mr-4" /> {roomDetails.wifi ? 'Available' : 'Not available'}</p>
                        <p className='mt-2'><i className="fa-solid fa-fire-burner mr-4" /> {roomDetails.kitchen ? 'Available' : 'Not available'}</p>
                    </div>
                    <HotelPolicy />
                </div>
                {/* Reservation Box */}
                <div className='w-2/5 border-2 rounded-2xl p-8 h-full items-center'>
                    <p className='font-semibold text-xl font-playfair'>${roomDetails.price_per_night} per night</p>
                    <div className='border-2 rounded-2xl p-8 h-auto m-8'>
                        <div className='flex border-b mb-4'>
                            <CheckInPicker />
                            <CheckOutPicker />
                        </div>
                        <GuestControl />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <button>Book Now</button>
                        <div className='flex justify-between'>
                            <p>${roomPrice} x {nights} nights</p>
                            <p>${totalRoomCost}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Taxes</p>
                            <p>${taxes}</p>
                        </div>
                        <div className='flex justify-between border-b pb-4'>
                            <p>Add Breakfast</p>
                            <p>${breakfastCost}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-medium text-lg'>Total </p>
                            <p className='font-medium text-lg'>${finalTotal}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
