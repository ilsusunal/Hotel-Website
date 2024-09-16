import React, { useState } from 'react'
import RoomTypeCard from '../../cards/RoomTypeCard.jsx'
import { useDispatch } from 'react-redux';
import { setSelectedRoomType } from "../../store/hotelSlice.js"

export default function RoomType() {
    const dispatch = useDispatch();
    const [selectedRoomType, setSelectedRoomTypeLocal] = useState('Classic Room');

    const handleRoomTypeClick = (roomType) => {
        setSelectedRoomTypeLocal(roomType);
        dispatch(setSelectedRoomType(roomType));
    };
    return (
        <section className='gap-12 my-16 p-8'>
            <div className='md:flex space-y-4 justify-between items-center'>
                <h1 className='text-sunsetCoral font-playfair text-4xl font-semibold '>Rooms & Suits</h1>
                <nav className='flex gap-8 list-none cursor-pointer'>
                    <li onClick={() => handleRoomTypeClick('Classic Room')}
                        className={`custom-hover ${selectedRoomType === 'Classic Room' ? 'active' : ''}`}
                    >Classic Rooms</li>
                    <li onClick={() => handleRoomTypeClick('Family Room')}
                        className={`custom-hover ${selectedRoomType === 'Family Room' ? 'active' : ''}`}
                    >Family Rooms</li>
                    <li onClick={() => handleRoomTypeClick('Business Suite')}
                        className={`custom-hover ${selectedRoomType === 'Business Suite' ? 'active' : ''}`}
                    >Business Suites</li>
                    <li onClick={() => handleRoomTypeClick('Executive Suite')}
                        className={`custom-hover ${selectedRoomType === 'Executive Suite' ? 'active' : ''}`}
                    >Executive Suites</li>
                </nav>
            </div>
            <RoomTypeCard />
        </section>
    )
}
