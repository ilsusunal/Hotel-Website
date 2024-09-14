import React from 'react'
import RoomTypeCard from '../cards/RoomTypeCard'

export default function () {
    return (
        <section className='gap-12 my-16 p-8'>
            <div className='md:flex space-y-4 justify-between items-center'>
                <h1 className='text-lightpink font-playfair text-4xl font-semibold '>Rooms & Suits</h1>
                <nav className='flex gap-8'>
                    <li className="custom-hover">Classic Rooms</li>
                    <li className="custom-hover">Family Rooms</li>
                    <li className="custom-hover">Business Suites</li>
                    <li className="custom-hover">Executive Suites</li>
                </nav>
            </div>
            <RoomTypeCard />
        </section>
    )
}
