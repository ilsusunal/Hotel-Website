import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CheckInPicker from '../shared/CheckInPicker';
import CheckOutPicker from '../shared/CheckOutPicker';
import GuestControl from '../shared/GuestControl';
import RoomDetails from '../components/RoomDetails';
import Button from '../shared/button';


export default function RoomReservationPage({ history }) {
    const filteredRooms = useSelector(state => state.hotel.filteredRooms);
    const checkInDate = useSelector(state => state.hotel.checkInDate);
    const checkOutDate = useSelector(state => state.hotel.checkOutDate);
    const adults = useSelector(state => state.hotel.adults);
    const children = useSelector(state => state.hotel.children);

    //To show filtered results
    const roomTypes = [...new Set(filteredRooms.map(room => room.type))];
    const [selectedType, setSelectedType] = useState(roomTypes[0] || '');
    const roomsByType = filteredRooms.filter(room => room.type === selectedType);
    const roomDetails = roomsByType.length > 0 ? roomsByType[0] : null;

    useEffect(() => {
        if (!filteredRooms || filteredRooms.length === 0) {
            history.push('/rooms');
        }
    }, [filteredRooms, history]);

    useEffect(() => {
        if (filteredRooms.length > 0) {
            setSelectedType(filteredRooms[0].type);
        }
    }, [filteredRooms]);

    if (!filteredRooms || filteredRooms.length === 0) {
        return "Loading...";
    }


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
                <div className='flex justify-between mb-8'>
                    <h1 className='text-sunsetCoral font-playfair text-3xl font-semibold'>Available Rooms</h1>
                    <div className='flex gap-4 items-end'>
                        <p className='font-playfair text-3xl font-semibold'>${roomDetails.price_per_night}</p>
                        <p>per night</p>
                    </div>
                </div>
                <div className='flex justify-between mb-8'>
                    <nav className='flex gap-8 list-none cursor-pointer'>
                        {roomTypes.length > 0 ? (
                            roomTypes.map((type, index) => (
                                <li
                                    key={index}
                                    className={`custom-hover ${selectedType === type ? 'active' : ''}`}
                                    onClick={() => setSelectedType(type)}
                                >
                                    {type}
                                </li>
                            ))
                        ) : (
                            <li>No rooms available</li>
                        )}
                    </nav>
                    <Button to="/payment" label="Book Now" variant="filled" />
                </div>
            </section>
            {/* Room Images */}
            <section className='grid grid-cols-2 gap-2 grid-rows-3 h-80 md:grid-cols-5 md:grid-rows-2'>
                <img
                    src={roomDetails.images[0]}
                    alt="Room Image 1"
                    className='col-span-2 row-span-1 object-cover w-full h-full rounded md:col-span-3 md:row-span-2'
                />
                {roomDetails.images.slice(1, 3).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Room Image ${index + 2}`}
                        className='hidden md:block object-cover w-full h-full rounded'
                    />
                ))}
                {roomDetails.images.slice(3, 5).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Room Image ${index + 4}`}
                        className='hidden md:block object-cover w-full h-full rounded'
                    />
                ))}
                {roomDetails.images.slice(1, 3).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Room Image ${index + 2}`}
                        className='block md:hidden col-span-1 row-span-1 object-cover w-full h-full rounded'
                    />
                ))}
                {roomDetails.images.slice(3, 5).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Room Image ${index + 4}`}
                        className='block md:hidden col-span-1 row-span-1 object-cover w-full h-full rounded'
                    />
                ))}
            </section>

            {/* Room Description & Reservation Box */}
            <section className='flex flex-col md:flex-row gap-6'>
                <RoomDetails roomDetails={roomDetails} />
                {/* Reservation Box */}
                <div className='md:w-2/5 border-2 rounded-2xl p-8 h-full'>
                    <p className='font-semibold text-xl font-playfair'>${roomDetails.price_per_night} per night</p>
                    <div className='border-y-2 p-4 h-auto m-4 flex flex-col items-center'>
                        <div className='flex items-center border-b pb-4 mb-4'>
                            <CheckInPicker />
                            <CheckOutPicker />
                        </div>
                        <GuestControl
                            adults={adults}
                            children={children}
                            onIncrementAdult={() => setAdults(adults + 1)}
                            onDecrementAdult={() => setAdults(adults - 1)}
                            onIncrementChild={() => setChildren(children + 1)}
                            onDecrementChild={() => setChildren(children - 1)}
                        />
                    </div>
                    <div className='flex flex-col gap-4 text-sm'>
                        <Button to="/payment" label="Book Now" variant="filled" />
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
