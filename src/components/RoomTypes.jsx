import React from 'react'
import RoomTypeCard from '../cards/RoomTypeCard'
import { useDispatch } from 'react-redux';
import {setSelectedRoomType} from "../store/hotelSlice.js"

export default function RoomType() {
    const dispatch = useDispatch();

    const handleRoomTypeClick = (roomType) => {
        dispatch(setSelectedRoomType(roomType));
    };
    return (
        <section className='gap-12 my-16 p-8'>
            <div className='md:flex space-y-4 justify-between items-center'>
                <h1 className='text-sunsetCoral font-playfair text-4xl font-semibold '>Rooms & Suits</h1>
                <nav className='flex gap-8 list-none cursor-pointer'>
                    <li onClick={() => handleRoomTypeClick('Classic Room')} className="custom-hover">Classic Rooms</li>
                    <li onClick={() => handleRoomTypeClick('Family Room')} className="custom-hover">Family Rooms</li>
                    <li onClick={() => handleRoomTypeClick('Business Suite')} className="custom-hover">Business Suites</li>
                    <li onClick={() => handleRoomTypeClick('Executive Suite')} className="custom-hover">Executive Suites</li>
                </nav>
            </div>
            <RoomTypeCard />
        </section>
    )
}
